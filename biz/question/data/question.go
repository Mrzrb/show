package data

import (
	"github.com/Mrzrb/show/data"
	"gorm.io/gorm"
)

type DB struct {
	*data.BaseDao
}

var QuestionDB DB

type Question struct {
	gorm.Model

	Name     string `json:"name"`
	Question string `json:"desc"`
}

func init() {
	db := data.NewData("/tmp/.show.db")
	QuestionDB = DB{
		db,
	}
	QuestionDB.C.AutoMigrate(Question{})
}

func (db *DB) Create(name, question string) error {
	q := &Question{
		Name:     name,
		Question: question,
	}
	return db.C.Create(q).Error
}

func (db *DB) Get() ([]*Question, error) {
	var qs []*Question
	err := db.C.Find(&qs).Error
	return qs, err
}
