import './index.css';
import './styles/page-structure.css';

import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GalleriesSocial from './components/GalleriesSocial';
import GalleriesCookie from './components/GalleriesCookie'
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
      <BackgroundGlow />
      <Navbar />
      <div className="page-width">
        <Hero />
        <About />
        <GalleriesSocial />
        <GalleriesCookie />
      </div>
      <Footer />
    </div>
  );
}

export default App;
