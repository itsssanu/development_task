import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyJoinSection } from './components/WhyJoinSection';
import { ShapeFutureSection } from './components/ShapeFutureSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PublicationSection } from './components/PublicationSection';
import { ContactForm } from './components/ContactForm';
import { FAQSection } from './components/FAQSection';
import { CarouselSection } from './components/CarouselSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyJoinSection />
      <ShapeFutureSection />
      <FeaturesSection />
      <PublicationSection />
      <ContactForm />
      <FAQSection />
      <CarouselSection />
      <CTASection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<WhyJoinSection />} />
          <Route path="/academics" element={<FeaturesSection />} />
          <Route path="/campus" element={<PublicationSection />} />
          <Route path="/professional" element={<CarouselSection />} />
          <Route path="/careers" element={<CTASection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
