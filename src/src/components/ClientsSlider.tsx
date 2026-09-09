import React from 'react';
import { CLIENTS } from '../data/imkData';

export const ClientsSlider: React.FC = () => {
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clientes" className="py-20 bg-slate-100 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900 uppercase">
          Nuestros Clientes
        </h2>
        <p className="text-slate-600 text-base mt-2">
          Mandantes de primer nivel que confían sus paradas de planta y proyectos en nuestro equipo.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4 bg-white border-y border-slate-200 shadow-sm">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex items-center gap-5 px-8 py-5 bg-slate-50 border border-slate-200 rounded-md min-w-[340px]"
            >
              <div className="w-20 h-20 bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-black font-display text-2xl rounded shrink-0 overflow-hidden shadow-sm">
                {client.logoUrl ? (
                  <img src={client.logoUrl} alt={`Logo de ${client.name}`} className="w-full h-full object-contain p-2" />
                ) : (
                  client.name.substring(0, 3).toUpperCase()
                )}
              </div>
              <div>
                <h4 className="text-slate-900 font-bold uppercase tracking-wide text-lg">
                  {client.name}
                </h4>
                <p className="text-slate-500 text-sm truncate max-w-[200px] mt-0.5">
                  {client.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
