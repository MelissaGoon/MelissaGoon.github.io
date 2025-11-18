
import { skills } from '../constants'
import { cornerstar, irlimage } from '../assets/images'

const About = () => {
    return (
        <div className='w-full h-dvh relative bg-portfolio bg-cover bg-center'>
            <img src={cornerstar} className='corner-star' alt='✷' />
            <section className='absolute left-0 right-0 z-10 p-10 md:p-16 w-full sm:top-24 top-28 bg-black'>

                <h1 className='head-text text-white'>
                    Hi, my name is <span className='pink-gradient-text'>Melissa</span>!
                </h1>

                <div className='text-white text-sm md:text-lg mt-5 flex flex-wrap justify-center gap-8'>
                    <p className='max-w-xl'>Hi, I&apos;m Melissa! I&apos;m a recent UBC alumni with a B.Sc. in Computer Science and Biology, and am currently pursuing the Front End Web Developer (FWDP) program at BCIT.
                        I&apos;m passionate about software development, especially frontend work, and graphic design, both of which I&apos;ve learned mostly on my own.
                        In my spare time, I love painting, sculpting, sewing, drawing, and 3D modeling.
                        I also love Dungeons and Dragons for the creativity and storytelling.
                        Overall, I enjoy blending my interests in art and tech and am always looking for new ways to learn and create.</p>

                    <img src={irlimage} className='w-3/4 max-w-xs min-w-48 rounded-lg object-contain' alt='A picture of me!' />
                </div>

                <div className='py-10 flex flex-col text-white'>
                    <h3 className='subhead-text'> My skills <span className='pink-gradient-text'>✷</span></h3>
                    <div className='mt-16 flex flex-wrap gap-6'>
                        {skills.map((skill) => (
                            <div key={skill.name} className='flex px-6 py-2 w-fit gap-1 bg-white items-center justify-between rounded-full transition-all duration-150 ease-in-out'>

                                <img className='w-6 h-6 object-contain' src={skill.imageUrl} alt={skill.name} />
                                <p className='text-black'>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}
export default About
