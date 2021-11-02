package check

import "fmt"

func Error(e error) error {
	panic(e)
}

func ErrorStr(t string, e interface{}) string {
	return fmt.Sprintf("%s: %v", t, e)
}
