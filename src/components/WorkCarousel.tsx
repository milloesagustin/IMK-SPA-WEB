import React from 'react';
import { Camera } from 'lucide-react';

const CAROUSEL_IMAGES = [
  '/images/foto1.jpeg',
  '/images/foto2.jpeg',
  '/images/foto3.jpeg',
  '/images/IMG_1486.jpg',
  '/images/IMG_2693.jpg',
  '/images/IMG_2696.jpg',
  '/images/IMG_2702.jpg',
  '/images/IMG_5916.jpg',
  '/images/IMG_7492.jpg',
  '/images/IMG_7502.jpg',
  '/images/IMG_8068.jpg',
  '/images/IMG_8776.jpg',
  '/images/IMG_9477.jpg',
  '/images/IMG_9694.jpg',
  '/images/IMG_9754.jpg',
];

export const WorkCarousel: React.FC = () => {
  // Duplicate array for infinite scroll
  const marqueeImages = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <section id="nuestro-trabajo" className="py-24 bg-slate-100 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-700" />
            <span className="text-blue-700 font-bold text-sm tracking-widest uppercase">
              Galería Visual
            </span>
            <span className="w-8 h-[2px] bg-blue-700" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 uppercase">
            Nuestro Trabajo en Terreno
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4 bg-slate-100">
        {/* Gradient overlays for smooth enter/exit edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />

        {/* Marquee container with customized slow duration */}
        <div 
          className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '65s' }}
        >
          {marqueeImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative shrink-0 w-[280px] sm:w-[400px] h-[220px] sm:h-[300px] rounded-lg overflow-hidden group shadow-md bg-white border border-slate-200"
            >
              <img
                src={imgSrc}
                alt={`Trabajo en terreno ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <Camera className="w-5 h-5 text-slate-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
