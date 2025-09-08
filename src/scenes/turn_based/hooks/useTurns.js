import {usePeerStore} from "../../../stores/peerStore";

export const useTurns = () => {
    const { connections, peerStore, isHost } = usePeerStore();

}