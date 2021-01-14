package data

type DB []*Question

var QuestionDB DB

type Question struct {
	Name     string `json:"name"`
	Question string `json:"desc"`
}

func init() {
	QuestionDB = make([]*Question, 0)
}

func (db *DB) Create(name, question string) error {
	q := &Question{
		Name:     name,
		Question: question,
	}
	QuestionDB = append(QuestionDB, q)
	return nil
}

func (db *DB) Get() ([]*Question, error) {
	return QuestionDB, nil
}
