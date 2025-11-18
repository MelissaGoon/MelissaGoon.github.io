
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

                <div className='text-white text-sm md:text-lg mt-5 flex gap-8'>
                    <p className='max-w-4xl'>Hi, I&apos;m Melissa! I&apos;m a recent UBC alumi with a B.Sc. in Computer Science and Biology, and am currently pursuing the Front End Web Developer (FWDP) program at BCIT.
                        I&apos;m passionate about software development, especially frontend work, and graphic design, both of which I&apos;ve learned mostly on my own.
                        In my spare time, I love painting, sculpting, sewing, drawing, and 3D modeling.
                        I also love Dungeons and Dragons for the creativity and storytelling.
                        Overall, I enjoy blending my interests in art and tech and am always looking for new ways to learn and create.</p>

                    <img src={irlimage} className='w-3/4 max-w-sm min-w-48 rounded-lg object-contain sm:block hidden' alt='A picture of me!' />
                </div>

                <div className='py-10 flex flex-col text-white'>
                    <h3 className='subhead-text'> My skills <span className='pink-gradient-text'>✷</span></h3>
                    <div className='mt-16 flex flex-wrap gap-12'>
                        {skills.map((skill) => (
                            <div key={skill.name} className='flex w-12 h-12 sm:w-20 sm:h-20 bg-white items-center justify-center rounded-3xl transition-all duration-150 ease-in-out'>

                                <img src={skill.imageUrl} alt={skill.name} className='w-3/4 h-3/4 object-contain' />

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}
export default About
