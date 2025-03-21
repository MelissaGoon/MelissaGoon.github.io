import {
    css,
    git,
    github,
    html,
    javascript,
    nextjs,
    react,
    tailwindcss,
    typescript,
    blender,
    c,
    cplusplus,
    flask,
    python,
    threejs,
} from "../assets/icons";

import { adventureawaits, redcommend, portfolio, togrow} from "../assets/images";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    }, {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D modelling",
    }
];

export const projects = [
    {
        title: "Google Summer of Code - Blender: UV Editor Improvements",
        imageURL:blender,
        text: " I worked with a mentor from the Blender organization to implement several community-sourced improvements to a large, open-source code base using C, C++ and Git.",
        link:"https://summerofcode.withgoogle.com/archive/2023/projects/GiNuS5Qn",
        linktext:"Link to project page"
    },
    {
        title: "To Grow- Cmd-f 2025 Hackathon ",
        imageURL:togrow,
        text: "ToGrow is a Chrome extension that breaks tasks into actionable steps using the Gemini API. I built the backend with Python and Flask and worked on the frontend with HTML, CSS, and JavaScript. This was my first full-stack integration and Chrome extension, challenging me in new ways. I also proposed the project idea and designed all plant assets in Krita.",
        link:"https://devpost.com/software/togrow",
        linktext:"Link to Devpost"
    },
    {
        title: "Redcommend- Cmd-f 2023 Hackathon ",
        imageURL:redcommend,
        text: "(Sponsor Prize Winner, Diversity in CS Mentorship winner) I collaborated with a team to create a Reddit thread summarization tool to allow users to easily view the general consensus regarding a piece of media or product without having to scroll through all the comments. We used the Cohere language model API and Reddit API. I created the frontend using Flask, HTML, and CSS.",
        link:"https://devpost.com/software/redcommend",
        linktext:"Link to Devpost"
    },
    {
        title: "Adventure Awaits- NWHacks 2023 Hackathon",
        imageURL:adventureawaits,
        text: "My team and I developed a full-stack web application that let users receive written directions to random interesting nearby locations, integrating the Google Maps API. I used Figma, HTML, and CSS with the Bootstrap framework for the front-end development.",
        link:"https://github.com/nitahieb/NWHACKS2023",
        linktext:"Link to Github repo"
    },
    {
        title: "This Website!",
        imageURL:portfolio,
        text: "Initally designed in Figma, I created this portfolio website using React, Three.JS and Tailwind CSS.",
        link:"https://github.com/MelissaGoon/MelissaGoon.github.io",
        linktext:"Link to Github repo"
    },
]

export const graphicDesign = [
    {
        title: "Solar Music Academy",
        images: [ "https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png",
            "https://cdn.dribbble.com/users/545884/screenshots/2883479/cover.jpg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Social Justic Centre UBC",
        images: [ "https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png",
            "https://cdn.dribbble.com/users/545884/screenshots/2883479/cover.jpg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "PANDDA Labs",
        images: [ "https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png",
            "https://cdn.dribbble.com/users/545884/screenshots/2883479/cover.jpg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "KK Lim - Advocates and Solicitors",
        images: [ "https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png",
            "https://cdn.dribbble.com/users/545884/screenshots/2883479/cover.jpg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Pride Collective UBC",
        images: [ "https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png",
            "https://cdn.dribbble.com/users/545884/screenshots/2883479/cover.jpg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

