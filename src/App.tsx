import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import WhatCanItDo from './components/WhatCanItDo';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <WhatCanItDo />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
