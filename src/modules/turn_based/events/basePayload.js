export default class BasePayload {
    constructor({ scene, type, payload = {}}) {
        if (!scene) throw new Error("BasePayload requires a 'scene'");
        if (!type) throw new Error("BasePayload requires a 'type'");

        this.scene = scene;
        this.type = type;
        this.payload = payload;
    }

    toObject() {
        return {
            scene: this.scene,
            type: this.type,
            payload: this.payload,
        };
    }

    // TBD on whether I want this
    // // Deserialize from plain object / JSON
    // static from(data) {
    //     return new BaseMessage({
    //         scene: data.scene,
    //         type: data.type,
    //         payload: data.payload,
    //         sender: data.sender,
    //     });
    // }
}
