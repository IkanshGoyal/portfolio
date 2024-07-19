import React, { useState } from 'react';

const projects = [
    {
        name: 'HackerRank Certification',
        link: 'https://www.hackerrank.com/certificates/da98cae3218d',
        image: `${process.env.PUBLIC_URL}/hackerrank.png`
    },
    {
        name: 'Coursera Web Development Certification',
        link: 'https://coursera.org/share/291d437b5ee1771947c7ca7a9fb1c6cd',
        image: `${process.env.PUBLIC_URL}/webres.png`
    },
    {
        name: 'Coursera Data Algorithms Certification',
        link: 'https://coursera.org/share/d3353898473c4d73273fcb28974662b4',
        image: `${process.env.PUBLIC_URL}/algo.png`
    },
    {
        name: 'Coursera Git and Github Certification',
        link: 'https://coursera.org/share/cea774c7b6e4194f33f1ad89a3a77eeb',
        image: `${process.env.PUBLIC_URL}/git.png`
    },
    {
        name: 'Coursera Python Certification',
        link: 'https://coursera.org/share/443cec25825ebe79987c5de6ee5e58e8',
        image: `${process.env.PUBLIC_URL}/python.png`
    },
    {
        name: 'FreeCodeCamp Web Development Certification',
        link: 'https://www.freecodecamp.org/Ikansh',
        image: `${process.env.PUBLIC_URL}/webdev.png`
    },
    {
        name: 'Frontend Web Dev Certification',
        link: 'https://linkedin.com/in/ikanshgoyal',
        image: `${process.env.PUBLIC_URL}/front.png`
    },
    {
        name: 'FreeCodeCamp JS DSA Certification',
        link: 'https://www.freecodecamp.org/Ikansh',
        image: `${process.env.PUBLIC_URL}/js.png`
    },
    {
        name: 'Amazon AWS Certification',
        link: 'https://linkedin.com/in/ikanshgoyal',
        image: `${process.env.PUBLIC_URL}/aws.png`
    }
];

const Certifications = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <div className="projects-container">
            <div className="projects-title">Certifications</div>
            <div className='divider1'></div>
            <ul className="project-list certificate">
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

export default Certifications;