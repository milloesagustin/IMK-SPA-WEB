import React, { useState } from 'react';
import { DEMING_CYCLE, IMK_CONTACT } from '../data/imkData';
import { ShieldCheck, Activity, Award } from 'lucide-react';

export const SafetySection: React.FC = () => {
  return (
    <section id="seguridad" className="py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm tracking-widest uppercase">
                Pilar Fundamental
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 uppercase">
              Seguridad Intransable
            </h2>
            <p className="text-slate-600 max-w-xl text-lg">
              La protección de las personas, el medio ambiente y los activos es la condición previa y obligatoria de cada maniobra minera en IMK.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 sm:p-12 shadow-sm mb-20 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 uppercase font-display leading-tight">
                La seguridad es nuestro pilar fundamental, cuidando a quienes formamos IMK y a nuestro entorno
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Nos enfocamos en entregar un servicio con el mayor estándar de seguridad de la industria minera. Nos comprometemos a trabajar estrictamente bajo los protocolos y normativas de cada mandante, protegiendo con rigurosidad la integridad física de cada colaborador y las instalaciones.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center text-emerald-700 rounded-md shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-base font-bold uppercase block">{IMK_CONTACT.safetyRecord}</strong>
                    <span className="text-sm text-slate-500">Tasa de frecuencia cero</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center text-blue-700 rounded-md shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-base font-bold uppercase block">{IMK_CONTACT.safetyAffiliation}</strong>
                    <span className="text-sm text-slate-500">Auditoría continua</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Sernageomin */}
              <div className="bg-slate-50 p-8 border border-slate-200 text-center rounded-md shadow-sm">
                <div className="h-20 sm:h-24 mx-auto flex items-center justify-center mb-6">
                  <img src="/logos/LogoSernageomin.png" alt="Sernageomin" className="w-auto h-full object-contain" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 uppercase font-display mb-1">SERNAGEOMIN</h4>
                <p className="text-sm text-slate-600 mb-4">Cumplimiento Normativo</p>
                <ul className="text-sm text-slate-600 text-left space-y-2 pt-4 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Reglamento de Seguridad Minera
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Estándar de Faena
                  </li>
                </ul>
              </div>

              {/* Mutual de Seguridad */}
              <div className="bg-slate-50 p-8 border border-slate-200 text-center rounded-md shadow-sm">
                <div className="h-20 sm:h-24 mx-auto flex items-center justify-center mb-6">
                  <img src="/logos/logoMutual.png" alt="Mutual de Seguridad" className="w-auto h-full object-contain" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 uppercase font-display mb-1">Mutual de Seguridad</h4>
                <p className="text-sm text-slate-600 mb-4">Empresa Adherente Activa</p>
                <ul className="text-sm text-slate-600 text-left space-y-2 pt-4 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Análisis de Trabajo Seguro (AST)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Procedimiento de Bloqueo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Supervisión en terreno
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
