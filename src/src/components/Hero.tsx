import React from 'react';
import { IMK_CONTACT } from '../data/imkData';
import { ArrowRight, Wrench, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between bg-slate-900 overflow-hidden pt-28 pb-0 lg:pb-10">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/foto%20quienes%20somos%202.jpg"
          alt="Maquinaria y Planta Minera IMK"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto py-12">
        <div className="max-w-4xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-display tracking-tight leading-[1.05] uppercase">
              Al servicio del desarrollo productivo de la <span className="text-blue-400">minería e industria</span> en Chile
            </h1>
          </div>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Especialistas en <strong>mantenimiento mecánico y estructural</strong> de plantas de proceso minero, montaje de alta envergadura, ingeniería aplicada y obras civiles. Comprometidos con una disponibilidad operacional continua y una seguridad intransable.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-md shadow-sm transition-all duration-200"
            >
              <span>Cotizar Servicios</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#nuestro-trabajo"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-slate-500 text-slate-200 hover:bg-slate-800 hover:border-slate-400 text-sm font-bold tracking-wide uppercase transition-all"
            >
              <Wrench className="w-4 h-4 text-blue-400" />
              <span>Nuestro Trabajo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
