import React, { useState } from 'react';

const projects = [
    {
        name: 'Job Hunt',
        link: 'https://job-hunt-zeta-gold.vercel.app',
        image: `${process.env.PUBLIC_URL}/jobhunt.png`
    },
    {
        name: 'Tasker',
        link: 'https://tasker-frontend-roan.vercel.app',
        image: `${process.env.PUBLIC_URL}/tasker.png`
    },
    {
        name: 'Image Segmentation',
        link: 'https://github.com/IkanshGoyal/ImageSegmentation',
        image: `${process.env.PUBLIC_URL}/imgseg.png`
    },
    {
        name: 'Attendance Automation',
        link: 'https://github.com/IkanshGoyal/attendance-automation',
        image: `${process.env.PUBLIC_URL}/attendance.jpg`
    },
    {
        name: 'Scrumdinger',
        link: 'https://www.linkedin.com/posts/ikanshgoyal_appdevelopment-swiftui-ios-activity-7219198178066096128-bLwD?utm_source=share&utm_medium=member_desktop',
        image: `${process.env.PUBLIC_URL}/scrum.png`
    },
    {
        name: 'Colaborative Code Editor',
        link: 'https://github.com/IkanshGoyal/colab-editor',
        image: `${process.env.PUBLIC_URL}/colab.png`
    },
    {
        name: 'Handwritten Digit Recognition',
        link: 'https://github.com/IkanshGoyal/handwritten-digit-recognition',
        image: `${process.env.PUBLIC_URL}/hdr.png`
    },
    {
        name: 'Snake Game',
        link: 'https://ikanshgoyal.github.io/snake-game/',
        image: `${process.env.PUBLIC_URL}/snake.png`
    },
    {
        name: 'Sudoku Solver',
        link: 'https://ikanshgoyal.github.io/sudoku/',
        image: `${process.env.PUBLIC_URL}/sudoku.png`
    },
    {
        name: 'Multi-threading Library',
        link: 'https://github.com/IkanshGoyal/multithreading',
        image: `${process.env.PUBLIC_URL}/multi.png`
    },
    {
        name: 'Big Integer Library',
        link: 'https://github.com/IkanshGoyal/BigInteger',
        image: `${process.env.PUBLIC_URL}/big.png`
    },
    {
        name: 'Personal Portfolio',
        link: 'https://ikanshgoyal.github.io/personal-portfolio/',
        image: `${process.env.PUBLIC_URL}/portfolio.png`
    },
    {
        name: 'Revamped Personal Portfolio',
        link: 'https://ikanshgoyal.vercel.app/',
        image: `${process.env.PUBLIC_URL}/pp.png`
    }
];

const Projects = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <div className="projects-container">
            <div className="projects-title">Projects</div>
            <div className='divider1'></div>
            <ul className="project-list">
                {projects.map((project, index) => (
                    <li
                        key={index}
                        className="project-item"
                        onMouseEnter={() => setHoveredImage(project.image)}
                        onMouseLeave={() => setHoveredImage(null)}
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        {project.name}
                    </li>
                ))}
            </ul>
            {hoveredImage && (
                <img
                    className="project-image"
                    src={hoveredImage}
                    alt="Project"
                />
            )}
        </div>
    );
};

export default Projects;
