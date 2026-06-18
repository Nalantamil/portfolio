function Skills() {
  const skills = [
    {
      icon: '💻',
      title: 'Programming',
      items: ['Python']
    },
    {
      icon: '🌐',
      title: 'Web Technologies',
      items: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      icon: '⚙️',
      title: 'Frameworks',
      items: ['Flask']
    },
    {
      icon: '🗄️',
      title: 'Database',
      items: ['MySQL', 'MongoDB']
    },
    {
      icon: '🛠️',
      title: 'Tools & Platforms',
      items: ['VS Code', 'Git', 'GitHub', 'Microsoft Excel']
    },
    {
      icon: '🤖',
      title: 'AI / Other',
      items: ['Prompt Engineering', 'Basic LLM Concepts', 'REST APIs']
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