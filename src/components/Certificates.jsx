function Certificates() {
  const certificates = [
    {
      title: "Data Science Internship",
      issuer: "Codec Technologies Pvt. Ltd.",
      description: "1 Month AICTE & ICAC Approved Internship",
      file: "/certificates/data-science-internship.pdf",
      featured: true,
    },
    {
      title: "Generative AI Training",
      issuer: "Internshala",
      file: "/certificates/generative-ai-training.pdf",
    },
    {
      title: "Artificial Intelligence & Machine Learning Training",
      issuer: "Internshala",
      file: "/certificates/ai-ml-training.pdf",
    },
    {
      title: "Angular Training",
      issuer: "Internshala",
      file: "/certificates/angular-training.pdf",
    },
    {
      title: "Git & GitHub Training",
      issuer: "Internshala",
      file: "/certificates/git-github-training.pdf",
    },
    
    {
      title: "Introduction to Large Language Models",
      issuer: "IBM SkillsBuild",
      file: "/certificates/large-language-models.pdf",
    },
    {
      title: "Intelligent by Design: Build an AI Agent",
      issuer: "IBM SkillsBuild",
      file: "/certificates/ai-agent.pdf",
    },
    {
      title: "Internship & Job Preparation Training",
      issuer: "Internshala",
      file: "/certificates/internship-job-preparation.pdf",
    },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-header">
        <span className="section-tag">MY ACHIEVEMENTS</span>

        <h2>Certifications & Training</h2>

        <p>
          Continuous learning, practical experience, and professional
          development in Artificial Intelligence, Data Science, and
          modern technologies.
        </p>
      </div>

      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div
            className={`certificate-card ${
              certificate.featured ? "featured-certificate" : ""
            }`}
            key={certificate.title}
          >
            <div className="certificate-top">
              <div className="certificate-icon">
                {certificate.featured ? "🏆" : "📜"}
              </div>

              <span className="certificate-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="certificate-content">
              <span className="certificate-label">
                {certificate.featured ? "INTERNSHIP" : "CERTIFICATION"}
              </span>

              <h3>{certificate.title}</h3>

              <p className="certificate-issuer">
                {certificate.issuer}
              </p>

              {certificate.description && (
                <p className="certificate-description">
                  {certificate.description}
                </p>
              )}
            </div>

            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-button"
            >
              View Certificate
              <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;