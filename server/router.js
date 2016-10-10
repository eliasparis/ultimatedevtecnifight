import dispatcher from "httpdispatcher";
import fs from "fs";

//Throw the dispatcher
const router = function(request, response){
	
	dispatcher.dispatch(request, response);	
};

//Routes definition
dispatcher.onGet("/", function(request, response) {

	response.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile('./public/index.html', 'utf8', function (err,data) {
	    response.end(data);
	});
});	


export default router;