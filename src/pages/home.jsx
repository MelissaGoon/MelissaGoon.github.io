import {useState, React, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from "../components/Loader.jsx"
import Island from '../models/Island'
import Sky from '../models/sky.jsx'
import HomeInfo from '../components/HomeInfo.jsx'
const Home = () => {
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)
    const adjustIslandForScreenSize = () => {
        let screenScale= null
        let screenPosition = [0, -1.5, -1.5]
        let rotation = [0.3,7.1,0]

        if(window.innerWidth < 768){
            screenScale = [0.9,0.9,0.9]
        } else {
            screenScale = [1.1,1.1,1.1]
        }
        return [screenScale, screenPosition, rotation]

    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()


    return (
        <section className='w-full h-screen relative'>
            <div className="absolute top-28 left-0 right-0 z-10
            flex items-center justify-center">
                {currentStage && <HomeInfo currentStage ={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent  ${isRotating ? 'cursor-grabbing' :'cursor-grab'}`}
                camera ={{near:0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                    {/*<directionalLight position ={[10,1,1]} intensity={10}/>*/}
                    {/*<ambientLight intensity={10}/>*/}
                    {/*<pointLight intensity={13}/>*/}
                    {/*<spotLight />*/}
                    <hemisphereLight skyColor= "#0066ff" groundColor="#0066ff" intensity={4}/>

                    <Sky isRotating = {isRotating}/>

                    <Island
                    position = {islandPosition}
                    scale = {islandScale}
                    rotation = {islandRotation}
                    isRotating = {isRotating}
                    setIsRotating = {setIsRotating}
                    setCurrentStage = {setCurrentStage}

                    />


                </Suspense>


            </Canvas>


        </section>
    )
}
export default Home
