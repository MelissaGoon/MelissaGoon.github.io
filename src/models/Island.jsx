/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame, useThree } from '@react-three/fiber'
import {a} from '@react-spring/three'

import islandScene from '../assets/3d/island.glb'
export function Island({isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props}) {
    const {gl, viewport} = useThree()
    const { nodes, materials } = useGLTF(islandScene)
    const islandRef = useRef()

    const lastX = useRef(0)
    const rotationSpeed = useRef(0)
    const dampingFactor = 0.95 //controls velocity

    

    const handlePointerDown = (e) => {//click
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(true)

        //check if mouse event or phone
        const clientX = e.touches? e.touches[0].clientX: e.clientX

        //store last event
        lastX.current = clientX
    }

    const handlePointerUp = (e) => {//release
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(false)
    }

    const handlePointerMove = (e) => {
        e.stopPropagation()
        e.preventDefault()

        if(isRotating){
            //check if mouse event or phone
            const clientX = e.touches? e.touches[0].clientX: e.clientX

            //calculate change in horizontal position
            const delta = (clientX - lastX.current) / viewport.width

            // update island position based on mouse
            islandRef.current.rotation.y += delta * 0.01 * Math.PI
            lastX.current = clientX
            rotationSpeed.current = delta * 0.01 * Math.PI
        }

    }

    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if (!isRotating) setIsRotating(true)
            islandRef.current.rotation.y +=  0.01 * Math.PI
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true)
            islandRef.current.rotation.y -=  0.01 * Math.PI
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
            setIsRotating(false)
        }
    }


    // This code was created using the help of ChatGPT
    useFrame(() => {
        if (!isRotating) {
            // Apply damping to rotation speed to smoothly slow it down
            rotationSpeed.current *= dampingFactor;
            // Stop the rotation when the speed is very slow
            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }
            // Apply the rotation speed to the island's Y axis (rotation around vertical axis)
            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            // Handle stage detection during active rotation
            const rotation = islandRef.current.rotation.y;
    
            /**
             * Normalize the rotation value to the range [0, 2 * Math.PI]
             * to handle full rotation around the Y axis and prevent
             * overflow of rotation values.
             */
            const normalizedRotation =
                ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    
            // Define stage boundaries based on normalized rotation values
            switch (true) {
                case normalizedRotation >= 4.52 && normalizedRotation <= 5.46:
                    setCurrentStage(4);
                    break;
                case (normalizedRotation >= 6.05 && normalizedRotation <= 2 * Math.PI) ||
                (normalizedRotation >= 0 && normalizedRotation <= 0.41):
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 1.45 && normalizedRotation <= 2.5:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 2.98 && normalizedRotation <= 3.6:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    });

    useEffect(() => {
        const canvas = gl.domElement

        canvas.addEventListener('pointerdown', handlePointerDown)
        canvas.addEventListener('pointerup', handlePointerUp)
        canvas.addEventListener('pointermove', handlePointerMove)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown)
            canvas.removeEventListener('pointerup', handlePointerUp)
            canvas.removeEventListener('pointermove', handlePointerMove)
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }

    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp])

    return ( <group {...props} ref = {islandRef} >
         <group position={[-2.635, 1.387, -1.258]} rotation={[0.086, 0.096, 0.141]} scale={0.99}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials['Material.002']}
        />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.me.geometry} material={materials.m_char} />
      </group>
     )
}


export default Island;