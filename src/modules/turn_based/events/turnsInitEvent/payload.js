import BasePayload from "../basePayload";

export default class TurnsInitEventMessage extends BasePayload {
    constructor({ startTime, currentPlayerId}) {
        super({

            // TODO: Need to make this dynamic so we can reuse the useTurn hook in other scenes
            // TODO: Need to make this dynamic so we can reuse the useTurn hook in other scenes
            // TODO: Need to make this dynamic so we can reuse the useTurn hook in other scenes
            // TODO: Need to make this dynamic so we can reuse the useTurn hook in other scenes
            scene: "turnBased",

            type: "turnsInitEvent",
            payload: {
                startTime,
                currentPlayerId
            },
        });
    }
}
