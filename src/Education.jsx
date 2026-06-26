function Education(){
  const education = [
    {
      icon: '📚',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science and Engineering',
      school: 'Excel Engineering College, Namakkal',
      duration: '2022 - 2026',
      score: 'CGPA: 8.2'
    },
    {
      icon: '📚',
      degree: 'HSC (12th Grade)',
      field: 'General Education',
      school: 'Government Higher Secondary School, Ganapathipalayam, Erode',
      duration: '2021 - 2022',
      score: 'Percentage: 60.8%'
    },
    {
      icon: '📚',
      degree: 'SSLC (10th Grade)',
      field: 'General Education',
      school: 'Government Higher Secondary School, Lakkapuram, Erode',
      duration: '2019 - 2020',
      score: 'Percentage: 60.6%'
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>

      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-icon">{edu.icon}</div>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-field">{edu.field}</p>
            <p className="edu-school">{edu.school}</p>
            <div className="edu-footer">
              <span className="edu-duration">{edu.duration}</span>
              <span className="edu-score">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Education