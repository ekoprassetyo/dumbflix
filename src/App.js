import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesHome from './Pages/MoviesHome';
import TvShowHome from './Pages/TvShowHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movies' element={<MoviesHome />} />
        <Route path='/tvshow' element={<TvShowHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
