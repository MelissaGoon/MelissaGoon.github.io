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
        let screenPosition = [0, -7, -10]
        let rotation = [0.1,9.5,0]

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
              <div className='absolute z-10 flex hidden lg:block'>
            <svg width="302" height="343" viewBox="0 0 302 343" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M135 -67L153.894 96.1828L302 117L153.894 137.817L135 301L116.106 137.817L-32 117L116.106 96.1828L135 -67Z" fill="white"/>
            <path d="M194.5 96L199.724 209.867C199.794 211.379 200.978 212.603 202.487 212.721L250.833 216.509C254.52 216.798 254.52 222.202 250.833 222.491L202.487 226.279C200.978 226.397 199.794 227.621 199.724 229.133L194.5 343L189.276 229.133C189.206 227.621 188.022 226.397 186.513 226.279L138.167 222.491C134.48 222.202 134.48 216.798 138.167 216.509L186.513 212.721C188.022 212.603 189.206 211.379 189.276 209.867L194.5 96Z" fill="white"/>
            <path d="M52 -76L68.9044 -12.7095L131.747 -39.6668L89.9837 12.2979L151.443 41.9733L82.4606 43.4817L96.2562 107.443L52 57.3597L7.74388 107.443L21.5395 43.4817L-47.4426 41.9733L14.0163 12.2979L-27.7468 -39.6668L35.0957 -12.7095L52 -76Z" fill="black"/>
            </svg>
            </div>

            <div className="absolute top-28 left-0 right-0 z-10
            flex items-center justify-center">
                {currentStage && <HomeInfo currentStage ={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent  ${isRotating ? 'cursor-grabbing' :'cursor-grab'}`}
                camera ={{near:0.1, far: 1000, position: [0, 2, 5]}}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position ={[10,1,1]} intensity={1.5} color="#ffb700"/>
                    {/* <directionalLight position ={[1,10,10]} intensity={1.5} color="#fff1cc"/> */}
                    <directionalLight position ={[1,10,1]} intensity={1.5} color="#42ad86"/>
                    <ambientLight intensity={1.7} color="#fff5fb"/>
            

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
