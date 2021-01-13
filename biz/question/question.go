package question

import "github.com/Mrzrb/show/srv/web"

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

//type MsgHandler func(*WsMessage) (SuccessMsg, error)
