function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
         <p className="hero-greeting">
  Hello, I'm
</p>

<h1>
  Shalu <span>Yadav</span>
</h1>

          <h2>
            AI & Data Science Enthusiast
          </h2>

          <p className="hero-description">
            I build practical AI, Machine Learning and Data Science
            solutions using Python and modern technologies, with a
            passion for creating intelligent and impactful applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects <span>↗</span>
            </a>
<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-btn"
>
  View Resume ↗
</a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Shaluyadu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shalu-yadav-504a75296/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:shaluyadav@6722gmail.com">
              Email
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="hero-image-wrapper">
            <img src="/photo.jpg" alt="Shalu Yadav" />
          </div>

          <div className="floating-card card-one">
            <span>AI</span>
            <p>Artificial Intelligence</p>
          </div>

          <div className="floating-card card-two">
            <span>ML</span>
            <p>Machine Learning</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;