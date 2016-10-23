import dispatcher from "httpdispatcher";
import fs from "fs";
import ejs from "ejs";
import { getCmsData, addCmsData } from "./cms";


//Throw the dispatcher
const router = function(request, response){
	
	dispatcher.dispatch(request, response);	
};

//Routes definition
//Get
dispatcher.onGet("/", function(request, response) {

	response.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile('./public/index.html', 'utf8', function (err, data) {
	    
	   response.end(data);
	});
});	

dispatcher.onGet("/cms", function(request, response) {
	
	getCmsData(request, response);
});	

//Post
dispatcher.onPost("/api/event", function(request, response) {
	
	addCmsData(request, response);
});	

export default router;