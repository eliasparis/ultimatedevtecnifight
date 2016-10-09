import http from "http";

const PORT = 8080;

function handler(request, response){
	response.end(`FUNCIONAAAAAAA ${request.url}`);
};

const server = http.createServer(handler);

server
	.listen(
		PORT, 
		function(){ 
			console.log(`You are listening at ${PORT}`);
			console.log(`Open your browser at http://localhost:${PORT}`);
		}
	);