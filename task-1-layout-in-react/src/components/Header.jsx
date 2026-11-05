import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Erased Tapes Logo" className="site-logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="#blog">Our Blog</a></li>
          <li><a href="#artists">Our Artists</a></li>
          <li><a href="#story">Our Story</a></li>
        </ul>
      </nav>
    </header>
  );
}