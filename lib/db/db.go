package db

import (
	"database/sql"
	"os"
	"virtc/lib/basics/check"

	_ "github.com/go-sql-driver/mysql"
)

type loginData struct {
	User     string
	Password string
	Database string
}

var (
	loginValues loginData
	loginString string
)

func Connect() {

	loginValues = loginData{
		User:     os.Getenv("VIRTC_DB_USER"),
		Password: os.Getenv("VIRTC_DB_PASSWORD"),
		Database: os.Getenv("VIRTC_DB_NAME"),
	}

	loginString = loginValues.User + ":" + loginValues.Password + "@/" + loginValues.Database

	Mydb, err := sql.Open("mysql", loginString)
	check.Error(err)
	defer Mydb.Close()

}
