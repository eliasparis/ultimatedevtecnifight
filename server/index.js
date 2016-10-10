import http from "http";
import dispatcher from "httpdispatcher";
import router from "./router.js";

const PORT = 8080;

dispatcher.setStaticDirname('');
dispatcher.setStatic('public');

function handler(request, response){	

	router(request, response);
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