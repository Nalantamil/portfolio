import useScrollReveal from './useScrollReveal.js';

function CertCard({ cert, index }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`cert-card reveal ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="cert-icon">{cert.icon}</div>
      <h3 className="cert-title">{cert.title}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <p className="cert-desc">{cert.description}</p>
    </div>
  );
}

function Certification(){
  const certifications = [
    {
      icon: '🏆',
      title: 'Full Stack Python Development',
      issuer: 'ETS Academy, Erode',
      description: 'Built end-to-end web apps using HTML, CSS, JavaScript, Python, and Flask with backend API integration.'
    },
    {
      icon: '🏆',
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB University',
      description: 'Learned NoSQL data modeling, CRUD operations, indexing, and aggregation pipelines in MongoDB.'
    },
    {
      icon: '🏆',
      title: 'Python Programming',
      issuer: 'GeeksforGeeks',
      description: 'Strengthened core Python skills including OOP, file handling, modules, and problem solving.'
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <CertCard key={index} cert={cert} index={index} />
        ))}
      </div>
    </section>
  )
}
export default Certification