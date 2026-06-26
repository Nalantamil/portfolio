function About(){
  return(
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-bio">
          <p>
            I am <span className="highlight">Nalantamil S</span>, a Computer Science
            Engineering graduate from
            <span className="highlight"> Excel Engineering College, Namakkal</span> with
            a CGPA of <span className="highlight">8.2</span>.
          </p>
          <br />
          <p>
            I build full-stack web apps using <span className="highlight">React, Python,
            and Flask</span>, with hands-on experience in REST APIs, MongoDB,
            Socket.IO, and JWT authentication. I've shipped real personal projects
            including a real-time chat app and an agency management dashboard.
          </p>
          <br />
          <p>
            I'm actively looking for a <span className="highlight">Full-Stack Developer
            role</span> where I can build real products, work in a strong team,
            and grow fast as an engineer.
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