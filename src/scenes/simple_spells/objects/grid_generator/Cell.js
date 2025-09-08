// grid_generator/Cell.js
import React, { useState, useEffect } from "react"

const Cell = React.forwardRef(function Cell({ position, onClick }, ref) {
    const [hovered, setHovered] = useState(false)
    const [randomNumber, setRandomNumber] = useState(0)

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 3) + 5)
    }, [])

    return (
        <group ref={ref}>
            <mesh
                onClick={() => onClick(position)}
                rotation={[-Math.PI / 2, 0, 0]}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                position={position}
            >
                <planeGeometry args={[1, 1]} />
                <meshStandardMaterial
                    dispose={null}
                    key={hovered ? 'hover' : `base-${randomNumber}`}
                    color={
                        hovered
                            ? '#558855'
                            : `#${randomNumber}8${randomNumber}8${randomNumber}8`
                    }
                />
            </mesh>
        </group>
    )
})

export default Cell
