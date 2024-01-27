const express = require("express")
const rewrite = require('http-rewrite-middleware');
const morgan = require("morgan");
const chalk = require("chalk");

const app = express()


// Use morgan for logging requests
app.use(morgan("dev"));

// Define rewrite rules
const rewriteRules = [
	{
		from: '.*',
		to: '/',
	},
];

// Apply rewrite middleware
app.use(rewrite.getMiddleware(rewriteRules));

// Serve a local HTML file
const customHtmlMiddleware = (req, res, next) => {
	res.sendFile(`${__dirname}/servicea.html`)
	res.setHeader("X-Custom-Header", "Hello From The Proxy Server!");

}

// Apply middleware
app.use((req, res, next) => {
	if (req.url === '/') {
		// If the request is to the root, use custom HTML middleware
		customHtmlMiddleware(req, res, next);
	} else {
		next()
	}
});


const port = process.env.PORT || 8080


app.listen(port, () => {
	// ASCII art banner
	console.log(chalk.blueBright.bold("\n==============================================="));
	console.log(chalk.greenBright.bold(`🙀    Proxy Server is Running on port ${port}  🙀`));
	console.log(chalk.blueBright.bold("===============================================\n"));
}
)