package check

import "fmt"

func Error(e error) {
	if e != nil {
		panic(e)
	}
}

func ErrorStr(t string, e interface{}) string {
	return fmt.Sprintf("%s: %v", t, e)
}
