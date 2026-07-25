import useScrollReveal from './useScrollReveal.js';

function SkillCard({ skill, index }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`skill-card reveal ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="skill-icon">{skill.icon}</div>
      <h3 className="skill-title">{skill.title}</h3>
      <div className="skill-items">
        {skill.items.map((item, i) => (
          <span key={i} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    { icon: '💻', title: 'Programming', items: ['Python', 'JavaScript'] },
    { icon: '🌐', title: 'Web Technologies', items: ['HTML', 'CSS', 'Tailwind CSS'] },
    { icon: '⚙️', title: 'Frameworks', items: ['React.js', 'Flask'] },
    { icon: '🗄️', title: 'Database', items: ['MongoDB', 'MySQL'] },
    { icon: '🛠️', title: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Cloudinary'] },
    { icon: '🔌', title: 'APIs & Backend', items: ['REST APIs', 'JWT Authentication', 'Socket.IO'] },
    { icon: '🤖', title: 'AI / Other', items: ['Prompt Engineering', 'Basic LLM Concepts'] }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;