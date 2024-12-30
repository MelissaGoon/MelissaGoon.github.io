import React from 'react'
import { Html } from "@react-three/drei";

const Loader = () => {
    return (
        // HTML Allows you to tie HTML content to any object of your scene. It will be projected to the objects whereabouts automatically.
        // TODO: Make loader look better
        <Html>
            <div className='flex justify-center items-center'>
                <div className='w-20 h-20 border-2 border-opacity-20
                border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
            </div>
        </Html>
    );
};

export default Loader;