import dispatcher from "httpdispatcher";
import { getCmsData, addCmsData } from "./cms";
import Home from "./home";


//Throw the dispatcher
const router = function(request, response){
	
	dispatcher.dispatch(request, response);	
};

//Routes definition
//Get
dispatcher.onGet("/", function(request, response) {

	Home(request, response);
});	

dispatcher.onGet("/cms", function(request, response) {
	
	getCmsData(request, response);
});	

//Post
dispatcher.onPost("/api/event", function(request, response) {
	
	addCmsData(request, response);
});	

export default router;