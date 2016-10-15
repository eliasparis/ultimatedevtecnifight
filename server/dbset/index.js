import firebase from "firebase";
import databaseUrl from "../config/databaseurl.js";

let db = null;

const dbInitializer = () => {

	firebase.initializeApp({

	  databaseURL: databaseUrl
	});

	db = firebase.database();
};


export { dbInitializer, db };