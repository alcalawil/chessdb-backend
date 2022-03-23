import express from "express";
import { checkApiKey } from './middlewares';

export function setupServer() {
	const port = 3000;
	const server = express();
	server.use(checkApiKey);
	server.get("/", function (req, res) {
	  res.send("Hello World");
	});
	 
	server.listen(port);
	console.log(`listening on port ${port}`);
	return server;
}


