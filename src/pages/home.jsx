import {useState,useEffect, React, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from "../components/Loader.jsx"
import Island from '../models/Island'
import Sky from '../models/sky.jsx'
import HomeInfo from '../components/HomeInfo.jsx'
import { arrows, homecorner } from '../assets/images/index.js'
const Home = () => {
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)
    const [showPromt,setShowPrompt] = useState(true);

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

    useEffect(() => {
        if (isRotating) {
          setShowPrompt(false); 
        }
      }, [isRotating]);

    return (
        <section className='w-full h-screen relative'>
              <img src={homecorner} className='absolute z-10 hidden lg:block' alt='✷'/>

            <div className="absolute top-20 sm:top-14 left-0 right-0 z-10
            flex items-center justify-center"> 
                {currentStage && <HomeInfo currentStage ={currentStage} />}
            </div>

            <div className="absolute left-0 right-0 z-10 top-32 
            flex items-center justify-center w-full h-[calc(100vh-8rem)] pointer-events-none" onClick={() => setShowPrompt(!showPromt)}>
                {showPromt && 
                <div> 
               <div className="absolute bottom-16 sm:bottom-10 left-0 right-0 flex-col flex items-center justify-center">
                    <h1 className=' text-l sm:text-xl'> Click and Drag to rotate!</h1> 
                    <h2 className=' hidden sm:block sm:text-l'> Or use arrow keys to turn </h2> 
                    <img src={arrows} className=' hidden sm:block sm:h-14' alt='<- ->'/>
                    </div>
                </div>}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent  ${isRotating ? 'cursor-grabbing' :'cursor-grab'}`}
                camera ={{near:0.1, far: 1000, position: [0, 2, 5]}}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position ={[10,1,1]} intensity={1.5} color="#ffb700"/>
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
