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

import { adventureawaits, redcommend } from "../assets/images";

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
        title: "Redcommend- Cmd-f 2023 Hackathon ",
        imageURL:redcommend,
        text: "(Sponsor Prize Winner, Diversity in CS Mentorship winner) I collaborated with a team to create a Reddit thread summarization tool to allow users to easily view the general consensus regarding a piece of media or product without having to scroll through all the comments. We used the Cohere language model API and Reddit API. I created the frontend using Flask, HTML, and CSS.",
        link:"https://github.com/sedaschle/cmd_f",
        linktext:"Link to Github repo"
    },
    {
        title: "Adventure Awaits- NWHacks 2023 Hackathon",
        imageURL:adventureawaits,
        text: "My team and I developed a full-stack web application that let users receive written directions to random interesting nearby locations, integrating the Google Maps API. I used Figma, HTML, and CSS with the Bootstrap framework for the front-end development.",
        link:"https://github.com/nitahieb/NWHACKS2023",
        linktext:"Link to Github repo"
    },
]