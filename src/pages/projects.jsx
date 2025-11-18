
import { projects } from '../constants'
import { cornerstar, star } from '../assets/images'

const Projects = () => {

    return (
        <main className='w-full h-screen relative bg-portfolio bg-cover bg-center'>
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
                                    <p className='text-lg font-bold my-4'> {project.title}</p>
                                    <p className='text-base'> {project.text}</p>
                                    <a href={project.link} target="_blank"
                                        className='link-text'> {project.linktext} </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>





            </section>
        </main>
    )
}
export default Projects
