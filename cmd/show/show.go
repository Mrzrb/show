package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net"
	"os/exec"

	"github.com/Mrzrb/show/biz/question"
	"github.com/Mrzrb/show/srv/web"
	"github.com/fsnotify/fsnotify"
	"golang.org/x/sync/errgroup"
)

var (
	file      string
	contentCh chan string = make(chan string)
	theme     string
	addr      string = "0.0.0.0:8080"
	wsAddr    string = "0.0.0.0"
	wsPort    int    = 8081
	reloadCh         = make(chan struct{})
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
			fmt.Printf("error detected %s", err.Error())
		}
		return err
	})
	wg.Go(func() error {
		return WatchFile(file)
	})
	wg.Go(func() error {
		err := RunWs()
		if err != nil {
			fmt.Printf("error detected %s", err.Error())
		}
		return err
	})
	wg.Go(func() error {
		cmd := exec.Command("/usr/bin/open", fmt.Sprintf("http://%s:%d", GetLocalIP(), 8080))
		cmd.Start()
		cmd = exec.Command("/usr/bin/open", fmt.Sprintf("http://%s:%d/question", GetLocalIP(), 8080))
		cmd.Start()
		log.Printf("You ask url is : http://%s:8080/question/ask", GetLocalIP())
		return cmd.Start()
	})
	wg.Wait()
	return nil
}

// GetLocalIP returns the non loopback local IP of the host
func GetLocalIP() string {
	addrs, err := net.InterfaceAddrs()
	if err != nil {
		return ""
	}
	for _, address := range addrs {
		// check the address type and if it is not a loopback the display it
		if ipnet, ok := address.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
			if ipnet.IP.To4() != nil {
				return ipnet.IP.String()
			}
		}
	}
	return ""
}

func initFlag() {
	flag.StringVar(&file, "f", "", "set the markdown file to presentation")
	flag.StringVar(&theme, "t", "simple", "Theme of presentation, avalible options are black, moon, night, simple, zenburn")
	flag.Parse()
}

func Run() error {
	r := web.DefaultRouter()
	go func() {
		for content := range contentCh {
			web.Markdown(content, theme)
		}
	}()
	web.Question(r)
	return r.Run(addr)
}

func RunWs() error {
	config := &web.Config{
		Addr: wsAddr,
		Port: wsPort,
	}
	s := web.NewWsServer(config)
	s.RegisterMsgHandler("getall", question.Question.GetAllQuestions)
	s.RegisterMsgHandler("create", question.Question.AddOneQuestion)
	s.RegisterMsgHandler("show", question.Question.Show)
	s.RegisterMsgHandler("control", question.Question.Control)
	go func() {
		for range reloadCh {
			s.BroadcastRefresh()
		}
	}()
	return s.Run()
}

func WatchFile(f string) error {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Printf("[warn] hot reload failed")
	}
	b, err := ioutil.ReadFile(file)
	if err != nil {
		return err
	}
	contentCh <- string(b)
	defer watcher.Close()
	done := make(chan bool)
	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				if event.Op&fsnotify.Write == fsnotify.Write {
					log.Println("modified file:", event.Name)
					b, err := ioutil.ReadFile(file)
					if err != nil {
						return
					}
					contentCh <- string(b)
					reloadCh <- struct{}{}
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				log.Println("error:", err)
			}
		}
	}()
	err = watcher.Add(f)
	if err != nil {
		return err
	}
	<-done
	return nil
}
