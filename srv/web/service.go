package web

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gobuffalo/packr/v2"
)

func DefaultRouter() *gin.Engine {
	r := gin.Default()
	r.StaticFS("/assets", initStaticServer())
	r.LoadHTMLFiles("./static/tmpl/app.tmpl")
	return r
}

func initStaticServer() *packr.Box {
	box := packr.NewBox("../../static")
	return box
}

func Markdown(s string, r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "app.tmpl", map[string]string{
			"md": s,
		})
	})
}
