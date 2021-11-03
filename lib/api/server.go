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

	portenv = os.Getenv("VIRTC_API_PORT")

	if portenv != "" {

		port = ":" + portenv

		app := fiber.New()

		// Return global statistics
		app.Get("/", func(c *fiber.Ctx) error {
			return nil
		})

		app.Listen(port)
	} else {
		os.Exit(129)
	}
}
