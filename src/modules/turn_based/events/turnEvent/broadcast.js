import { usePeerStore } from "../../../../stores/peerStore";
import TurnEventMessage from "./payload";

export default function broadcastTurnEvent(turnData) {
    const { connections } = usePeerStore.getState();
    const msg = new TurnEventMessage({ turnData }).toObject();

    Object.values(connections).forEach(({ conn }) => {
        console.log('broadcasting msg', msg)

        if (conn && conn.open) {
            conn.send(msg);
        }
    });
}
