import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaEnvelope } from 'react-icons/fa';

const About = () => {
    const handleResumeClick = () => {
		window.open(`${process.env.PUBLIC_URL}/resCanva.pdf`, '_blank');
	};

    return (
        <div className='about-container'>
            <div className='side1'>
                <div className='about-title'>Hi, I'm Ikansh</div>
                <div className='divider'></div>
                <div className='about-description'>
                    Passionate and dedicated Software Developer with a strong interest in UX/UI design and full-stack web development. Experienced in coding, machine learning, and exploring new technologies. Always eager to learn and adapt to the latest industry trends.
                </div>
                <div className='buttons'>
                    <button className='button' onClick={handleResumeClick}>RESUME</button>
                </div>
                <div className='icons'>
                    <div className='icon'>
                        <FaGithub onClick={() => window.open('https://github.com/IkanshGoyal', '_blank')} />
                        <div className='tooltip'>GitHub: IkanshGoyal</div>
                    </div>
                    <div className='icon'>
                        <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/ikanshgoyal/', '_blank')} />
                        <div className='tooltip'>LinkedIn: ikanshgoyal</div>
                    </div>
                    <div className='icon'>
                        <FaInstagram onClick={() => window.open('https://www.instagram.com/itsikansh/', '_blank')} />
                        <div className='tooltip'>Instagram: itsikansh</div>
                    </div>
                    <div className='icon'>
                        <FaCode onClick={() => window.open('https://leetcode.com/ikansh/', '_blank')} />
                        <div className='tooltip'>LeetCode: ikansh</div>
                    </div>
                    <div className='icon'>
                        <FaEnvelope onClick={() => window.open('mailto:ikanshgoyal@gmail.com')} />
                        <div className='tooltip'>Email: ikanshgoyal@gmail.com</div>
                    </div>
                </div>
            </div>
            <img className='profile-pic' src={`${process.env.PUBLIC_URL}/profile.png`} alt='Profile' />
        </div>
    );
};

export default About;