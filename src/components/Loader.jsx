import React from 'react'
import { Html } from "@react-three/drei";

const Loader = () => {
    return (
        // HTML Allows you to tie HTML content to any object of your scene. It will be projected to the objects whereabouts automatically.
        <Html>
            <div className='flex justify-center items-center'>
                <div className='w-20 h-20 border-8 border-opacity-20
                border-pink-500 border-t-purple-700 rounded-full animate-spin'></div>
            </div>
        </Html>
    );
};

export default Loader;