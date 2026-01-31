import { useEffect, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Industries from './sections/Industries';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Industries />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
