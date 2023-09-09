import {Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import MovieDetail from './pages/movieDetail/MovieDetail'
import PageNotFound from './pages/pageNotFound/PageNotFound'
function App() {
  
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
