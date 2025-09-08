import BasePayload from "../basePayload";

export default class TurnEventMessage extends BasePayload {
    constructor({ turnData }) {
        super({
            // TODO: Construct payload from explicit parameters, not an object param
            // TODO: Construct payload from explicit parameters, not an object param
            // TODO: Construct payload from explicit parameters, not an object param
            // TODO: Construct payload from explicit parameters, not an object param
            // The object defeats the purpose of the DTO, since we're not specifying the actual structure of the object



            // TODO: Need to make this dynamic so we can reuse the useTurn hook in other scenes
            // TODO: Need to make this dynamic so we can reuse the useTurn hook in other scenes
            // TODO: Need to make this dynamic so we can reuse the useTurn hook in other scenes
            // TODO: Need to make this dynamic so we can reuse the useTurn hook in other scenes
            scene: "turnBased",

            type: "turnEvent",
            payload: {
                turnData
            },
        });
    }
}
