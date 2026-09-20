import React from 'react';
import { ImkLogo } from './ImkLogo';
import { IMK_CONTACT } from '../data/imkData';
import { MapPin, Phone, Mail, Globe, ShieldCheck, ChevronRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t-4 border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-4 space-y-4">
            <ImkLogo size="lg" dark />
            <p className="text-slate-300 text-sm font-medium italic">"{IMK_CONTACT.slogan}"</p>
            <p className="text-sm leading-relaxed">Especialistas en mantenimiento integral de plantas de proceso minero, montaje de alta complejidad, proyectos de ingeniería y obras civiles en todo Chile.</p>
            <div className="pt-2 flex items-center gap-2 text-sm text-emerald-500 font-bold">
              <ShieldCheck className="w-5 h-5" />
              <span>{IMK_CONTACT.safetyRecord}</span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-blue-400 flex items-center gap-1"><ChevronRight className="w-4 h-4" /> Inicio</a></li>
              <li><a href="#quienes-somos" className="hover:text-blue-400 flex items-center gap-1"><ChevronRight className="w-4 h-4" /> Empresa</a></li>
              <li><a href="#seguridad" className="hover:text-blue-400 flex items-center gap-1"><ChevronRight className="w-4 h-4" /> Seguridad</a></li>
              <li><a href="#contacto" className="hover:text-blue-400 flex items-center gap-1"><ChevronRight className="w-4 h-4" /> Cotizar</a></li>
              <li><a href="#trabaja-con-nosotros" className="hover:text-blue-400 flex items-center gap-1"><ChevronRight className="w-4 h-4" /> Trabaja con Nosotros</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contacto</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-1 text-blue-500" /> <span>{IMK_CONTACT.address}</span></p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /> <span>{IMK_CONTACT.phone1}</span></p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /> <a href={`mailto:${IMK_CONTACT.email1}`} className="hover:text-blue-400">{IMK_CONTACT.email1}</a></p>
              <p className="flex items-center gap-2"><Globe className="w-4 h-4 text-blue-500" /> <span>{IMK_CONTACT.website}</span></p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Certificaciones</h4>
            <p className="text-sm leading-relaxed">Cumplimiento estricto con los reglamentos de seguridad y salud ocupacional del Sernageomin, normativas mineras y Mutual de Seguridad.</p>
            <a href="#contacto" className="inline-block mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm uppercase rounded transition-colors w-full text-center">
              Cotizar Ahora
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} IMK Servicios Industriales SpA. Todos los derechos reservados.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors">
            <span>Volver arriba</span> <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
