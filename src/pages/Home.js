import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';
import Projects from './Projects';
import Certifications from './Achievements';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';

const Home = () => {
    const textRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuClosing, setMenuClosing] = useState(false);
    const [overlay, setOverlay] = useState(null);

    useEffect(() => {
        const text = textRef.current;

        const loadText = () => {
            setTimeout(() => {
                if (text) text.textContent = 'a Full Stack Developer';
            }, 0);
            setTimeout(() => {
                if (text) text.textContent = 'a Machine Learning Engineer';
            }, 4000);
            setTimeout(() => {
                if (text) text.textContent = 'a UI Designer';
            }, 8000);
            setTimeout(() => {
                if (text) text.textContent = 'an App Developer';
            }, 12000);
            setTimeout(() => {
                if (text) text.textContent = 'a Programmer';
            }, 16000);
        };

        loadText();
        const intervalId = setInterval(loadText, 20000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        document.body.classList.add('hide-cover');
        return () => {
            document.body.classList.remove('hide-cover');
        };
    }, []);

    const handleResumeClick = () => {
        window.open(`${process.env.PUBLIC_URL}/resCanva.pdf`, '_blank');
    };

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuClosing(true);
            setTimeout(() => {
                setMenuOpen(false);
                setMenuClosing(false);
            }, 500);
        } else {
            setMenuOpen(true);
        }
    };

    const openOverlay = (component) => {
        setOverlay(component);
        setMenuClosing(true);
        setTimeout(() => {
            setMenuOpen(false);
            setMenuClosing(false);
        }, 500);
    };

    const closeOverlay = () => {
        setOverlay(null);
        setMenuClosing(true);
        setTimeout(() => {
            setMenuOpen(false);
            setMenuClosing(false);
        }, 500);
    };

    return (
        <>
            <iframe
                src="https://my.spline.design/portfoliolandingpage-51fffe0154e85321a28fd04242e05912/"
                frameBorder="0"
                title="3D Portfolio Landing Page"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}
            ></iframe>
            <div className="navbar">
                <div className="name" onClick={closeOverlay}>Ikansh Goyal</div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>
            <div className="role">
                <span className="text first_text">I'm </span>
                <span className="text sec-text" ref={textRef}>
                    a Full Stack Developer
                </span>
            </div>
            <div className="options">
                <button className="option" onClick={() => openOverlay(<Projects />)}>My Projects</button>
                <button className="option" onClick={() => openOverlay(<About />)}>About Me</button>
            </div>
            <div className="resume" onClick={handleResumeClick}>RESUME</div>
            {menuOpen && (
                <div className={`menu-overlay ${menuClosing ? 'close' : ''}`}>
                    <div className={`menu-items ${menuClosing ? 'close' : ''}`}>
                        <div onClick={() => openOverlay(null)}>Home</div>
                        <div onClick={() => openOverlay(<Projects />)}>Projects</div>
                        <div onClick={() => openOverlay(<Certifications />)}>Certifications</div>
                        <div onClick={() => openOverlay(<Skills />)}>Skills</div>
                        <div onClick={() => openOverlay(<About />)}>About</div>
                        <div onClick={() => openOverlay(<Contact />)}>Contact</div>
                    </div>
                </div>
            )}
            {overlay && (
                <div className="overlay">
                    <div className="overlay-content">
                        {overlay}
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;