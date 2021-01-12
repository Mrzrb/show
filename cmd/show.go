package main

import (
	"flag"
	"io/ioutil"

	"github.com/Mrzrb/show/srv/web"
	"github.com/gin-gonic/gin"
)

var (
	file string
)

func main() {
	initFlag()
	r := initWebServer()
	r.Run("0.0.0.0:8080")
}

func initFlag() {
	flag.StringVar(&file, "f", "", "set the markdown file to presentation")
	flag.Parse()
}

func initWebServer() *gin.Engine {
	r := web.DefaultRouter()
	b, err := ioutil.ReadFile(file)
	if err != nil {
		panic("failed to read file" + file)
	}
	web.Markdown(string(b), r)
	return r
}
