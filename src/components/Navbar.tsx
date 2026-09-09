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
    { name: 'Inicio', href: '#hero' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Seguridad', href: '#seguridad' },
    { name: 'Nuestro Trabajo', href: '#nuestro-trabajo' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar - Clean White */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'border-b border-slate-200 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#hero" className="flex items-center group py-1" id="nav-brand-link">
            <ImkLogo size="xl" />
          </a>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium tracking-wide text-slate-600 hover:text-blue-700 rounded-md transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-sm transition-all duration-200"
            >
              <span>Cotizar Servicios</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-slate-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-700 text-white font-bold text-sm uppercase tracking-wider rounded-md"
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
