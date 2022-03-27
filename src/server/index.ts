import express from "express";
import { checkApiKey } from './middlewares';

const server = express();

export function setupServer() {
	server.use(express.json());
	server.use(checkApiKey);
	server.get("/", function (req, res) {
	  res.send("Hello World");
	});

	return server;
}

export function startServer(port = 3000) {
	// start server
	server.listen(port);
	console.log(`listening on port ${port}`);
}


