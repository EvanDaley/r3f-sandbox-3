import React, { Suspense } from "react"
import LinesRobot from "../../components/characters/LinesRobot"
// import Floor from "./objects/grid_generator/Floor"
import OrthographicOrbitControls from "../../components/controls/OrthographicOrbitControls";
import Floor from "../simple_spells/objects/grid_generator/Floor";
import {Html} from "@react-three/drei";

export default function Scene() {
    return (
        <>
            <color attach="background" args={['#20b4b1']} />
            <Suspense fallback={null}>
                {/*<Pylon position={[0,1,0]}/>*/}

                <group position={[2, 3, 0]}>
                    <pointLight color="#66ffff" intensity={25} decay={1} distance={250} />
                </group>

                {/*<Floor>*/}
                {/*/!*     Note that the floor receives click events and moves anything nested */}
                {/*        under it to the cell that was clicked. This is great for moving the main player *!/*/}
                {/*</Floor>*/}

                {/*Players*/}
                <LinesRobot position={[1, 0, 1]} rotation={[0, (-Math.PI / 2)*-.4 ,0]} />
                <LinesRobot position={[5, 0, 11]} rotation={[0, (-Math.PI / 2)*1.8 ,0]} />
                <LinesRobot position={[9, 0, 10]} rotation={[0, (-Math.PI / 2)*1.6 ,0]} />
                <LinesRobot position={[11, 0, 7]} rotation={[0, (-Math.PI / 2)*1.4 ,0]} />

                <ambientLight intensity={1} color="#aaffaa" />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={.3}
                    castShadow
                />
            </Suspense>

            <Html sprite>
                <div style={{
                    background: "rgba(0,0,0,0.7)",
                    color: "white",
                    padding: "8px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    maxWidth: "300px"
                }}>
                    hello earthlings
                </div>
            </Html>

            <OrthographicOrbitControls/>
        </>
    )
}