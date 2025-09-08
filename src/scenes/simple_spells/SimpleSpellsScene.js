import React, { Suspense } from "react"
import { OrthographicCamera } from "@react-three/drei"
import Pylon from "../../components/props/sprites/Pylon"
import LinesRobot from "../../components/characters/LinesRobot"
import Floor from "./objects/grid_generator/Floor"
import OrthographicOrbitControls from "../../components/controls/OrthographicOrbitControls";

export default function Scene() {
    return (
        <>
            <color attach="background" args={['#111111']} />
            <Suspense fallback={null}>
                <Pylon position={[0,1,0]}/>

                <group position={[2, 3, 0]}>
                    <pointLight color="#66ffff" intensity={25} decay={1} distance={250} />
                </group>
                <OrthographicCamera makeDefault position={[15, 15, 15]} zoom={60} />

                {/* Floor is generic, LinesRobot is injected */}
                <Floor>
                    {/* The floor receives click events and moves anything nested under it to the cell that was clicked */}
                    <LinesRobot scale={[1, 1, 1]} />
                </Floor>

                <ambientLight intensity={1} color="#aaffaa" />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={.3}
                    castShadow
                />
            </Suspense>

            <OrthographicOrbitControls/>
        </>
    )
}