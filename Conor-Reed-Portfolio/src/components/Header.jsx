// Header.jsx
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header bg-dark text-light p-3">
      <div className="container">
        <h1 className="navbar-brand">Conor Reed</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
