import React from 'react'
import { projects } from '../constants'
import { cornerstar, star, jambogrill, goodreads } from '../assets/images'

const Projects = () => {

    return (
        <div className='w-full h-screen relative bg-portfolio bg-cover bg-center'>
            <img src={cornerstar} className='corner-star' alt='✷' />
            <section className='absolute left-0 right-0 z-10 p-7 sm:p-16 w-full min-h-svh sm:top-24 top-28 bg-black'>
                <h1 className='head-text text-white'>
                    <img src={star} className='absolute top-0 right-0 hidden lg:block h-40' alt='✷' />
                    My Projects <span className='pink-gradient-text'>✷✶</span>
                </h1>

                <div className='flex flex-col gap-4'>
                    {projects.map((project) => (
                        <div key={project.title} className="portfolio-card">
                            <div className="md:flex">
                                <div className="md:shrink-0">
                                    <img className="h-32 w-full object-cover md:h-full md:w-48" src={project.imageURL} alt={project.title} />
                                </div>
                                <div className="p-4 sm:p-8">
                                    <p className='subhead-text my-4'> {project.title}</p>
                                    <p> {project.text}</p>
                                    <a href={project.link} target="_blank"
                                        className='link-text'> {project.linktext} </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className='head-text text-white mt-7'>
                    Figma Prototypes <span className='pink-gradient-text'>✸✦</span>
                </h1>

                <div className="w-full flex flex-col justify-center">
                    <div className='portfolio-card'>
                        <img className="h-32 w-full object-cover md:hidden" src={jambogrill} alt='Jambo Grill Image' />
                        <div className='p-10'><p className='subhead-text mb-6'> Jambo Grill Redesign- FLUI Design Hackathon 2025</p>

                            <iframe
                                className="w-full h-[400px] sm:h-[500px] border-0 rounded-lg hidden md:block mb-6"
                                src="https://embed.figma.com/proto/6sJSRLrjxWKHyEPrTiPIrP/FLUI-Hackathon-Jambo-grill?node-id=37-487&p=f&scaling=scale-down&content-scaling=fixed&page-id=37%3A484&starting-point-node-id=37%3A487&embed-host=share"
                                allowFullScreen />
                            <iframe
                                className="w-full h-[400px] sm:h-[500px] border-0 rounded-lg hidden md:block mb-6"
                                src="https://embed.figma.com/proto/6sJSRLrjxWKHyEPrTiPIrP/FLUI-Hackathon-Jambo-grill?node-id=205-1094&scaling=contain&content-scaling=fixed&page-id=214%3A826&embed-host=share"
                                allowFullScreen />

                            <a href="https://www.figma.com/proto/6sJSRLrjxWKHyEPrTiPIrP/FLUI-Hackathon-Jambo-grill?node-id=205-1094&t=igsQkfc2vjCABH7v-1&scaling=contain&content-scaling=fixed&page-id=214%3A826" target="_blank"
                                className='link-text md:hidden'> Link to process slides </a>

                            <p >For the 2025 FLUI Design Hackathon, my team redesigned the website for Jambo Grill, a local fusion restaurant blending Indian, African, and Iranian cuisine. Working directly with the client, we mapped the user journey, conducted user evaluations, and performed card sorting, SWOT, and competitive analyses. Inspired by traditional art, we crafted a site map, wireframes, and iterated through prototypes while also creating custom vector assets to enhance the design.</p>
                            <a href="https://www.figma.com/proto/6sJSRLrjxWKHyEPrTiPIrP/FLUI-Hackathon-Jambo-grill?node-id=37-487&p=f&t=g4abRLuF1rPZoUo1-1&scaling=scale-down&content-scaling=fixed&page-id=37%3A484&starting-point-node-id=37%3A487" target="_blank"
                                className='link-text md:hidden'> Link to prototype </a> </div>

                    </div>

                    <div className='portfolio-card'>
                    <img className="h-32 w-full object-cover md:hidden" src={goodreads} alt='GoodReads Image' />
                        <div className='p-10'>
                            <p className='subhead-text mb-6'> GoodReads Redesign</p>

                            <iframe
                                className="w-full h-[400px] sm:h-[500px] border-0 rounded-lg hidden md:block mb-6"
                                src="https://embed.figma.com/proto/uqSoW43eG9OxOVltjhLCs5/Yeehaw344Team?node-id=304-3925&p=f&scaling=scale-down&content-scaling=fixed&page-id=237%3A3005&starting-point-node-id=304%3A3925&show-proto-sidebar=1&embed-host=share"
                                allowFullScreen />
                            <p >For my Human-Computer Interaction course, my team redesigned Goodreads to improve usability and social engagement. We conducted user studies on the existing design, applying UX principles, evaluation methods, and heuristics. We also conceptualized a new feature, a “Book Club” system that allows users to share their reading experiences within close friend groups.</p>
                            <a href="https://www.figma.com/proto/uqSoW43eG9OxOVltjhLCs5/Yeehaw344Team?node-id=304-3925&p=f&t=S1CHQJDroEdG7UOO-1&scaling=scale-down&content-scaling=fixed&page-id=237%3A3005&starting-point-node-id=304%3A3925&show-proto-sidebar=1" target="_blank"
                                className='link-text md:hidden'> Link to prototype </a>
                        </div>

                    </div>

                </div>



            </section>
        </div>
    )
}
export default Projects
