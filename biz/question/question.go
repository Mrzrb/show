package question

import (
	"github.com/Mrzrb/show/biz/question/data"
	"github.com/Mrzrb/show/srv/web"
)

type QuestionHandler struct{}

var Question *QuestionHandler

func init() {
	Question = &QuestionHandler{}
}

func (qh *QuestionHandler) Accept(msg *web.WsMessage) (*web.SuccessMsg, error) {
	succObj := web.NewSuccessMsg()
	succObj.Data = 123
	return succObj, nil
}

func (qh *QuestionHandler) GetAllQuestions(msg *web.WsMessage) (*web.SuccessMsg, error) {
	qs, err := data.QuestionDB.Get()
	if err != nil {
		return nil, err
	}
	succObj := web.NewSuccessMsg()
	succObj.Data = qs
	succObj.Action = "getall"
	succObj.Broadcast = false
	msg.Server.BroadcastCh <- succObj
	return succObj, nil
}

func (qh *QuestionHandler) AddOneQuestion(msg *web.WsMessage) (*web.SuccessMsg, error) {
	succObj := web.NewSuccessMsg()
	cr := msg.Data.(map[string]interface{})
	name := cr["name"].(string)
	question := cr["question"].(string)
	if name == "" && question == "" {
		return succObj, nil
	}
	data.QuestionDB.Create(name, question)
	succObj.Data = cr
	succObj.Action = "broadcast"
	succObj.Broadcast = true
	msg.Server.BroadcastCh <- succObj
	return succObj, nil
}

func (qh *QuestionHandler) Show(msg *web.WsMessage) (*web.SuccessMsg, error) {
	succObj := web.NewSuccessMsg()
	cr := msg.Data.(map[string]interface{})
	name := cr["name"].(string)
	question := cr["question"].(string)
	if name == "" && question == "" {
		return succObj, nil
	}
	succObj.Data = cr
	succObj.Action = "show"
	succObj.Broadcast = true
	msg.Server.BroadcastCh <- succObj
	return succObj, nil
}
