import authorPic from '../assets/profile_picture.jpg';
import twitterIcon from '../assets/twitter-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import facebookIcon from '../assets/facebook-icon.png';

export default function AuthorSection() {
  return (
    <section className="author-section">
      <div className="author-info">
        <h2>The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam
          sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora
          bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.
        </p>
        <span className="author-copyright">Copyright © 2023 Erased Disks Ltd.</span>
      </div>

      <img src={authorPic} alt="Author" className="author-photo" />

      <div className="author-socials">
        <a href="#twitter" className="twitter-btn" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="#instagram" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="#facebook" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </div>
    </section>
  );
}