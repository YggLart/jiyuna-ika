import './index.css';
import './styles/page-structure.css';

import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
      <BackgroundGlow />
      <Navbar />
      <div className="page-width">
        <Hero />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
