import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 mt-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Lassen Sie uns Pilotieren.</h2>
        <p className="text-xl text-gray-400 mb-12 font-light">
            Die Technologie von morgen ist bereit für Ihr Event von heute. <br/>
            Integrieren Sie Ticketor parallel zu Ihrem bestehenden System.
        </p>
        
        <div className="bg-ticketor-card p-10 rounded-sm max-w-2xl mx-auto border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ticketor-yellow to-transparent opacity-30"></div>
            
            <Logo className="h-12 mx-auto mb-10 opacity-90" />
            
            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-300 mb-10">
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-white/5 rounded-full text-ticketor-yellow"><MapPin size={20} strokeWidth={1.5}/></div>
                    <span className="leading-relaxed">Ticketor LLC<br/>199 the Green<br/>Dover, Delaware</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-white/5 rounded-full text-ticketor-yellow"><Mail size={20} strokeWidth={1.5}/></div>
                    <a href="mailto:Karim.Hager@Ticketor.io" className="hover:text-ticketor-yellow transition-colors mt-2 text-base">Karim.Hager@Ticketor.io</a>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5">
                <button className="w-full py-4 bg-ticketor-yellow text-black font-bold rounded-sm hover:bg-ticketor-gold transition-colors tracking-widest uppercase text-sm">
                    Pilotzugang Anfordern
                </button>
            </div>
        </div>

        <p className="mt-16 text-xs text-gray-600 font-light">
            © {new Date().getFullYear()} Ticketor LLC. All rights reserved. <br/>
            Datenschutz (DSGVO Konform): Sensible Daten bleiben Off-Chain.
        </p>
      </div>
    </footer>
  );
};