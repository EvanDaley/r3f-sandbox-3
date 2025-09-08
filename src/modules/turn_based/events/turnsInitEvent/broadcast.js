import { usePeerStore } from "../../../../stores/peerStore";
import TurnsInitEventMessage from "./payload";

export default function broadcastTurnsInitEvent(startTime, currentPlayerId) {
    const { connections } = usePeerStore.getState();
    const msg = new TurnsInitEventMessage({ startTime, currentPlayerId }).toObject();

    Object.values(connections).forEach(({ conn }) => {
        console.log('broadcasting msg', msg)

        if (conn && conn.open) {
            conn.send(msg);
        }
    });
}
