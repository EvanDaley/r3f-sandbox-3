import { usePeerStore } from "../../../stores/peerStore";
import { useTurnStore } from "../stores/turnStore";
import { useEffect } from "react";
import broadcastTurnsInitEvent from "../events/turnsInitEvent/broadcast";
import broadcastTurnEvent from "../events/turnEvent/broadcast";

export const useTurns = () => {
    const { connections, isHost, peerId } = usePeerStore();
    const { isInitialized, initializeTurns } = useTurnStore();

    useEffect(() => {
        if (isHost && !isInitialized) {
            console.log('hook called')
            console.log('hook called')
            console.log('hook called')
            console.log('hook called')
            console.log('hook called')

            const startTime = Date.now();
            const randomPlayerId = chooseStartPlayer(connections);

            initializeTurns(startTime, randomPlayerId);

            broadcastTurnsInitEvent(startTime, randomPlayerId);
        }
    }, [isHost, isInitialized]);

    const takeTurn = (turnData) => {
        // Pick the next player
        // TODO: Make this smarter. This will only work with two people in the current state
        // TODO: Make this smarter. This will only work with two people in the current state
        // TODO: Make this smarter. This will only work with two people in the current state
        // TODO: Make this smarter. This will only work with two people in the current state
        // TODO: Make this smarter. This will only work with two people in the current state
        // TODO: We can look at turn history to identify who hasn't gone recently
        const otherPlayerIds = Object.keys(connections).filter(id => id !== peerId);
        console.log(otherPlayerIds)
        const nextPlayerId = otherPlayerIds[0];

        const turnWithMeta = {
            takenBy: peerId,
            nextPlayerId,
            ...turnData
        }

        broadcastTurnEvent(turnWithMeta);
    }

    return {
        takeTurn
    }
};

function chooseStartPlayer(connections) {
    const playerIds = Object.keys(connections);
    if (playerIds.length === 0) return null;

    const selectedPlayer = playerIds[Math.floor(Math.random() * playerIds.length)];

    console.log("Selected first player:", selectedPlayer);
    return selectedPlayer;
}
