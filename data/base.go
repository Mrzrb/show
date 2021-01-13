package data

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type BaseDao struct {
	C *gorm.DB
}

func NewData(f string) *BaseDao {
	db, err := gorm.Open(sqlite.Open(f), &gorm.Config{})
	if err != nil {
		log.Printf("[warn] failed to open sqlite")
	}
	return &BaseDao{
		C: db,
	}
}
