import * as scene1Handlers from './handlers/scene1';
import * as birdSceneHandler from '../modules/birds/handlers/birdSceneHandler';
import * as commonHandlers from './handlers/common';

// Dev note: Going forward, handlers should use this import structure with an index.js file per scene.
import GridSceneHandler from '../modules/simple_grid/handlers';

import TurnBasedHandler from '../modules/turn_based/events'

const HANDLERS = {
    common: commonHandlers,
    // scene1: scene1Handlers,
    // birdScene: birdSceneHandler,
    // scene2: scene2Handlers,
    // gridScene: GridSceneHandler
    turnBased: TurnBasedHandler,
};

export const routeMessage = (fromPeerId, message) => {
    const { scene, type, payload } = message;

    const handlers = HANDLERS[scene] || {};
    const handler = handlers[type] || commonHandlers[type] ;

    if (handler) {
        handler(fromPeerId, payload);
    } else {
        console.log(handler)
        console.log(handlers)

        console.warn(`No handler for message: ${scene}/${type}`);
    }
};
