// Footer.jsx
const Footer = () => {
    return (
      <footer className="footer mt-5 py-4">
        <nav className="nav">
          <li className="nav-item">
            <a href="https://github.com/conorreed" className="nav-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/conor-reed-7b57752a1/" className="nav-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/conorwit1n" className="nav-link" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </nav>
        <p className="mt-3">&copy; {new Date().getFullYear()} Your Portfolio</p>
      </footer>
    );
  };
  
  export default Footer;
  