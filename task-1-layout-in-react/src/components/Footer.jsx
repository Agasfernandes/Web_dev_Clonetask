import twitterIcon from '../assets/twitter-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import facebookIcon from '../assets/facebook-icon.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav>
        <ul className="nav-links">
          <li><a href="#blog">Our Blog</a></li>
          <li><a href="#artists">Our Artists</a></li>
          <li><a href="#story">Our Story</a></li>
        </ul>
      </nav>

      <p className="footer-copyright">Copyright © 2024 Erased Tapes</p>

      <div className="footer-socials">
        <a href="#twitter"><img src={twitterIcon} alt="Twitter" /></a>
        <a href="#instagram"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="#facebook"><img src={facebookIcon} alt="Facebook" /></a>
      </div>
    </footer>
  );
}