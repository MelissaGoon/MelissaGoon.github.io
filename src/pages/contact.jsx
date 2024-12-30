import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Contact = () => {
    return (
        <div className='w-full min-h-screen relative bg-portfolio bg-cover bg-center'>
            <section className='absolute left-0 right-0 z-10 p-6 sm:p-16 w-full sm:top-24 top-28 bg-black text-white gap-8 sm:gap-16 flex flex-col items-start'>
    
                <h1 className='subhead-text pink-gradient-text text-lg sm:text-2xl'>
                    ✶ Get in touch! ✶
                </h1>
                
                <h2 className='text-base sm:text-xl'>✉ E-mail:  
                    <a data-tooltip-id="my-tooltip-1" data-tooltip-content="Click me to copy!">
                        <span 
                            className='hover:text-pink-500 font-silkscreen text-sm sm:text-lg' 
                            onClick={() => { navigator.clipboard.writeText('melissahuijungoon@gmail.com') }}
                        >
                            melissahuijungoon@gmail.com
                        </span> 
                    </a>
                    <ReactTooltip
                        id="my-tooltip-1"
                        place="top"
                    />
                </h2>

                <div className='flex gap-2 sm:gap-3 items-center flex-wrap'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-linkedin" 
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                    <h2 className='text-sm sm:text-xl'>
                        LinkedIn:  
                        <a 
                            href="https://www.linkedin.com/in/melissa-goon-707928260/" 
                            target="_blank" 
                            className='hover:text-pink-500 font-silkscreen text-sm sm:text-lg'
                        >
                            Melissa Goon
                        </a>
                    </h2>
                </div>
            </section>
        </div>
    )
}

export default Contact
