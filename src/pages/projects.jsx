import React from 'react'
import { projects } from '../constants'
import { cornerstar,star } from '../assets/images'

const Projects = () => {

    return (
        <div className='w-full h-screen relative bg-portfolio bg-cover bg-center'>
        <img src={cornerstar} className='absolute hidden lg:block' alt='✷'/>
              <section className='absolute left-0 right-0 z-10 p-16 w-full min-h-svh sm:top-24 top-32 bg-black'>
              <h1 className='head-text text-white'>
              <img src={star} className='absolute top-0 right-0 hidden lg:block h-40' alt='✷'/>
                    My Projects <span className='pink-gradient-text'>✷✶</span> 
            </h1>

            <div className='flex flex-col gap-4'>
                {projects.map((project)=>(
                        <div key={project.title} className="max-w-2xl mt-6 bg-portfolio rounded-3xl mx-auto overflow-hidden md:max-w-5xl">
                        <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={project.imageURL} alt={project.title} />
                        </div>
                        <div className="p-8">
                            <p className='subhead-text'> {project.title}</p>
                            <p> {project.text}</p>
                            <a href={project.link} target="_blank" 
                            className='hover:text-pink-500 font-silkscreen text-sm sm:text-md text-white'> {project.linktext} </a>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

       
            
              </section>
        </div>
    )
}
export default Projects
