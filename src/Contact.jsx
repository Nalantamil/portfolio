function Contact(){
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'tamilsundhar49@gmail.com',
      link: 'mailto:tamilsundhar49@gmail.com'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'nalantamil-sundararaju',
      link: 'https://linkedin.com/in/nalantamil-sundararaju-813242258'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'Nalantamil',
      link: 'https://github.com/Nalantamil'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 7397071619',
      link: 'https://wa.me/917397071619'
    }
  ]

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        {contactInfo.map((contact, index) => (
          <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">{contact.icon}</div>
            <p className="contact-label">{contact.label}</p>
            <p className="contact-value">{contact.value}</p>
          </a>
        ))}
      </div>

      <div className="contact-buttons">
        <a href="mailto:tamilsundhar49@gmail.com" className="contact-btn email-btn">
          📧 Email Me
        </a>
        <a href="https://linkedin.com/in/nalantamil-sundararaju-813242258" target="_blank" className="contact-btn linkedin-btn">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/Nalantamil" target="_blank" className="contact-btn github-btn">
          🐙 GitHub
        </a>
        <a href="https://wa.me/917397071619" target="_blank" className="contact-btn whatsapp-btn">
          💬 WhatsApp
        </a>
      </div>
    </section>
  )

}
export default Contact