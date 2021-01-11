package web

import (
	"net/http"

	"github.com/Mrzrb/show/internal/files"
	"github.com/gin-gonic/gin"
)

func DefaultRouter() *gin.Engine {
	r := gin.Default()
	r.Static("/assets", "./static")
	r.LoadHTMLFiles("./static/tmpl/app.tmpl")
	r.GET("/", func(c *gin.Context) {
		s, _ := files.GetStringFromFile("./examples/test.mdx")
		c.HTML(http.StatusOK, "app.tmpl", map[string]string{
			"md": s,
		})
	})
	return r
}
