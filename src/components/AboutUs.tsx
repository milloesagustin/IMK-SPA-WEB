import React, { useState, useEffect } from 'react';
import { COMMITMENT_PILLARS } from '../data/imkData';
import { Cog, ChevronLeft, ChevronRight, X, Images } from 'lucide-react';

interface ServicePhoto {
  url: string;
  title: string;
}

interface HighlightService {
  id: string;
  title: string;
  subtitle: string;
  photos: ServicePhoto[];
}

const HIGHLIGHT_SERVICES: HighlightService[] = [
  {
    id: 'mantenimiento-mecanico',
    title: 'Mantenimiento mecánico mayor y menor',
    subtitle: 'Chancadores, molinos, celdas y sistemas motrices',
    photos: [
      { url: '/images/foto1.jpeg', title: 'Cambio de poleas motrices y sistemas de transmisión' },
      { url: '/images/IMG_2693.jpg', title: 'Overhaul y mantenimiento mayor de chancadores' },
      { url: '/images/IMG_2696.jpg', title: 'Mantenimiento de celdas de flotación e impulsores' },
      { url: '/images/IMG_2702.jpg', title: 'Alineamiento láser tridimensional de sistemas motrices' },
    ],
  },
  {
    id: 'montaje-estructuras',
    title: 'Montaje y desmontaje de estructuras',
    subtitle: 'Maniobras pesadas de izaje, tolvas y chutes',
    photos: [
      { url: '/images/foto2.jpeg', title: 'Montaje de módulos y estructuras industriales' },
      { url: '/images/foto3.jpeg', title: 'Maniobras críticas de izaje y rigging en faena' },
      { url: '/images/IMG_7492.jpg', title: 'Instalación de tolvas y chutes de traspaso' },
      { url: '/images/IMG_7502.jpg', title: 'Desmontaje y ajuste estructural en parada de planta' },
    ],
  },
  {
    id: 'maestranza-fabricacion',
    title: 'Maestranza y fabricación metálica',
    subtitle: 'Calderería, vigas y soldadura calificada AWS',
    photos: [
      { url: '/images/IMG_5916.jpg', title: 'Fabricación y calderería pesada en maestranza' },
      { url: '/images/IMG_8068.jpg', title: 'Soldadura calificada y recuperación de componentes' },
      { url: '/images/IMG_8776.jpg', title: 'Armado de vigas estructurales y plataformas mineras' },
      { url: '/images/IMG_9477.jpg', title: 'Aseguramiento de calidad QA/QC y acabados epóxicos' },
    ],
  },
  {
    id: 'ingenieria-obras-civiles',
    title: 'Ingeniería aplicada y obras civiles',
    subtitle: 'Topografía de precisión, fundaciones y losas',
    photos: [
      { url: '/images/IMG_1486.jpg', title: 'Fundaciones y radieres de alta resistencia para equipos' },
      { url: '/images/IMG_9694.jpg', title: 'Obras civiles e infraestructura de soporte en faena' },
      { url: '/images/IMG_9754.jpg', title: 'Levantamiento dimensional y control en terreno' },
      { url: '/images/foto%20quienes%20somos%202.jpg', title: 'Topografía milimétrica e ingeniería estructural' },
    ],
  },
];

export const AboutUs: React.FC = () => {
  const [activeService, setActiveService] = useState<HighlightService | null>(null);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  // Close modal with Escape key and navigate with Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeService) return;
      if (e.key === 'Escape') {
        setActiveService(null);
      } else if (e.key === 'ArrowLeft') {
        setCurrentPhotoIdx((prev) => (prev === 0 ? activeService.photos.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentPhotoIdx((prev) => (prev === activeService.photos.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeService]);

  const openServiceModal = (service: HighlightService) => {
    setActiveService(service);
    setCurrentPhotoIdx(0);
  };

  const nextPhoto = () => {
    if (!activeService) return;
    setCurrentPhotoIdx((prev) => (prev === activeService.photos.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = () => {
    if (!activeService) return;
    setCurrentPhotoIdx((prev) => (prev === 0 ? activeService.photos.length - 1 : prev - 1));
  };

  return (
    <section id="quienes-somos" className="py-24 bg-slate-900 border-b border-slate-800 text-white relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="space-y-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500" />
            <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">
              Conócenos
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            Quiénes Somos
          </h2>
        </div>

        {/* Content & Main Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                Somos una empresa dedicada principalmente al <strong className="text-white">mantenimiento de plantas de proceso minero</strong>. Realizamos trabajos tales como, montaje de equipos y estructuras, fabricación de estructuras metálicas, ingeniería y obras civiles.
              </p>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                En IMK Servicios Industriales, nos enfocamos en llevar un servicio de acuerdo a los requerimientos de cada mandante, para ser líderes en el rubro minero e industrial. Somos un aliado de nuestros clientes, brindándoles soluciones concretas para un desarrollo en la productividad eficiente, cuidando en primer lugar a todos nuestros trabajadores, activos y medio ambiente.
              </p>
            </div>

            {/* 4 Prominent Services with Gear Icons & Carousel Trigger */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest block">
                Nuestros servicios principales:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {HIGHLIGHT_SERVICES.map((srv) => (
                  <button
                    key={srv.id}
                    id={`servicio-btn-${srv.id}`}
                    type="button"
                    onClick={() => openServiceModal(srv)}
                    className="group p-4 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500 rounded-xl text-left transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer flex items-start gap-3 w-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-950/90 border border-blue-500/40 group-hover:border-blue-400 group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
                      <Cog className="w-5 h-5 transition-transform duration-500 group-hover:rotate-90" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-white group-hover:text-blue-300 leading-snug">
                        {srv.title}
                      </h4>
                      <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-blue-400 group-hover:text-blue-300">
                        <Images className="w-3.5 h-3.5" />
                        <span>Ver fotos en faena</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 group">
            <img
              src="/images/foto%20quienes%20somos.jpg"
              alt="Soldador y Mantenimiento IMK"
              className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Commitment Pillars */}
        <div className="space-y-10 pt-6">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
              Nuestro Compromiso
            </h3>
            <p className="text-slate-400 text-base mt-2">
              Tres pilares fundamentales sobre los cuales cimentamos cada contrato y servicio minero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMITMENT_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="relative p-8 bg-slate-950 text-white border border-slate-800 rounded-xl shadow-2xl overflow-hidden group hover:border-blue-500 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700" />
                <span className="text-3xl font-display font-black text-blue-400 tracking-wider block mb-2 opacity-90">
                  {pillar.number}
                </span>
                <h4 className="text-2xl font-black text-white uppercase font-display mb-3 tracking-wide">
                  {pillar.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Superposed Modal Carousel */}
      {activeService && (
        <div
          id="modal-carrusel-servicio"
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveService(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 relative flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <div className="w-8 h-8 rounded bg-blue-700/60 border border-blue-500/40 flex items-center justify-center shrink-0">
                  <Cog className="w-4 h-4 text-blue-300 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg uppercase font-display tracking-wide text-white truncate">
                    {activeService.title}
                  </h3>
                  <span className="text-xs text-blue-300">
                    Foto {currentPhotoIdx + 1} de {activeService.photos.length}
                  </span>
                </div>
              </div>

              <button
                id="cerrar-modal-servicio"
                type="button"
                onClick={() => setActiveService(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                aria-label="Cerrar carrusel"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Carousel */}
            <div className="relative bg-slate-950 flex items-center justify-center aspect-16/10 sm:aspect-16/9 overflow-hidden">
              <img
                src={activeService.photos[currentPhotoIdx].url}
                alt={activeService.photos[currentPhotoIdx].title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-700 text-white transition-colors backdrop-blur-xs shadow-lg"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-700 text-white transition-colors backdrop-blur-xs shadow-lg"
                aria-label="Siguiente foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer with Thumbnails */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {activeService.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentPhotoIdx(idx)}
                    className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      currentPhotoIdx === idx
                        ? 'border-blue-500 ring-2 ring-blue-400 scale-105'
                        : 'border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
