package files

import "io/ioutil"

func GetStringFromFile(f string) (string, error) {
	b, err := ioutil.ReadFile(f)
	if err != nil {
		panic("invalid file path")
	}
	return string(b), nil
}
