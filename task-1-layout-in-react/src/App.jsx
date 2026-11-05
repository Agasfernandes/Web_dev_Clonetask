import './App.css';
import Header from './components/Header';
import ArticleHero from './components/ArticleHero';
import ArticleBody from './components/ArticleBody';
import Gallery from './components/Gallery';
import AuthorSection from './components/AuthorSection';
import Comments from './components/Comments';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <ArticleHero />
        <ArticleBody />
        <Gallery />
        <AuthorSection />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}