import React, { useState } from 'react';
import { DEMING_CYCLE, IMK_CONTACT } from '../data/imkData';
import { ShieldCheck, Activity, Award } from 'lucide-react';

export const SafetySection: React.FC = () => {
  return (
    <section id="seguridad" className="py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-emerald-500" />
              <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">
                Pilar Fundamental
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
              Seguridad Intransable
            </h2>
            <p className="text-slate-300 max-w-xl text-lg">
              La protección de las personas, el medio ambiente y los activos es la condición previa y obligatoria de cada maniobra minera en IMK.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl mb-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display leading-tight tracking-wide">
                La seguridad es nuestro pilar fundamental, cuidando a quienes formamos IMK y a nuestro entorno
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Nos enfocamos en entregar un servicio con el mayor estándar de seguridad de la industria minera. Nos comprometemos a trabajar estrictamente bajo los protocolos y normativas de cada mandante, protegiendo con rigurosidad la integridad física de cada colaborador y las instalaciones.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-12 h-12 bg-emerald-950/90 border border-emerald-500/40 flex items-center justify-center text-emerald-400 rounded-lg shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-white text-base font-black uppercase block tracking-wide">{IMK_CONTACT.safetyRecord}</strong>
                    <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Tasa de frecuencia cero</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-12 h-12 bg-blue-950/90 border border-blue-500/40 flex items-center justify-center text-blue-400 rounded-lg shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-white text-base font-black uppercase block tracking-wide">{IMK_CONTACT.safetyAffiliation}</strong>
                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Auditoría continua</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-6">
              {/* Sernageomin */}
              <div className="bg-white p-7 border-2 border-slate-200 text-center rounded-xl shadow-lg flex-1">
                <div className="h-16 sm:h-20 mx-auto flex items-center justify-center mb-4">
                  <img src="/logos/LogoSernageomin.png" alt="Sernageomin" className="w-auto h-full object-contain" />
                </div>
                <h4 className="text-lg font-black text-slate-950 uppercase font-display mb-1">SERNAGEOMIN</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Cumplimiento Normativo Minero</p>
                <ul className="text-xs text-slate-700 text-left space-y-1.5 pt-3 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black">✓</span> Reglamento de Seguridad Minera D.S. 132
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black">✓</span> Estándares de Control de Fatalidades
                  </li>
                </ul>
              </div>

              {/* Mutual de Seguridad */}
              <div className="bg-white p-7 border-2 border-slate-200 text-center rounded-xl shadow-lg flex-1">
                <div className="h-16 sm:h-20 mx-auto flex items-center justify-center mb-4">
                  <img src="/logos/logoMutual.png" alt="Mutual de Seguridad" className="w-auto h-full object-contain" />
                </div>
                <h4 className="text-lg font-black text-slate-950 uppercase font-display mb-1">Mutual de Seguridad</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Empresa Adherente Activa</p>
                <ul className="text-xs text-slate-700 text-left space-y-1.5 pt-3 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black">✓</span> Análisis de Trabajo Seguro (AST) y Checklists
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black">✓</span> Procedimiento de Bloqueo Cero Energía
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black">✓</span> Supervisión especializada en terreno 24/7
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
