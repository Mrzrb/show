package main

import (
	"github.com/Mrzrb/show/srv/web"
	"github.com/gin-gonic/gin"
)

func main() {
	r := initWebServer()
	r.Run(":8080")
}

func initWebServer() *gin.Engine {
	r := web.DefaultRouter()
	return r
}
