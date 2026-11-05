import imgHero from '../assets/blurred.jpg';
import img1 from '../assets/all-encores.jpg';
import img2 from '../assets/articulation.jpg';
import img3 from '../assets/encores-2.jpg';
import img4 from '../assets/eulogy-for-evolution.jpg';

export default function Gallery() {
  return (
    <section className="gallery-grid">
      <div className="gallery-large">
        <img src={imgHero} alt="Featured gallery" />
      </div>
      <div className="gallery-subgrid">
        <img src={img1} alt="All Encores" />
        <img src={img2} alt="Articulation" />
        <img src={img3} alt="Encores 2" />
        <img src={img4} alt="Eulogy for Evolution" />
      </div>
    </section>
  );
}