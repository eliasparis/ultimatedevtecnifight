import dispatcher from "httpdispatcher";
import fs from "fs";
import ejs from "ejs";
import cmsData from "./cms";


//Throw the dispatcher
const router = function(request, response){
	
	dispatcher.dispatch(request, response);	
};

//Routes definition
dispatcher.onGet("/", function(request, response) {

	response.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile('./public/index.html', 'utf8', function (err, data) {
	    
	   response.end(data);
	});
});	

dispatcher.onGet("/cms", function(request, response) {
	
	const cmsInfo = cmsData();

	response.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile('./public/cms.html', 'utf8', function (err, data) {

		cmsInfo.once("value", function(snapshot) {

			const events = snapshot.val();
			response.end(ejs.render(data , { events : events }));
		});
	});
});	

export default router;