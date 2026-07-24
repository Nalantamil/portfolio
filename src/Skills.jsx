function Skills() {
  const skills = [
    {
      icon: '💻',
      title: 'Programming',
      items: ['Python', 'JavaScript']
    },
    {
      icon: '🌐',
      title: 'Web Technologies',
      items: ['HTML', 'CSS', 'Tailwind CSS']
    },
    {
      icon: '⚙️',
      title: 'Frameworks',
      items: ['React.js', 'Flask']
    },
    {
      icon: '🗄️',
      title: 'Database',
      items: ['MongoDB', 'MySQL']
    },
    {
      icon: '🛠️',
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Cloudinary']
    },
    {
      icon: '🔌',
      title: 'APIs & Backend',
      items: ['REST APIs', 'JWT Authentication', 'Socket.IO']
    },
    {
      icon: '🤖',
      title: 'AI / Other',
      items: ['Prompt Engineering', 'Basic LLM Concepts']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <div className="skill-items">
              {skill.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills