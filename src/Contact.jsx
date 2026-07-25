import useMagnetic from './useMagnetic.js';

function ContactCard({ contact }) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(0.15);

  return (
    <a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="contact-icon">{contact.icon}</div>
      <p className="contact-label">{contact.label}</p>
      <p className="contact-value">{contact.value}</p>
    </a>
  );
}

function ContactButton({ href, className, target, children }) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(0.2);

  return (
    <a
      href={href}
      target={target}
      className={className}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

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
          <ContactCard key={index} contact={contact} />
        ))}
      </div>

      <div className="contact-buttons">
        <ContactButton href="mailto:tamilsundhar49@gmail.com" className="contact-btn email-btn">
          📧 Email Me
        </ContactButton>
        <ContactButton href="https://linkedin.com/in/nalantamil-sundararaju-813242258" target="_blank" className="contact-btn linkedin-btn">
          🔗 LinkedIn
        </ContactButton>
        <ContactButton href="https://github.com/Nalantamil" target="_blank" className="contact-btn github-btn">
          🐙 GitHub
        </ContactButton>
        <ContactButton href="https://wa.me/917397071619" target="_blank" className="contact-btn whatsapp-btn">
          💬 WhatsApp
        </ContactButton>
      </div>
    </section>
  )

}
export default Contact