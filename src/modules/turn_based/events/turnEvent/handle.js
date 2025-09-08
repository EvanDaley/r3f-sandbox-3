import {useTurnStore} from "../../stores/turnStore";

export function handleTurnEvent(fromPeerId, payload) {

    // TODO:



    const { turnData } = payload;
    console.log(`Turn initialization from host:`, payload);
    console.log(`Turn initialization from host:`, payload);
    console.log(`Turn initialization from host:`, payload);
    console.log(`Turn initialization from host:`, payload);
    console.log(`Turn initialization from host:`, payload);

    const { takeTurn } = useTurnStore.getState();

    // Set local turn to whatever the host gave us
    takeTurn(turnData);

}