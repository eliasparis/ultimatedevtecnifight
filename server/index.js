import http from "http";
import dispatcher from "httpdispatcher";
import fs from "fs";
import statics from "node-static";

const PORT = 8080;
//const file = new statics.Server('./public',{  });;

dispatcher.setStaticDirname('');
dispatcher.setStatic('public');

dispatcher.onGet("/", function(request, response) {

	//const index = fs.readFileSync("./public/index.html");
    response.writeHead(200, {"Content-Type": "text/html"});
    //response.write(index);
    fs.readFile('./public/index.html', 'utf8', function (err,data) {
            response.end(data);
        });
    //response.end();
});	

function handler(request, response){	

	dispatcher.dispatch(request, response);

	// response.writeHead(200, {'Content-Type': 'text/html'});
	// response.write('AKIIIIIII ESTAMOS');
	//setTimeout(function(){response.end(`FUNCIONAAAAAAA ${request.url}`);}, 3000);

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