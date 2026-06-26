function Projects(){
  const projects = [
    {
      icon: '💬',
      title: 'Nalantamil Chat',
      description: 'A real-time group chat web application with live messaging, reactions, and user authentication. Features typing indicators, online user tracking, and message edit/delete with emoji reactions.',
      tech: ['React', 'Flask', 'Flask-SocketIO', 'MongoDB Atlas', 'JWT'],
      live: 'https://s-nalantamil-chat.vercel.app',
      github: 'https://github.com/Nalantamil/S.Nalantamil-Chat',
      type: 'Personal Project'
    },
    {
      icon: '📊',
      title: 'Agency Dashboard',
      description: 'A full-stack client and project management system built for digital agencies to manage clients, projects, tasks, team members and reports with live dashboard analytics.',
      tech: ['React', 'Vite', 'Flask', 'Python', 'MongoDB Atlas', 'REST API', 'CSS3'],
      live: 'https://nalantamil-agency-app.netlify.app',
      github: 'https://github.com/Nalantamil/agency-dashboard',
      type: 'Personal Project'
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