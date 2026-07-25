import { useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground.jsx';

function Hero(){
  const fullText = 'Full Stack Developer';
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return(
    <section id="home" className="hero">
      <ParticlesBackground />
      <div className="hero-content">

        <div className="hero-profile">
          <img 
            src="/Nalantamilprofile.png" 
            alt="Nalantamil S" 
            className="profile-img"
          />
        </div>

        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">
          {'Nalantamil S'.split('').map((char, i) => (
            <span
              key={i}
              className="letter-reveal"
              style={{ animationDelay: `${0.6 + i * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <h2 className="hero-title">
          {displayedText}
          <span className="typewriter-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </h2>
        <p className="hero-desc">
          Building full-stack web apps with React, Python & Flask
        </p>
        <div className="hero-buttons">
          <a href="/Nalantamil_S_Resume_Pdf.pdf" download className="btn-primary">
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>        
  );
}
export default Hero