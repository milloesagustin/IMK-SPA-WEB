import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { SafetySection } from './components/SafetySection';
import { WorkCarousel } from './components/WorkCarousel';
import { ClientsSlider } from './components/ClientsSlider';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [serviceForQuote, setServiceForQuote] = useState<string>(
    'Mantenimiento mecánico y estructural de plantas y equipos de proceso'
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Inicio (Hero Section) */}
        <Hero />

        {/* 2. Quiénes Somos & Compromiso */}
        <AboutUs />

        {/* Seguridad Intransable */}
        <SafetySection />

        {/* NUESTRO TRABAJO EN TERRENO (Carousel) */}
        <WorkCarousel />

        {/* Clientes & Faenas Mineras (Slider Infinito & Logos) */}
        <ClientsSlider />

        {/* 5. Contacto & Formulario con Redirección a WhatsApp */}
        <ContactSection selectedServiceTitle={serviceForQuote} />
      </main>

      {/* Footer Corporativo */}
      <Footer />

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
