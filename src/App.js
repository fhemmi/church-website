



import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // adjust the path if needed
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermon';
import Events from './pages/Event';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NotFound from './pages/Notfound'; // ✅ added this
import PhotoGallery from './components/Photogallery'; // adjust path as needed
// import './App.css';
// import './index.css'




function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="*" element={<NotFound />} /> {/* ✅ added this */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
