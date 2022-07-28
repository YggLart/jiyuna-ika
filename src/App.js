import './index.css';

import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="page-container">
      <BackgroundGlow />
      <Navbar />
      <div className="page-width">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
