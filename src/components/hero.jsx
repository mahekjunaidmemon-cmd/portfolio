import React from 'react';
// 1. We import the file using its exact name and extension
import profileImg from '../assets/img.jpeg'; 

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* 2. We use the variable 'profileImg' inside curly braces */}
        <img src={profileImg} alt="Zainab Memon" className="profile-pic" />
        
        <h1>Hi, I'm <span className="highlight">Zainab Memon</span></h1>
        <p className="subtitle">Frontend Developer & UI Designer</p>
        <p className="description">
          I build high-performance, beautiful single-page applications. 
          Currently focusing on creating seamless user experiences with React.
        </p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;