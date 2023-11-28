const Footer = () => {
    return (
      <footer className="footer text-center mt-5">
        <div>
          <a href="https://github.com/conorreed" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' | '}
          <a href="https://www.linkedin.com/in/conor-reed-7b57752a1/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {' | '}
          <a href="https://twitter.com/conorwit1n" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Portfolio</p>
      </footer>
    );
  };
  
  export default Footer;