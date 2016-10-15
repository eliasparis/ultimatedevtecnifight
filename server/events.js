import events from "events";

let eventEmitter = null;

const eventInitializer = () => {

	eventEmitter = new events.EventEmitter();
};

export { eventInitializer, eventEmitter };  