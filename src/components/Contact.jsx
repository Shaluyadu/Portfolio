function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-content">
          <p className="contact-tag">GET IN TOUCH</p>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="contact-description">
            I'm always open to discussing new opportunities, projects,
            collaborations, and interesting ideas.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:shaluyadav@6722gmail.com"
              className="contact-email"
            >
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shalu-yadav-504a75296/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Shaluyadu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              GitHub ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;