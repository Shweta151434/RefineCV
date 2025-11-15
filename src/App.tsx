import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import WhatCanItDo from './components/WhatCanItDo';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FindConnections from './pages/FindConnections';
import CompanyConnections from './pages/CompanyConnections';

function Landing() {
  return (
    <div className="min-h-screen bg-white">
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/find-connections" element={<FindConnections />} />
          <Route path="/company/:companyId" element={<CompanyConnections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
