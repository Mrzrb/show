package web

import (
	"html/template"
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/gobuffalo/packd"
	"github.com/gobuffalo/packr/v2"
)

var (
	box *packr.Box
)

func init() {
	initStaticServer()
}

func DefaultRouter() *gin.Engine {
	r := gin.Default()
	r.StaticFS("/assets", box)
	tmpl := loadTemplates()
	r.SetHTMLTemplate(tmpl)
	return r
}

func initStaticServer() {
	box = packr.New("box", "../../static")
}

func Markdown(s string, r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "tmpl/app.tmpl", map[string]string{
			"md": s,
		})
	})
}

func loadTemplates() *template.Template {
	t := template.New("")
	box.Walk(func(s string, f packd.File) error {
		log.Println(s)
		if strings.Index(s, "tmpl") != -1 {
			t.New(s).Parse(f.String())
		}
		return nil
	})
	return t
}
