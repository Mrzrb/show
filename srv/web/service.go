package web

import (
	"html/template"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/gobuffalo/packd"
	"github.com/gobuffalo/packr/v2"
)

var (
	box     *packr.Box
	content string
	theme   string
)

func init() {
	initStaticServer()
}

func DefaultRouter() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	r.StaticFS("/assets", box)
	tmpl := loadTemplates()
	r.SetHTMLTemplate(tmpl)
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "tmpl/app.tmpl", map[string]template.HTML{
			"md":    template.HTML(content),
			"theme": template.HTML(theme),
		})
	})
	return r
}

func initStaticServer() {
	box = packr.New("box", "../../static")
}

func Markdown(s string, t string) {
	content = s
	theme = t
}

func Question(r *gin.Engine) {
	r.GET("/question/*ask", func(c *gin.Context) {
		c.HTML(http.StatusOK, "tmpl/question.html", map[string]string{})
	})
}

func loadTemplates() *template.Template {
	t := template.New("")
	box.Walk(func(s string, f packd.File) error {
		if strings.Index(s, "tmpl") != -1 || strings.Index(s, "html") != -1 {
			t.New(s).Parse(f.String())
		}
		return nil
	})
	return t
}
