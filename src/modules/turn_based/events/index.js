import {handleTurnsInitEvent} from "./turnsInitEvent/handle";

// There is definitely a better way to do this
// The key needs to match the event name
// The value is the handler
export default {
    turnsInitEvent: handleTurnsInitEvent
};