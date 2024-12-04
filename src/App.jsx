
import './App.css';
import AppNavbar from './Components/AppNavbar';
import AppMain from './Components/AppMain';
import AppFooter from './Components/AppFooter';
import TvShow from './Components/TvShow';
import MovieDetails from './Components/MovieDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <AppNavbar />
    <Routes>  
      <Route path='/' element={<AppMain />}> </Route>
      <Route path='/tvshows' element={<TvShow />}> </Route>
      <Route path='/moviedetails/:movieId' element={<MovieDetails />}> </Route>
    </Routes>
    <AppFooter />
    </BrowserRouter>
  );
}

export default App;