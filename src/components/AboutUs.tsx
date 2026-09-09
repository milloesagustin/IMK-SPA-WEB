import React from 'react';
import { COMMITMENT_PILLARS } from '../data/imkData';
import { Target, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-700" />
            <span className="text-blue-700 font-bold text-sm tracking-widest uppercase">
              Conócenos • Trayectoria y Solidez
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 uppercase">
            Quiénes Somos
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            Aliados estratégicos de la gran y mediana minería e industria pesada chilena, entregando soluciones de mantenimiento técnico y montaje con máxima disponibilidad operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-slate-100 text-blue-700 rounded-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 uppercase font-display">
                  Nuestra Misión y Especialidad
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-base mb-4">
                Somos una empresa dedicada principalmente al <strong>mantenimiento de plantas de proceso minero</strong>. Realizamos trabajos tales como, montaje de equipos y estructuras, fabricación de estructuras metálicas, ingeniería y obras civiles.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                En <strong>IMK Servicios Industriales</strong>, nos enfocamos en llevar un servicio de acuerdo a los requerimientos de cada mandante, para ser líderes en el rubro minero e industrial. Somos un aliado de nuestros clientes, brindándoles soluciones concretas para un desarrollo en la productividad eficiente, cuidando en primer lugar a todos nuestros trabajadores, activos y medio ambiente.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Mantenimiento mecánico mayor y menor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Montaje y desmontaje de estructuras</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Maestranza y fabricación metálica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Ingeniería aplicada y obras civiles</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-l-4 border-l-blue-700">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block mb-2">Visión Corporativa</span>
              <p className="text-lg font-medium text-slate-900 italic">
                "Ser líderes en el rubro minero e industrial, brindando soluciones concretas para la productividad eficiente, consolidándonos como el socio de confianza predilecto de las principales faenas del país."
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-sm">
            <img
              src="/images/foto%20quienes%20somos.jpg"
              alt="Soldador y Mantenimiento IMK"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-black font-display uppercase tracking-tight text-slate-900">
              Nuestro Compromiso
            </h3>
            <p className="text-slate-600 text-base mt-2">
              Tres pilares fundamentales sobre los cuales cimentamos cada contrato y servicio minero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMITMENT_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 bg-slate-50 border border-slate-200 rounded-md"
              >
                <h4 className="text-2xl font-black text-blue-700 uppercase font-display mb-4">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
