import React, { useState, useEffect } from 'react';
import { ImkLogo } from './ImkLogo';
import { IMK_CONTACT } from '../data/imkData';
import { Phone, Mail, MapPin, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Seguridad', href: '#seguridad' },
    { name: 'Nuestro Trabajo', href: '#nuestro-trabajo' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Trabaja con Nosotros', href: '#trabaja-con-nosotros' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar with vibrant cyan/blue dividing line at bottom */}
      <nav 
        id="main-navbar"
        className={`bg-slate-950/95 backdrop-blur-md transition-all duration-300 border-b-2 border-sky-400 ${
          scrolled ? 'shadow-2xl py-1.5 sm:py-2 border-sky-400' : 'py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a 
            href="#hero" 
            className="flex items-center group -my-2.5 sm:-my-3 py-0 overflow-visible" 
            id="nav-brand-link"
            aria-label="IMK Servicios Industriales Inicio"
          >
            <ImkLogo size="navbar" dark className="transform scale-110 sm:scale-120 origin-left" />
          </a>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-semibold tracking-wide text-slate-300 hover:text-blue-400 hover:bg-slate-900 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contacto"
              id="nav-cotizar-button"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-200 active:scale-95"
            >
              <span>Cotizar Servicios</span>
            </a>
          </div>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-bold text-sm uppercase tracking-wider rounded-lg"
              >
                <span>Cotizar Servicios</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
