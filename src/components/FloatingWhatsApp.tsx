import React from 'react';
import { IMK_CONTACT } from '../data/imkData';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappDirectUrl = `https://wa.me/${IMK_CONTACT.phone1Raw}?text=${encodeURIComponent('Hola IMK Servicios Industriales, me gustaría solicitar una cotización.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg hover:bg-emerald-500 hover:-translate-y-1 transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
