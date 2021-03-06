import fs from "fs";
import ejs from "ejs";
import { db } from "../dbset";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from "../../client/home";


//Home main function
export default function (request, response) {

	const ref = db.ref("events");
	const refStats = db.ref("stats");
	let events = null;
	let currentEvent = null;
	let currentEventStats = null;
	
	fs.readFile('./public/index.html', 'utf8', function (err, data) {
		ref
			.limitToLast(5)
			.once("value", function(snapshot) {

				//Populating events
				events = snapshot.val();

				//Retrieveing current event key
				const key = getCurrentEvent(events);
				currentEvent = events[key];

				db
					.ref("stats/" + key)
					.once("value", function(snapshotstats){

						//Gettign stats from current event
						currentEventStats = snapshotstats.val()

						//Response
						response.writeHead(200, {"Content-Type": "text/html"});
						response.end(
							ejs.render(
								data,
								{
									home : ReactDOMServer.renderToString(<Home />),
								}
							)
						);
					})
			});
	});
};

function getCurrentEvent(events){

	//Returns the single key of the event that is active

	const today = new Date().toJSON().slice(0, 10);

	return Object
		.keys(events)
		.filter((eventkey) => {

			return !events[eventkey].ended
		})
		.filter((openeventkey) => {

			return events[openeventkey].date_begin <= today && 
					events[openeventkey].date_end >= today
		})[0];
};

