package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os/exec"

	"github.com/Mrzrb/show/srv/web"
	"github.com/gin-gonic/gin"
	"golang.org/x/sync/errgroup"
)

var (
	file        string
	addr        string = "0.0.0.0:8080"
	addrmonitor string = "0.0.0.0:8081"
)

func main() {
	initFlag()
	if file == "" {
		flag.Usage()
		return
	}

	if err := bootStrap(); err != nil {
		panic("error detect")
	}
}

func bootStrap() error {
	var wg errgroup.Group

	r, err := initWebServer()
	if err != nil {
		fmt.Printf("The file is not valid. Please check it")
		return nil
	}
	wg.Go(func() error {
		return r.Run(addr)
	})
	wg.Go(func() error {
		cmd := exec.Command("/usr/bin/open", fmt.Sprintf("http://%s", "localhost:8080"))
		return cmd.Start()
	})
	wg.Wait()
	return nil
}

func initFlag() {
	flag.StringVar(&file, "f", "", "set the markdown file to presentation")
	flag.Parse()
}

func initWebServer() (*gin.Engine, error) {
	r := web.DefaultRouter()
	b, err := ioutil.ReadFile(file)
	if err != nil {
		return nil, err
	}
	web.Markdown(string(b), r)
	return r, nil
}
