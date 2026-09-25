import React from 'react';
import { CLIENTS } from '../data/imkData';

export const ClientsSlider: React.FC = () => {
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clientes" className="py-24 bg-slate-950 border-b border-slate-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-blue-500" />
          <span className="text-blue-400 font-bold text-xs tracking-widest uppercase">
            Mandantes & Faenas
          </span>
          <span className="w-8 h-[2px] bg-blue-500" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
          Nuestros Clientes
        </h2>
        <p className="text-slate-400 text-base mt-2 max-w-xl mx-auto">
          Compañías mineras e industriales que confían sus paradas de planta, montaje y mantenimiento continuo en el equipo de IMK.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-6 bg-slate-900/60 border-y border-slate-800">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex items-center gap-5 px-6 py-4 bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-xl min-w-[340px] shadow-lg hover:shadow-2xl transition-all duration-200 group"
            >
              <div className="w-20 h-20 bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-black font-display text-2xl rounded-lg shrink-0 overflow-hidden shadow-xs">
                {client.logoUrl ? (
                  <img src={client.logoUrl} alt={`Logo de ${client.name}`} className="w-full h-full object-contain p-2" />
                ) : (
                  <span className="text-blue-900 font-black">{client.name.substring(0, 3).toUpperCase()}</span>
                )}
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-black font-display uppercase tracking-wide text-lg truncate group-hover:text-blue-400 transition-colors">
                  {client.name}
                </h4>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mt-0.5 truncate max-w-[200px]">
                  {client.type}
                </p>
                <span className="text-slate-400 text-[11px] block truncate max-w-[200px]">
                  {client.fullName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
