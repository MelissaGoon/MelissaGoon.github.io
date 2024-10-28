import React from 'react'
import { skills } from '../constants'

const About = () => {
    return (
        <div className='w-full h-dvh relative bg-portfolio bg-cover bg-center'>
             <section className='absolute left-0 right-0 z-10 p-16 w-full sm:top-24 top-32 bg-black'>
           
                <h1 className='head-text text-white'>
                    Hi, my name is <span className='pink-gradient-text'>Melissa</span>!
                </h1>

                <div className='text-white text-lg mt-5 flex gap-8'>
                    <p className='max-w-4xl'>I&apos;m a 4th-year student at the University of British Columbia pursuing a Combined Major in Computer Science and Biology.
                    I&apos;m passionate about software development, especially frontend work, and graphic design, both of which I&apos;ve learned mostly on my own.
                     In my spare time, I love painting, sculpting, sewing, drawing, and 3D modeling. 
                        I also love Dungeons and Dragons for the creativity and storytelling. 
                        Overall, I enjoy blending my interests in art and tech and am always looking for new ways to learn and create.</p>
                    <img src='src\assets\images\irl_image.jpg' className='w-3/4 max-w-sm rounded-lg object-contain sm:block hidden'/>
                </div>

                <div className='py-10 flex flex-col text-white'> 
                    <h3 className='subhead-text'> My skills <span className='pink-gradient-text'>✷</span></h3>
                    <div className='mt-16 flex flex-wrap gap-12'>
                        {skills.map((skill) => (
                            <div key={skill.name} className='flex w-20 h-20 bg-white items-center justify-center rounded-3xl hover:bg-pink-500 transition-all duration-150 ease-in-out'>
                              
                                    <img src={skill.imageUrl} alt={skill.name} className='w-3/4 h-3/4 object-contain'/>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
      
    )
}
export default About
