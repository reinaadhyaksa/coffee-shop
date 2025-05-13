import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from "./pages/AboutPage";
import LocationPage from "./pages/LocationPage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrolltoTop";
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>       
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
