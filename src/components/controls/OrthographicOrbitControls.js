import {Box, OrbitControls, OrthographicCamera, PerspectiveCamera} from "@react-three/drei";
import React from "react";
import * as THREE from "three";

export default function OrthographicOrbitControls(props) {
    return (
        <>
            <OrthographicCamera makeDefault position={[15, 15, 15]} zoom={60} />
            <OrbitControls
                minPolarAngle={Math.PI / 10}
                maxPolarAngle={Math.PI / 1.5}
                enableZoom={true}
                rotateSpeed={0.12}
                enablePan={true}
                enableRotate={false}
                mouseButtons={{
                    LEFT: null,
                    MIDDLE: THREE.MOUSE.ROTATE,
                    RIGHT: THREE.MOUSE.PAN
                }}
                onChange={(e) => {
                    const cam = e.target.object;
                    if (cam.position.y < 2) {
                        cam.position.y = 2; // clamp to ground
                    }
                }}
            />
        </>
    );
}
