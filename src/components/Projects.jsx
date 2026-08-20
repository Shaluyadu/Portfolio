function Projects() {
  const projects = [
    {
      number: "01",
      category: "AI / MACHINE LEARNING",
      title: "Fake News Detection System",
      description:
        "A machine learning web application that analyzes news content and classifies it as Fake or Real using TF-IDF and Logistic Regression.",
      technologies: [
        "Python",
        "Scikit-learn",
        "TF-IDF",
        "Flask",
      ],
      github: "https://github.com/Shaluyadu/Fake-News-Detection-System",
    },

    {
      number: "02",
      category: "MACHINE LEARNING",
      title: "E-commerce Recommendation System",
      description:
        "A recommendation system that predicts user preferences and suggests relevant products using machine learning techniques.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "ML",
      ],
      github: "https://github.com/Shaluyadu/Recommender-System",
    },

    {
      number: "03",
      category: "AI / WOMEN SAFETY",
      title: "Women Safety & Violence Detection",
      description:
        "A safety-focused application designed to support users during emergencies through features such as voice detection and a panic button.",
      technologies: [
        "Python",
        "AI",
        "Voice Detection",
        "Web Development",
      ],
      github: null,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <div>
            <p className="projects-tag">SELECTED WORK</p>

            <h2>
              Projects I've
              <span> built.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of projects where I applied AI, machine learning,
            data science and web development to solve practical problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  View on GitHub
                  <span>↗</span>
                </a>
              )}

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;