import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroImage from './components/HeroImage';
import VisionStatement from './components/VisionStatement';
import MissionStatement from './components/MissionStatement';
import CardsSection from './components/CardsSection';
import WhyFootball from './components/WhyFootball';
import Container from './components/Layout/Container';
import WhoWeAre from './components/WhoWeAre';
import ProgramsSection from './components/ProgramsSection';
import ContactForm from './components/ContactForm';
import PartnerSection from './components/ PartnerSection';
import CollaborateSection from './components/CollaborateSection';
import EngageSection from './components/EngageSection';
import GallerySection from './components/GallerySection';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={
              <main>
                <HeroImage />
                <VisionStatement />
                <CardsSection />
                <MissionStatement />
                <WhyFootball />
              </main>
            } />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/programs" element={<ProgramsSection />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/partner" element={<PartnerSection />} />
            <Route path="/collaborate" element={<CollaborateSection />} />
            <Route path="/engage-with-vyaelea" element={<EngageSection />} />
            <Route path="/gallery" element={<GallerySection />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
