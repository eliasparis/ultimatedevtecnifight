import { db } from "../dbset";


const cmsData = function() {

	const ref = db.ref("events");
	return ref;
};

export default cmsData;