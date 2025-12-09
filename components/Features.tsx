import React from 'react';
import { Section } from './Section';
import { ShieldCheck, Leaf, Database } from 'lucide-react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon: Icon }) => (
  <div className="bg-ticketor-card p-10 rounded-sm border border-white/5 hover:border-ticketor-yellow/30 transition-all duration-500 group h-full hover:bg-white/[0.02]">
    <div className="mb-8 text-ticketor-yellow group-hover:scale-110 transition-transform duration-500">
      <Icon size={40} strokeWidth={1} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">{title}</h3>
    <p className="text-gray-400 text-base leading-relaxed font-light">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <Section className="py-24">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Intelligente Tickets. <br/>
          <span className="text-ticketor-yellow">Faire Ökonomie.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
          Wir verwandeln das Ticket von einem Stück Papier in ein programmierbares, digitales Asset.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          title="Anti-Schwarzmarkt"
          description="Smart Tickets kennen ihre Regeln. Integrierte Preiskontrollen machen es technisch unmöglich, Tickets zu Wucherpreisen weiterzuverkaufen. Echte Fans statt Bots."
          icon={ShieldCheck}
        />
        <FeatureCard 
          title="100% Digital & Grün"
          description="Ein vollständig digitaler Lebenszyklus. Kein Druck, kein Versand, kein Müll. Ein Ticket, das niemals verloren geht und die Umwelt nicht belastet."
          icon={Leaf}
        />
        <FeatureCard 
          title="Volle Datenhoheit"
          description="Dank Blockchain-Rückverfolgbarkeit kennen Sie die Historie jedes einzelnen Besuchers. Schluss mit anonymen Zweitmarktkäufern. Sie besitzen die Daten."
          icon={Database}
        />
      </div>
    </Section>
  );
};