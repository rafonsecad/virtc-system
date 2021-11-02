package json

import (
	"encoding/json"
	"io/ioutil"

	"virtc/lib/basics/check"
)

type keys struct {
	User     string `json:"USER"`
	Password string `json:"PASSWORD"`
	Dbname   string `json:"DB_NAME"`
}

func ReadSettings(k string) string {

	v, err := ioutil.ReadFile("vtc-settings.json")
	check.Error(err)

	var payload keys

	err = json.Unmarshal(v, &payload)
	check.Error(err)

	switch k {
	case "user":
		return payload.User
	case "password":
		return payload.Password
	case "dbname":
		return payload.Dbname
	default:
		return ""
	}
}
