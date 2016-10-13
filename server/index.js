import http from "http";
import dispatcher from "httpdispatcher";
import router from "./router.js";
import firebase from "firebase";

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

firebase.initializeApp({

  databaseURL: ""
});

const db = firebase.database();
const ref = db.ref("events");

ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});