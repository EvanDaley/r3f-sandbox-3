import { usePeerStore } from "../../../stores/peerStore";
import { useTurnStore } from "../stores/turnStore";
import { useEffect } from "react";
import broadcastTurnsInitEvent from "../events/turnsInitEvent/broadcast";

export const useTurns = () => {
    const { connections, isHost } = usePeerStore();
    const { isInitialized, initializeTurns } = useTurnStore();

    useEffect(() => {
        if (isHost && !isInitialized) {
            const startTime = Date.now();
            const randomPlayerId = chooseStartPlayer(connections);

            initializeTurns(startTime, randomPlayerId);

            broadcastTurnsInitEvent(startTime, randomPlayerId);
        }
    }, [isHost, isInitialized]);
};

function chooseStartPlayer(connections) {
    const playerIds = Object.keys(connections);
    if (playerIds.length === 0) return null;

    const selectedPlayer = playerIds[Math.floor(Math.random() * playerIds.length)];

    console.log("Selected first player:", selectedPlayer);
    return selectedPlayer;
}
