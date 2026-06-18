function About(){
    return(
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-bio">
          <p>
            I am <span className="highlight">Nalantamil S</span>, a motivated
            Computer Science Engineering graduate from
            <span className="highlight"> Excel Engineering College, Namakkal</span> with
            a CGPA of <span className="highlight">8.2</span>.
          </p>
          <br />
          <p>
            I have hands-on experience in Python, Flask, and full-stack web
            development. I built 3+ AI-powered web applications integrating
            NLP, speech-to-text, and PDF processing during my academic projects.
          </p>
          <br />
          <p>
            I am seeking an entry-level Full-Stack Developer role to contribute
            to real-world products and grow within a collaborative engineering team.
          </p>
        </div>
        <div className="about-info">
          <div className="info-card">
            <span className="info-icon">🎓</span>
            <div>
              <p className="info-label">Degree</p>
              <p className="info-value">BE Computer Science</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">🏫</span>
            <div>
              <p className="info-label">College</p>
              <p className="info-value">Excel Engineering College</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📍</span>
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">Erode, Tamil Nadu</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📧</span>
            <div>
              <p className="info-label">Email</p>
              <p className="info-value">tamilsundhar49@gmail.com</p>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">💼</span>
            <div>
              <p className="info-label">Role</p>
              <p className="info-value">Full Stack Developer</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">🎯</span>
            <div>
              <p className="info-label">Status</p>
              <p className="info-value">Open to Work</p>
            </div>
          </div>
        </div>

      </div>
    </section>        
    );
}
export default About