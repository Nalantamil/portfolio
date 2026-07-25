import useScrollReveal from './useScrollReveal.js';

function ProjectCard({ project, index }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`project-card reveal ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
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
  );
}

function Projects(){
  const projects = [
    {
      icon: '💬',
      title: 'Nalantamil Chat',
      description: 'A real-time group and private chat app with Socket.IO, featuring password-protected DMs, message reactions, edit/delete, and pinned messages. Supports image/file sharing via Cloudinary, typing indicators, read receipts, and JWT authentication.',
      tech: ['React', 'Flask', 'Flask-SocketIO', 'MongoDB', 'JWT', 'Cloudinary'],
      live: 'https://s-nalantamil-chat.vercel.app',
      github: 'https://github.com/Nalantamil/S.Nalantamil-Chat',
      type: 'Personal Project'
    },
    {
      icon: '📊',
      title: 'Agency Dashboard',
      description: 'A full-stack agency management system with dedicated modules for Clients, Projects, Tasks, Team, and Reports, each backed by full CRUD REST APIs and routed with React Router.',
      tech: ['React', 'React Router', 'Flask', 'MongoDB', 'REST API'],
      live: 'https://nalantamil-agency-app.netlify.app',
      github: 'https://github.com/Nalantamil/agency-dashboard',
      type: 'Personal Project'
    },
    {
      icon: '🤖',
      title: 'TechMentor AI',
      description: 'A full-stack AI mentoring chatbot with real-time streaming responses, session-based chat history, and secure authentication (JWT + Google OAuth). Uses the Groq API (LLaMA 3.3) to guide users through programming concepts and interview prep.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Flask', 'MongoDB', 'Groq API', 'JWT'],
      live: 'https://techmentorai.netlify.app',
      github: '',
      type: 'Personal Project'
    },
    {
      icon: '🏆',
      title: 'Sports Quiz App',
      description: 'A React quiz app with Cricket and Football modes, featuring 15-second timed questions, color-coded answer feedback, and dynamic performance-based results.',
      tech: ['React', 'React Router', 'Vite'],
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
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>   
  )
}
export default Projects