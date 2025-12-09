import React from 'react';
import { Section } from './Section';
import { TreeDeciduous, Wind, Ban } from 'lucide-react';

export const EcoImpact: React.FC = () => {
  return (
    <Section id="impact" className="my-20">
      <div className="relative bg-ticketor-card rounded-sm border border-white/5 p-12 md:p-20 overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ticketor-yellow/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
            Kein Papier. <span className="text-ticketor-yellow">Kein Müll.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Die Eventbranche produziert jährlich Tonnen an Papiermüll. Ticketor eliminiert das physische Ticket vollständig.
            Unsere <strong>Hilbert Chain</strong> Technologie arbeitet mit einem Bruchteil des Energieverbrauchs herkömmlicher Blockchains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-white/5 text-ticketor-yellow group-hover:bg-ticketor-yellow group-hover:text-black transition-colors duration-500">
                <TreeDeciduous size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Rettung der Wälder</h3>
              <p className="text-sm text-gray-500">Durch 100% digitalen Einlass.</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-white/5 text-ticketor-yellow group-hover:bg-ticketor-yellow group-hover:text-black transition-colors duration-500">
                <Wind size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Klimaneutral</h3>
              <p className="text-sm text-gray-500">Energieeffizientes Protokoll.</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-white/5 text-ticketor-yellow group-hover:bg-ticketor-yellow group-hover:text-black transition-colors duration-500">
                <Ban size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Zero Waste</h3>
              <p className="text-sm text-gray-500">Keine Produktion, kein Versand.</p>
            </div>
        </div>
      </div>
    </Section>
  );
};