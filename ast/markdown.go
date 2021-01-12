package ast

import (
	"bytes"
	"log"

	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/ast"
	"github.com/yuin/goldmark/text"
)

func Test1() {
	str := `
# title

> asd

- asd
- asddas
    `
	var buf bytes.Buffer
	if err := goldmark.Convert([]byte(str), &buf); err != nil {
		panic("")
	}
	r := text.NewReader([]byte(str))
	a := goldmark.DefaultParser().Parse(r)
	log.Printf("%+v", a)
	ast.Walk(a, func(n ast.Node, entering bool) (ast.WalkStatus, error) {
		if entering {
			log.Println(a.Kind())
		}
		return ast.WalkContinue, nil
	})
}
