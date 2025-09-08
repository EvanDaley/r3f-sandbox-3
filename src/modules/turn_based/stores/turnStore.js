import create from 'zustand'
import {generateUniqueStoreName} from "../../../helpers/stringHelpers";
import {devtools} from "zustand/middleware";

const storeName = generateUniqueStoreName('TurnStore')
console.log('my store is', storeName);

export const useTurnStore = create(
    devtools(
        (set, get) => ({

            // State
            isInitialized: false,
            turnHistory: {},
            currentPlayerId: '',
            currentTurnStartTime: null,


            // Actions
            initializeTurns: (startTime, currentPlayerId) => {
                console.log('Initializing turns')

                set(
                    {
                        isInitialized: true,
                        turnHistory: {},
                        currentPlayerId: currentPlayerId,
                        currentTurnStartTime: startTime,
                    },
                    false,
                    'initializeTurns'
                )
            },

            updateCurrentPlayerId: (peerId, currentPlayerId) => {
                // TODO: Fill this out

                // set(
                //     (state) => ({
                //         playerPositions: {
                //             ...state.playerPositions,
                //             [peerId]: position,
                //         },
                //     }),
                //     false,
                //     `updatePlayerPosition/${peerId}`
                // )
            },

            // todo:
            updateTurnHistory: (peerId, turnInformation) => {

            },

            initializePlayer: (peerId) => {
                // console.log('Initialized player', peerId);
                //
                // const startingX = Math.ceil((Math.random() * 15) - 8)
                // const startingY = 0
                // const startingZ = Math.ceil((Math.random() * 15) - 8)
                // const startingPos = [startingX, startingY, startingZ];
                //
                // set(
                //     (state) => ({
                //         playerPositions: {
                //             ...state.playerPositions,
                //             [peerId]: startingPos,
                //         },
                //     }),
                //     false,
                //     `initializePlayer/${peerId}`
                // );
                //
                // console.log('Result', startingPos);
            },


            // Getters
            getPlayerPosition: (peerId) => get().playerPositions[peerId] || [0, 0, 0],

        }),
        { name: storeName }
    )
)
