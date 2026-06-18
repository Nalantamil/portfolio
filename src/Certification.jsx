function Certification(){
const certifications = [
    {
      icon: '🏆',
      title: 'Full Stack Python Development',
      issuer: 'ETS Academy, Erode',
      description: 'Covered HTML, CSS, JavaScript, Python, and basic backend concepts'
    },
    {
      icon: '🏆',
      title: 'SQL',
      issuer: 'HackerRank',
      description: 'Database management and SQL query optimization'
    },
    {
      icon: '🏆',
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB University (online)',
      description: 'NoSQL database fundamentals and MongoDB operations'
    },
    {
      icon: '🏆',
      title: 'Python Programming',
      issuer: 'GeeksforGeeks',
      description: 'Core Python concepts and programming practices'
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon">{cert.icon}</div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-desc">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  )    
}
export default Certification