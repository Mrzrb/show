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
	return succObj, nil
}

func (qh *QuestionHandler) AddOneQuestion(msg *web.WsMessage) (*web.SuccessMsg, error) {
	cr := msg.Data.(map[string]interface{})
	name := cr["name"].(string)
	question := cr["question"].(string)
	data.QuestionDB.Create(name, question)
	succObj := web.NewSuccessMsg()
	succObj.Data = cr
	return succObj, nil

}

//type MsgHandler func(*WsMessage) (SuccessMsg, error)
