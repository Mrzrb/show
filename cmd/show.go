package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os/exec"

	"github.com/Mrzrb/show/biz/question"
	"github.com/Mrzrb/show/srv/web"
	"golang.org/x/sync/errgroup"
)

var (
	file   string
	addr   string = "0.0.0.0:8080"
	wsAddr string = "0.0.0.0"
	wsPort int    = 8081
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

	wg.Go(func() error {
		err := Run()
		if err != nil {
			fmt.Printf("The file is not valid. Please check it")
		}
		return err
	})
	wg.Go(func() error {
		err := RunWs()
		if err != nil {
			fmt.Printf("The file is not valid. Please check it")
		}
		return err
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

func Run() error {
	r := web.DefaultRouter()
	b, err := ioutil.ReadFile(file)
	if err != nil {
		return err
	}
	web.Markdown(string(b), r)
	return r.Run(addr)
}

func RunWs() error {
	config := &web.Config{
		Addr: wsAddr,
		Port: wsPort,
	}
	s := web.NewWsServer(config)
	s.RegisterMsgHandler("askforit", question.Question.Accept)
	return s.Run()
}
