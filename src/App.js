import './App.css';

import { MovieCardContainer } from './container/MovieCardContainer';

function App() {
  return (
    <div className="App">
      <header className="logo">
        <h1>🎬 YMDB</h1>
      </header>
      <MovieCardContainer></MovieCardContainer>
    </div>
  );
}

export default App;
