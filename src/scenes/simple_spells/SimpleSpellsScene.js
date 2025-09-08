import React, { Suspense } from 'react'
import LinesRobot from "../../components/characters/LinesRobot";
import OrthographicOrbitControls from "../../components/controls/OrthographicOrbitControls";

export default function Scene() {
    return (
        <>
            <OrthographicOrbitControls/>
            <color attach="background" args={['#ffffff']} />
            <ambientLight intensity={1} color="#aaffaa" />

            <Suspense fallback={null}>
                <LinesRobot/>

                <directionalLight
                    position={[5, 10, 5]}
                    intensity={.5
                    }
                    castShadow
                />
            </Suspense>
        </>
    )
}
