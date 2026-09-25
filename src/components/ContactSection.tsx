import React, { useState } from 'react';
import { IMK_CONTACT } from '../data/imkData';
import { ContactFormData } from '../types';
import { MapPin, Phone, Mail, Globe, Instagram, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactSectionProps {
  selectedServiceTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServiceTitle }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombreEmpresa: '',
    email: '',
    telefono: '',
    servicioInteres: selectedServiceTitle || 'Mantenimiento mecánico y estructural',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>('');

  React.useEffect(() => {
    if (selectedServiceTitle) {
      setFormData((prev) => ({ ...prev, servicioInteres: selectedServiceTitle }));
    }
  }, [selectedServiceTitle]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nombre = formData.nombreEmpresa.trim();
    const email = formData.email.trim();
    const telefono = formData.telefono.trim();
    const servicio = formData.servicioInteres.trim();
    const mensaje = formData.mensaje.trim();

    const formattedMessage = `*COTIZACIÓN WEB - IMK*\n━━━━━━━━━━━━━━━━━━━━\n🏭 *Empresa:* ${nombre}\n📧 *Email:* ${email}\n📱 *Teléfono:* ${telefono}\n⚙️ *Servicio:* ${servicio}\n\n📋 *Mensaje:*\n${mensaje}\n━━━━━━━━━━━━━━━━━━━━`;
    const targetPhone = IMK_CONTACT.whatsappOfficialRaw || '56944934723';
    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

    setLastWhatsAppUrl(whatsappUrl);
    setSubmitted(true);
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = whatsappUrl;
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-blue-500" />
            <span className="text-blue-400 font-bold text-xs tracking-widest uppercase">
              Atención Inmediata
            </span>
            <span className="w-8 h-[2px] bg-blue-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            Cotizar Servicios
          </h2>
          <p className="text-slate-300 mt-3 text-lg">
            Coordina visitas técnicas a faena, levantamientos dimensionales o cotizaciones de mantenimiento con nuestro equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="bg-slate-950 text-white p-8 sm:p-10 border border-slate-800 rounded-2xl shadow-2xl h-full flex flex-col justify-start">
              <div>
                <div className="mb-8 pb-4 border-b border-slate-800">
                  <h3 className="text-2xl font-black font-display uppercase text-white tracking-wide">
                    Información de Contacto
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-xl shrink-0 text-blue-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-0.5">Dirección Matriz</span>
                      <span className="text-slate-200 text-base">{IMK_CONTACT.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-xl shrink-0 text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-0.5">Teléfono Oficial</span>
                      <span className="text-slate-200 text-base font-mono block">{IMK_CONTACT.phone1}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-xl shrink-0 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-0.5">Correos Corporativos</span>
                      <a href={`mailto:${IMK_CONTACT.email1}`} className="text-slate-200 hover:text-blue-300 font-medium transition-colors block">{IMK_CONTACT.email1}</a>
                      <a href={`mailto:${IMK_CONTACT.email2}`} className="text-slate-200 hover:text-blue-300 font-medium transition-colors block">{IMK_CONTACT.email2}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-xl shrink-0 text-blue-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-0.5">Canal Oficial</span>
                      <a href={IMK_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-blue-300 font-medium transition-colors block">{IMK_CONTACT.instagram}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-950 p-8 sm:p-10 border border-slate-800 shadow-2xl rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700" />

              <h3 className="text-2xl font-black font-display uppercase text-white mb-6 tracking-tight">
                Formulario de Cotización Inmediata
              </h3>
              
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-xl flex gap-3 text-emerald-200">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Mensaje preparado</h4>
                    <p className="text-sm text-emerald-300 mt-1">Se abrió WhatsApp para enviar la solicitud. {lastWhatsAppUrl && <a href={lastWhatsAppUrl} className="underline text-white font-semibold" target="_blank" rel="noreferrer">Reabrir aquí</a>}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-extrabold text-slate-200 mb-1.5">Nombre o Empresa mandante *</label>
                  <input type="text" name="nombreEmpresa" required value={formData.nombreEmpresa} onChange={handleChange} placeholder="Ej. Minera o Empresa Contratista" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:bg-slate-900 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-extrabold text-slate-200 mb-1.5">Correo Electrónico *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="contacto@empresa.cl" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:bg-slate-900 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-extrabold text-slate-200 mb-1.5">Teléfono móvil *</label>
                    <input type="tel" name="telefono" required pattern="[0-9]{9}" maxLength={9} value={formData.telefono} onChange={handleChange} placeholder="912345678" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:bg-slate-900 focus:outline-none focus:border-blue-500 font-mono transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-extrabold text-slate-200 mb-1.5">Servicio Requerido *</label>
                  <select name="servicioInteres" value={formData.servicioInteres} onChange={handleChange} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:bg-slate-900 focus:outline-none focus:border-blue-500 font-medium transition-colors">
                    <option value="Mantenimiento mecánico y estructural" className="bg-slate-900 text-white">Mantenimiento mecánico y estructural</option>
                    <option value="Proyectos de montaje y desmontaje" className="bg-slate-900 text-white">Proyectos de montaje y desmontaje</option>
                    <option value="Desarrollo de obras de ingeniería" className="bg-slate-900 text-white">Desarrollo de obras de ingeniería</option>
                    <option value="Obras civiles y topografía" className="bg-slate-900 text-white">Obras civiles y topografía</option>
                    <option value="Mantenimiento de Emergencia" className="bg-slate-900 text-white">Mantenimiento de Emergencia</option>
                    <option value="Otro" className="bg-slate-900 text-white">Otro Requerimiento</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-extrabold text-slate-200 mb-1.5">Detalle del requerimiento o faena *</label>
                  <textarea name="mensaje" required rows={4} value={formData.mensaje} onChange={handleChange} placeholder="Describe el alcance del trabajo, ubicación de la faena o requerimiento técnico..." className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:bg-slate-900 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all cursor-pointer">
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Enviar por WhatsApp Business Oficial</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
