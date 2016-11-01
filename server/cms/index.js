import fs from "fs";
import ejs from "ejs";
import { db } from "../dbset";


const getCmsData = function(request, response) {

	const ref = eventDbRef(); 

	response.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile('./public/cms.html', 'utf8', function (err, data) {

		ref.once("value", function(snapshot) {

			const events = snapshot.val();
			response.end(ejs.render(data , { events : events }));
		});
	});
};

const addCmsData = function(request, response){

	const ref = eventDbRef();
	//Request information
	const reqbody = JSON.parse(request.body);
	//Saving event data
	const push = ref.push(reqbody);
	//Getting the key of the saved event
	const key = push.key;
	
	//Initialize a new stats object with event key
	db
		.ref("stats/" + key)
		.set({ "title" : reqbody.title });

	response.writeHead(200, {"Content-Type": "text/html"})
	response.end('OK');
}

function eventDbRef(){

	return db.ref("events");
};

export { getCmsData, addCmsData };