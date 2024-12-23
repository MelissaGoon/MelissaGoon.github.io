import React from 'react'
import { Link } from 'react-router-dom'
import { star } from '../assets/images'


const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <img src={star} className='absolute bottom-0 left-0 h-16 w-16 hover:animate-spin-slow' alt='✷' />
        <Link to={link} className='pixel-btn'>
        {btnText}
        </Link>

    </div>
)

const renderContent = {
    1: (
        <InfoBox 
        text ="Hi I'm Melissa!"
        link="/about"
        btnText="About"
        />
    ),
    2: (
        <InfoBox 
        text ="Give me a job!"
        link="/resume" //TO DO: ADD RESUME PAGE
        btnText="Resume"
        />
    ),
    3: (
        <InfoBox 
        text ="Stuff I made :D"
        link="/projects"
        btnText="Projects!"
        />
    ),
    4: (
        <InfoBox 
        text ="Say hello to me!"
        link="/contact"
        btnText="Contact"
        />
    )
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null
}
export default HomeInfo
