import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { SafetySection } from './components/SafetySection';
import { WorkCarousel } from './components/WorkCarousel';
import { ClientsSlider } from './components/ClientsSlider';
import { ContactSection } from './components/ContactSection';
import { WorkWithUsSection } from './components/WorkWithUsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [serviceForQuote, setServiceForQuote] = useState<string>(
    'Mantenimiento mecánico y estructural de plantas y equipos de proceso'
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
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

        {/* 5. Contacto & Formulario de Cotización */}
        <ContactSection selectedServiceTitle={serviceForQuote} />

        {/* 6. Trabaja con Nosotros & Formulario de Postulación */}
        <WorkWithUsSection />
      </main>

      {/* Footer Corporativo */}
      <Footer />

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
