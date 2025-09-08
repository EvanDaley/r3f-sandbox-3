// globalGameStore.js
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import {generateUniqueStoreName} from "../helpers/stringHelpers";

const storeName = generateUniqueStoreName('GlobalGameStore');

export const useGlobalGameStore = create(devtools((set, get) => ({

    // Not currently used but we could use it for some kind of meta progression between scenes/modules

    // playerScores: {}, // { peerId: totalScore }
    //
    // // Actions
    // updatePlayerScore: (peerId, score) =>
    //     set((state) => ({
    //         playerScores: {
    //             ...state.playerScores,
    //             [peerId]: score,
    //         },
    //     })),
    //
    // addToPlayerScore: (peerId, points) =>
    //     set((state) => ({
    //         playerScores: {
    //             ...state.playerScores,
    //             [peerId]: (state.playerScores[peerId] || 0) + points,
    //         },
    //     })),
    //
    // initializePlayer: (peerId) =>
    //     set((state) => ({
    //         playerScores: {
    //             ...state.playerScores,
    //             [peerId]: state.playerScores[peerId] || 0,
    //         },
    //     })),
    //
    // reset: () => set({
    //     playerScores: {},
    // }),
    //
    // // Getters
    // getPlayerScore: (peerId) => get().playerScores[peerId] || 0,
    // getTopPlayers: () => {
    //     const scores = get().playerScores;
    //     return Object.entries(scores)
    //         .sort(([,a], [,b]) => b - a)
    //         .slice(0, 5);
    // },
}), { name: storeName }));

