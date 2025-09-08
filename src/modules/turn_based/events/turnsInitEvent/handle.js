import {useTurnStore} from "../../stores/turnStore";

export function handleTurnsInitEvent(fromPeerId, payload) {
    const { startTime, currentPlayerId } = payload;
    console.log(`Turn initialization from host:`, payload);

    const { initializeTurns } = useTurnStore.getState();

    // Set local turn to whatever the host gave us
    initializeTurns(startTime, currentPlayerId);

}