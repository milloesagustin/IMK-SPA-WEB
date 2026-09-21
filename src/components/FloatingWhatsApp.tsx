import React from 'react';
import { IMK_CONTACT } from '../data/imkData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const targetPhone = IMK_CONTACT.whatsappOfficialRaw || '56944934723';
  const whatsappDirectUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent('Hola IMK Servicios Industriales, me gustaría solicitar una cotización.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
