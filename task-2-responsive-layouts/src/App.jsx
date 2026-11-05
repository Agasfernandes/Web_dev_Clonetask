import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { movies } from './data/movies';

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="content-container">
        {movies.map((movie, index) => {
          let layoutClass = 'card-default';
          if (index === 0) layoutClass = 'card-hero';
          else if (index === 1 || index === 2) layoutClass = 'card-pair';
          else layoutClass = 'card-horizontal';

          return (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              layoutClass={layoutClass} 
            />
          );
        })}
      </main>
    </div>
  );
}