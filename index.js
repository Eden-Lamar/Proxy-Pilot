const express = require("express")
const morgan = require("morgan");
const chalk = require("chalk");

const app = express()

// Use morgan for logging requests
app.use(morgan("dev"));


// Middleware to add a custom header to all responses
app.use((req, res, next) => {
	res.setHeader("X-Custom-Header", "Hello From The Proxy Server!");
	next();
});

const port = process.env.PORT || 8080


app.get("/", (req, res) => {
	// console.log(req)
	res.sendFile(`${__dirname}/servicea.html`)
})


// ASCII art banner
console.log(chalk.blueBright.bold("\n==============================================="));
console.log(chalk.greenBright.bold("       🙀    Proxy Server is Running    🙀         "));
console.log(chalk.blueBright.bold("===============================================\n"));

app.listen(port, () => {
	console.log(`Proxy Server is listening on Port ${port}`)
}
)