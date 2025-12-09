import React from 'react';
import { Hero } from './components/Hero';
import { EcoImpact } from './components/EcoImpact';
import { Features } from './components/Features';
import { AppShowcase } from './components/AppShowcase';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-ticketor-text selection:bg-ticketor-yellow selection:text-black">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 pb-12">
        <EcoImpact />
        <Features />
        <AppShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default App;