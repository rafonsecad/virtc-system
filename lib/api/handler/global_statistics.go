package handler

import (
	"database/sql"
	"time"
	"virtc/lib/basics/check"
	"virtc/lib/basics/json"

	_ "github.com/go-sql-driver/mysql"
	f "github.com/gofiber/fiber/v2"
)

func GetGlobalStatistics(c *f.Ctx) error {

	var login string = json.ReadSettings("user") + ":" + json.ReadSettings("password") + "@/" + json.ReadSettings("dbname")

	db, err := sql.Open("mysql", login)
	check.Error(err)

	defer db.Close()

	err = db.Ping()
	check.Error(err)

	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	return c.SendString(login)

	// TODO: return statistics
}
