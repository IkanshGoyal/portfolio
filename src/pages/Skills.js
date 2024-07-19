import React, { useEffect, useState } from 'react';
import '../App.css';

const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Git', 'SQL', 'NLP',
    'MongoDB', 'Data Structures', 'C', 'C++', 'Java', 'Express', 'NextJS', 'App Dev',
    'TensorFlow', 'Canva', 'Figma', 'Data Algorithms', 'scikit-learn', 'Swift',
    'BootStrap', 'Numpy', 'Pandas', 'R', 'OpenCV', 'Spline', 'Framer', 'Deep Learning'
];

const Skills = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        arrangeSkills();
        window.addEventListener('resize', arrangeSkills);
        return () => {
            window.removeEventListener('resize', arrangeSkills);
        };
    }, []);

    const arrangeSkills = () => {
        const newPositions = [];
        skills.forEach((skill, index) => {
            let position;
            let overlap = true;
            while (overlap) {
                position = getRandomPosition();
                overlap = newPositions.some(pos => checkOverlap(pos, position));
            }
            newPositions.push(position);
        });
        setPositions(newPositions);
    };

    const getRandomPosition = () => {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);
        return { top: y, left: x };
    };

    const checkOverlap = (a, b) => {
        const buffer = 100; 
        return (
            Math.abs(a.top - b.top) < buffer &&
            Math.abs(a.left - b.left) < buffer
        );
    };

    const handleMouseEnter = (index) => {
        const newPositions = [...positions];
        newPositions[index] = { ...newPositions[index], transform: 'scale(1.5)' };
        setPositions(newPositions);
    };

    const handleMouseLeave = (index) => {
        const newPositions = [...positions];
        newPositions[index] = { ...newPositions[index], transform: 'scale(1)' };
        setPositions(newPositions);
    };

    return (
        <div className="skills-container">
            <h1 className="skill-title">My Skills</h1>
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="skill"
                    style={{ ...positions[index], position: 'absolute' }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    {skill}
                </div>
            ))}
        </div>
    );
};

export default Skills;