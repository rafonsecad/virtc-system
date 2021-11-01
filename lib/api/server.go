package api

import (
	"os"

	"github.com/gofiber/fiber/v2"
)

var (
	port    string
	portenv string
)

func Run() {

	portenv = os.Getenv("PORT")

	if portenv != "" {

		port = ":" + portenv

		app := fiber.New()
		app.Get("/", func(c *fiber.Ctx) error {
			return c.SendString("Hello, World!")
		})
		app.Listen(port)
	} else {
		os.Exit(385)
	}
}
