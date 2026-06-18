function Projects(){
  const projects = [
    {
      icon: '🤖',
      title: 'AI-Powered Student Assistance Chatbot',
      description: 'Developed a Flask chatbot with 3+ features — PDF extraction, speech-to-text, and translation. Designed RESTful backend routes handling 10+ query types for contextual responses.',
      tech: ['Python', 'Flask', 'NLP', 'Speech-to-Text', 'PDF Processing'],
      live: null,
      github: null,
      type: 'Academic Project'
    },
    {
      icon: '🌿',
      title: 'WildTrack TN',
      description: 'Created an AI web system covering 30+ Tamil Nadu districts with tourist info on temples and wildlife. Enabled dynamic content retrieval based on user location for improved accessibility.',
      tech: ['Python', 'Flask', 'AI', 'Location Based'],
      live: null,
      github: null,
      type: 'Academic Project'
    },
    {
      icon: '🚌',
      title: 'Bus Ticket Booking System',
      description: 'Engineered a web app for bus ticket booking with real-time seat availability across 10+ routes. Implemented user authentication and MySQL database for persistent booking storage.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      live: null,
      github: null,
      type: 'Academic Project'
    },
    {
      icon: '🏆',
      title: 'Sports Quiz App',
      description: 'Built a full React quiz app with Cricket and Football categories, 15 questions each, timer, score tracking, player name input and result page with performance message.',
      tech: ['React', 'React Router', 'CSS', 'Vite'],
      live: 'https://nalantamil-cricfoo-quiz.netlify.app',
      github: 'https://github.com/Nalantamil/quiz-app',
      type: 'Personal Project'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <span className="project-type">{project.type}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" className="btn-live">
                  Live Demo 🚀
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" className="btn-github">
                  GitHub 🐙
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>   
  )
}
export default Projects