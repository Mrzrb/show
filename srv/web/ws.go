package web

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net"
	"net/http"

	"github.com/gobwas/ws"
	"github.com/gobwas/ws/wsutil"
)

type WsServer struct {
	conn    *net.Conn
	config  *Config
	handler map[string]MsgHandler
}

type WsMessage struct {
	Action string
	Data   interface{}
}

type Config struct {
	Addr string
	Port int
}

type WsOptionFunc func(*Config) error
type MsgHandler func(*WsMessage) (*SuccessMsg, error)

type WsErr error

type BaseResponse struct {
	Status int         `json:"status"`
	Msg    string      `json:"msg"`
	Data   interface{} `json:"data"`
}

type ErrorMsg struct {
	BaseResponse
}

type SuccessMsg struct {
	BaseResponse
}

func NewSuccessMsg() *SuccessMsg {
	return &SuccessMsg{
		BaseResponse{
			Status: 200,
			Msg:    "success",
		},
	}
}

func ErrMsg(err error) string {
	e := ErrorMsg{}
	e.Status = 500
	e.Msg = fmt.Sprintf("Interal error : %s", err)
	ret, _ := json.Marshal(e)
	return string(ret)
}

//func SuccMsg()

var (
	actionNotFound = WsErr(errors.New("action not found"))
	msgProcessErr  = WsErr(errors.New("errors detected when process msg"))
)

func NewWsServer(c *Config, opt ...WsOptionFunc) *WsServer {
	return &WsServer{
		config:  c,
		handler: make(map[string]MsgHandler),
	}
}

func (s *WsServer) RegisterMsgHandler(name string, fn MsgHandler) {
	if _, ok := s.handler[name]; !ok {
		s.handler[name] = fn
	}
}

func (s *WsServer) OnMsg(msg []byte) (string, WsErr) {
	var wsMsg WsMessage
	if err := json.Unmarshal(msg, &wsMsg); err != nil {
		return "", err
	}
	action := wsMsg.Action
	h, ok := s.handler[action]
	if !ok {
		return "", actionNotFound
	}
	log.Printf("[request in : %s]:%+v", action, wsMsg.Data)
	succObj, err := h(&wsMsg)
	if err != nil {
		return "", err
	}
	rest, err := json.Marshal(succObj)

	return string(rest), err
}

func (s *WsServer) Run() error {
	log.Printf("ws server start success")
	return http.ListenAndServe(fmt.Sprintf("%s:%d", s.config.Addr, s.config.Port), http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		conn, _, _, err := ws.UpgradeHTTP(r, rw)
		if err != nil {
			log.Printf("[warn] %s", "upgrade ws protocol failed")
			return
		}
		go func() {
			defer conn.Close()
			for {
				msg, op, err := wsutil.ReadClientData(conn)
				if err != nil {
					// handle error
					continue
				}
				rest, err := s.OnMsg(msg)
				if err != nil {
					err = fmt.Errorf("[warn] on msg error : %w", err)
					rest = ErrMsg(err)
				}
				err = wsutil.WriteServerMessage(conn, op, []byte(rest))
				if err != nil {
					// handle error
					continue
				}
			}
		}()
	}))
}
