function Hero(){
    return(
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Nalantamil S</h1>
        <h2 className="hero-title">Full Stack Developer</h2>
        <p className="hero-desc">
          Building web apps with React & Python
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