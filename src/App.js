// // import Navbar from './components/Navbar'; // ✅ Make sure this matches the new filename
// // import Footer from './components/Footer';

// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Sermons from './pages/Sermon';
// // import Events from './pages/Event';
// // import Contact from './pages/Contact';

// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/sermons" element={<Sermons />} />
// //         <Route path="/events" element={<Events />} />
// //         <Route path="/contact" element={<Contact />} />
// //       </Routes>
// //       <Footer />
// //     </Router>
// //   );
// // }

// // export default App;



// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Sermons from './pages/Sermon';
// import Events from './pages/Event';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/sermons" element={<Sermons />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//        <Footer />
//     </Router>
   
//   );
// }

// export default App;





import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermon';
import Events from './pages/Event';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NotFound from './pages/Notfound'; // ✅ added this
import PhotoGallery from './components/Photogallery'; // adjust path as needed




function App() {
  return (
    <Router>
      <Navbar />
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
