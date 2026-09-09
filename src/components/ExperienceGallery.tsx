import React, { useState } from 'react';
import { GALLERY_PROJECTS, OPERATION_AREAS, FAENAS_DESTACADAS } from '../data/imkData';
import { GalleryProject } from '../types';
import { MapPin, Layers, Compass, CheckCircle2, X } from 'lucide-react';

export const ExperienceGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');
  const [activeModalProject, setActiveModalProject] = useState<GalleryProject | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'chancadores', label: 'Chancadores' },
    { id: 'celdas', label: 'Celdas' },
    { id: 'motrices', label: 'Sist. Motrices' },
    { id: 'polines', label: 'Polines' },
    { id: 'poleas', label: 'Poleas' },
    { id: 'estructuras', label: 'Estructuras & Montaje' },
  ];

  const filteredProjects = filter === 'todos'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === filter || (filter === 'estructuras' && p.category === 'montaje'));

  return (
    <section id="experiencia" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-700" />
            <span className="text-blue-700 font-bold text-sm tracking-widest uppercase">
              Evidencia en Terreno
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 uppercase">
            Experiencia y Trabajos Realizados
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider border transition-colors ${
                filter === cat.id
                  ? 'bg-blue-700 border-blue-700 text-white shadow-sm'
                  : 'bg-white border-slate-300 text-slate-600 hover:border-blue-700 hover:text-blue-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredProjects.map((project, idx) => {
            const isTall = project.aspectRatio === 'tall' || idx === 1 || idx === 4;
            const isWide = project.aspectRatio === 'wide' && idx === 0;

            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`group relative rounded-md overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all bg-slate-900 ${
                  isTall ? 'sm:row-span-2' : ''
                } ${isWide ? 'lg:col-span-2' : ''}`}
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-slate-900 font-bold text-xs uppercase tracking-wider rounded">
                    {project.categoryLabel}
                  </span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-slate-300">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="mb-10">
            <h3 className="text-3xl font-black font-display uppercase text-slate-900">
              Áreas de Operación
            </h3>
            <p className="text-slate-600 mt-2">La ejecución de nuestros trabajos ha sido realizada en áreas críticas de procesamiento y embarque.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {OPERATION_AREAS.map((area, idx) => (
              <div key={idx} className="bg-white p-6 border border-slate-200 rounded-md">
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-6 h-6 text-blue-700" />
                  <h4 className="text-lg font-bold font-display uppercase text-slate-900">{area.name}</h4>
                </div>
                <p className="text-slate-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-md shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <button onClick={() => setActiveModalProject(null)} className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded text-slate-900">
              <X className="w-6 h-6" />
            </button>
            <div className="h-64 sm:h-80 w-full relative shrink-0">
              <img src={activeModalProject.imageUrl} alt={activeModalProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 overflow-y-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs uppercase rounded">
                  {activeModalProject.categoryLabel}
                </span>
                <span className="text-slate-500 font-medium text-sm flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {activeModalProject.location}
                </span>
              </div>
              <h3 className="text-3xl font-black font-display uppercase text-slate-900 mb-4">{activeModalProject.title}</h3>
              <p className="text-slate-600 mb-6">{activeModalProject.description}</p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase text-slate-900">Protocolos y Acciones</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalProject.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
