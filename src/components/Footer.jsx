function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>Shalu</span> Yadav
          </a>

          <p>
            AI & Data Science Enthusiast
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/Shaluyadu"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/shalu-yadav-504a75296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:shaluyadav@6722gmail.com">
            Email ↗
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Shalu Yadav. All rights reserved.</p>

        <a href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;