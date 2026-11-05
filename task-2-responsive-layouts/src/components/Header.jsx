export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="logo">watch.it</h1>
        
        <nav className="header-nav">
          <ul className="nav-links">
            <li><a href="#action">Action</a></li>
            <li><a href="#comedy">Comedy</a></li>
            <li><a href="#romance">Romance</a></li>
            <li><a href="#drama">Drama</a></li>
          </ul>
        </nav>

        <button className="search-btn" type="button">SEARCH</button>
      </div>
    </header>
  );
}