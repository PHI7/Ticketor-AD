import React from 'react';
import { Section } from './Section';
import { Smartphone, CheckCircle, WifiOff } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  return (
    <Section className="my-24">
        <div className="bg-gradient-to-br from-[#111] to-black rounded-sm border border-white/5 overflow-hidden relative p-8 md:p-0">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                
                <div className="order-2 md:order-1 relative flex justify-center py-12 md:py-24">
                {/* Phone Mockup Representation */}
                <div className="relative w-[280px] h-[580px] bg-black rounded-[3.5rem] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#2a2a2a] rounded-b-xl z-20"></div>
                    
                    {/* Screen Content */}
                    <div className="w-full h-full bg-[#050505] flex flex-col pt-14 px-5">
                    <div className="flex justify-between items-center mb-10">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-ticketor-yellow font-bold">T</div>
                        <div className="text-[10px] tracking-widest text-gray-500 uppercase">Ticketor Wallet</div>
                    </div>
                    
                    <div className="bg-[#1a1a1a] rounded-xl p-5 border border-ticketor-yellow/20 mb-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-ticketor-yellow text-black text-[9px] font-bold rounded-bl-lg">GÜLTIG</div>
                        <div className="h-28 w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 opacity-50"></div>
                        <div className="h-4 w-2/3 bg-gray-800 rounded mb-2"></div>
                        <div className="h-3 w-1/3 bg-gray-800 rounded"></div>
                    </div>

                    <div className="mt-auto mb-10">
                        <div className="w-full py-4 bg-ticketor-yellow text-black font-bold rounded-lg text-center text-sm tracking-wide uppercase shadow-[0_0_20px_rgba(230,184,0,0.15)]">
                            QR Code Anzeigen
                        </div>
                    </div>
                    </div>
                </div>
                
                {/* Minimal Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] bg-ticketor-yellow/5 blur-[100px] -z-0"></div>
                </div>

                <div className="order-1 md:order-2 md:pr-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
                        High-Tech im Kern. <br/> 
                        <span className="text-ticketor-yellow">Einfachheit im Fokus.</span>
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
                        Ticketor nutzt die Sicherheit der Blockchain-Technologie, ohne Ihre Besucher damit zu belasten. Ein nahtloses Erlebnis.
                    </p>

                    <div className="space-y-8">
                        <div className="flex gap-5 group">
                            <div className="mt-1 text-ticketor-yellow opacity-80 group-hover:opacity-100 transition-opacity"><Smartphone strokeWidth={1.5} /></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Intuitive App</h4>
                                <p className="text-sm text-gray-500 font-light">Login per E-Mail. Kein Krypto-Wissen nötig. Es funktioniert einfach.</p>
                            </div>
                        </div>
                        <div className="flex gap-5 group">
                            <div className="mt-1 text-ticketor-yellow opacity-80 group-hover:opacity-100 transition-opacity"><CheckCircle strokeWidth={1.5} /></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Dynamische Sicherheit</h4>
                                <p className="text-sm text-gray-500 font-light">Rotierende QR-Codes machen Screenshots wertlos. Fälschungen ausgeschlossen.</p>
                            </div>
                        </div>
                        <div className="flex gap-5 group">
                            <div className="mt-1 text-ticketor-yellow opacity-80 group-hover:opacity-100 transition-opacity"><WifiOff strokeWidth={1.5} /></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Offline Ready</h4>
                                <p className="text-sm text-gray-500 font-light">Unser "Proof-of-Read" garantiert Einlass in Sekunden, auch ohne Internet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  );
};