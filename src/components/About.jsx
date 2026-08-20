function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="about-tag">ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> intelligent solutions.</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p className="about-lead">
              I am a final-year undergraduate student passionate about
              Artificial Intelligence, Machine Learning, and Data Science.
              I enjoy turning ideas into practical applications that solve
              real-world problems.
            </p>

            <p>
              I have hands-on experience with Python, Machine Learning,
              Flask, React, and data-driven applications. Through projects,
              internships, certifications, and continuous learning, I am
              developing both my technical and problem-solving abilities.
            </p>

            <p>
              My goal is to begin my career in AI, Machine Learning, or
              Data Science and contribute to meaningful technology-driven
              projects.
            </p>

            <a href="#contact" className="about-button">
              Let's Connect <span>↗</span>
            </a>
          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <div className="highlight-icon">01</div>
              <div>
                <h3>AI & ML</h3>
                <p>
                  Building intelligent solutions using machine learning
                  and AI technologies.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">02</div>
              <div>
                <h3>Data Science</h3>
                <p>
                  Working with data, Python and analytical approaches
                  to extract useful insights.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">03</div>
              <div>
                <h3>Web Development</h3>
                <p>
                  Creating practical web applications using modern
                  frontend and backend technologies.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;