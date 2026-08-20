function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "AI & Machine Learning",
      description:
        "Building intelligent solutions and predictive models using machine learning techniques.",
      skills: [
        "Machine Learning",
        "Generative AI",
        "Data Science",
        "Scikit-learn",
      ],
    },

    {
      number: "02",
      title: "Programming & Data",
      description:
        "Working with Python and data-processing tools to analyze and transform datasets.",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Data Analysis",
      ],
    },

    {
      number: "03",
      title: "Web Development",
      description:
        "Developing responsive web applications using modern frontend and backend technologies.",
      skills: [
        "React",
        "JavaScript",
        "HTML & CSS",
        "Flask",
      ],
    },

    {
      number: "04",
      title: "Tools & Database",
      description:
        "Using modern development tools and databases to build and manage applications.",
      skills: [
        "Git & GitHub",
        "MongoDB",
        "VS Code",
        "Jupyter",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <div>
            <p className="skills-tag">TECHNICAL EXPERTISE</p>

            <h2>
              Tools I use to
              <span> create.</span>
            </h2>
          </div>

          <p className="skills-intro">
            A growing technical toolkit built through hands-on projects,
            internships, certifications, and continuous learning.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.number}>

              <div className="skill-category-top">
                <span className="skill-number">
                  {category.number}
                </span>

                <span className="skill-arrow">↗</span>
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;