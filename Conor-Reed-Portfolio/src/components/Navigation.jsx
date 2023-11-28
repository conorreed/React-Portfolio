// Navigation.jsx
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav-tabs">
      <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
        About Me
      </Link>

      <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>
        Portfolio
      </Link>

      <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
        Contact
      </Link>

      <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
        Resume
      </Link>
    </nav>
  );
};

export default Navigation;
