import fs from "fs";
import ejs from "ejs";
import { db } from "../dbset";


const getCmsData = function(request, response) {

	const ref = db.ref("events");

	response.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile('./public/cms.html', 'utf8', function (err, data) {

		ref.once("value", function(snapshot) {

			const events = snapshot.val();
			response.end(ejs.render(data , { events : events }));
		});
	});
};

export default getCmsData;