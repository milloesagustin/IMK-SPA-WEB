import React from 'react';
import { SERVICES } from '../data/imkData';
import { ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForQuote }) => {

  const handleQuoteClick = (serviceTitle: string) => {
    if (onSelectServiceForQuote) onSelectServiceForQuote(serviceTitle);
    const contactSection = document.getElementById('contacto');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-700" />
            <span className="text-blue-700 font-bold text-sm tracking-widest uppercase">
              Capacidad Operativa Integral
            </span>
            <span className="w-8 h-[2px] bg-blue-700" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 uppercase">
            Nuestros Servicios
          </h2>
          <p className="text-slate-600 text-lg">
            Soluciones de alta ingeniería y terreno diseñadas para maximizar la continuidad operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-md overflow-hidden flex flex-col h-full">
              <div className="relative flex-[1.5] min-h-[280px] overflow-hidden bg-slate-100 group">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              <div className="p-6 bg-white border-t border-slate-200 flex flex-col justify-between shrink-0 min-h-[160px]">
                <h3 className="text-xl font-black font-display uppercase text-slate-900 leading-tight">
                  {service.title}
                </h3>
                
                <div className="mt-4 flex items-center">
                  <button onClick={() => handleQuoteClick(service.title)} className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors w-full justify-center">
                    <span>Cotizar Servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
