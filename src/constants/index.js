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
    wp
} from "../assets/icons";

import { adventureawaits, redcommend, portfolio, togrow, pixelart, schoolsite, ghostly } from "../assets/images";
import { KK_Lim, pride, sjc, pandda, sma } from "../assets/images/graphic_design";


export const skills = [
    {
        imageUrl: wp,
        name: "WordPress",
        type: "CMS",
    },
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
        title: "WordPress School Site",
        imageURL: schoolsite,
        text: " This project involved building a responsive, engaging mock website for a school using WordPress. Working collaboratively with a partner, I developed custom functionality including scroll-based animations and a lightbox gallery to enhance the user experience. I also created custom post types and taxonomies to structure the site’s content effectively, giving us full control over how information was displayed and managed.",
        link: "https://melissagoon.dev/school-site/",
        linktext: "Link to Live Site"
    },
    {
        title: "GhostlyDB - A React Movie Database",
        imageURL: ghostly,
        text: " I built a responsive and accessible movie database using React and the TMDB API, focusing on clean UI and smooth user experience. I began by designing paper wireframes and creating an interactive prototype in Adobe XD, then implemented the final app with features like searching and saving movies to local storage for easy access.",
        link: "https://melissagoon.dev/ghostly-db/",
        linktext: "Link to Live Site"
    },
    {
        title: "Google Summer of Code - Blender: UV Editor Improvements",
        imageURL: blender,
        text: " I worked with a mentor from the Blender organization to implement several community-sourced improvements to a large, open-source code base using C, C++ and Git.",
        link: "https://summerofcode.withgoogle.com/archive/2023/projects/GiNuS5Qn",
        linktext: "Link to project page"
    },
    {
        title: "To Grow- Cmd-f 2025 Hackathon ",
        imageURL: togrow,
        text: "ToGrow is a Chrome extension that breaks tasks into actionable steps using the Gemini API. I built the backend with Python and Flask and worked on the frontend with HTML, CSS, and JavaScript. This was my first full-stack integration and Chrome extension, challenging me in new ways. I also proposed the project idea and designed all plant assets in Krita.",
        link: "https://devpost.com/software/togrow",
        linktext: "Link to Devpost"
    },
    {
        title: "Redcommend- Cmd-f 2023 Hackathon ",
        imageURL: redcommend,
        text: "(Sponsor Prize Winner, Diversity in CS Mentorship winner) I collaborated with a team to create a Reddit thread summarization tool to allow users to easily view the general consensus regarding a piece of media or product without having to scroll through all the comments. We used the Cohere language model API and Reddit API. I created the frontend using Flask, HTML, and CSS.",
        link: "https://devpost.com/software/redcommend",
        linktext: "Link to Devpost"
    },
    {
        title: "Pixel Art Canvas",
        imageURL: pixelart,
        text: "This project was initially made for the Odin Project's Etch-a-Sketch project using HTML, CSS and JavaScript. It was expanded upon to include additional features for the creation of pixel art.",
        link: "https://melissagoon.github.io/Pixel-Art-Canvas/",
        linktext: "Link to website"
    },
    {
        title: "Adventure Awaits- NWHacks 2023 Hackathon",
        imageURL: adventureawaits,
        text: "My team and I developed a full-stack web application that let users receive written directions to random interesting nearby locations, integrating the Google Maps API. I used Figma, HTML, and CSS with the Bootstrap framework for the front-end development.",
        link: "https://github.com/nitahieb/NWHACKS2023",
        linktext: "Link to Github repo"
    },
    {
        title: "This Website!",
        imageURL: portfolio,
        text: "Initally designed in Figma, I created this portfolio website using React, Three.JS and Tailwind CSS.",
        link: "https://github.com/MelissaGoon/MelissaGoon.github.io",
        linktext: "Link to Github repo"
    },

]

export const graphicDesign = [
    {
        title: "Solar Music Academy",
        images: sma,
        description: "Designed custom visual assets and developed the brand identity for Solar Music Academy, including the creation of a bespoke logo tailored to the client’s vision."
    },
    {
        title: "Social Justic Centre UBC",
        images: sjc,
        description: "Refreshed the UBC Social Justice Centre’s logo with a modern, more legible design that honors the original visual identity."
    },
    {
        title: "PANDDA Labs",
        images: pandda,
        description: "Collaborated with PANDDA Labs to design a unique and professional logo, drawing inspiration from atmospheric prediction graphs and integrating panda imagery. Refined the design through multiple iterations to align with the client’s vision."
    },
    {
        title: "KK Lim - Advocates and Solicitors",
        images: KK_Lim,
        description: "Commissioned by KK Lim – Advocates and Solicitors to design a new logo that symbolizes the firm’s strength and longevity. Incorporated elements like gold and mountains, inspired by the meanings within the client’s Chinese name"
    },
    {
        title: "Pride Collective UBC",
        images: pride,
        description: "Created two vibrant logos for the UBC Pride Collective, reflecting its inclusive spirit, strong sense of community, and playful, welcoming energy.Created two vibrant logos for the UBC Pride Collective that reflect its diverse, welcoming, and community-focused spirit. Also designed custom social media content, including posters and event graphics."
    }
]

