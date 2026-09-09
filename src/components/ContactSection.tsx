import React, { useState } from 'react';
import { IMK_CONTACT } from '../data/imkData';
import { ContactFormData } from '../types';
import { MapPin, Phone, Mail, Globe, Instagram, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

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
    const targetPhone = IMK_CONTACT.phone1Raw;
    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

    setLastWhatsAppUrl(whatsappUrl);
    setSubmitted(true);
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = whatsappUrl;
  };

  return (
    <section id="contacto" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 uppercase">
            Cotizar Servicios
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Complete el formulario para coordinar visitas a faena, cotizaciones o consultoría técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-8 border border-slate-200 rounded-md h-full">
              <h3 className="text-2xl font-bold font-display uppercase text-slate-900 mb-8">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center rounded shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Dirección Matriz</span>
                    <span className="text-slate-600 text-base">{IMK_CONTACT.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center rounded shrink-0">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Teléfonos</span>
                    <span className="text-slate-600 text-base block">{IMK_CONTACT.phone1}</span>
                    <span className="text-slate-600 text-base block">{IMK_CONTACT.phone2}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center rounded shrink-0">
                    <Mail className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Correos</span>
                    <a href={`mailto:${IMK_CONTACT.email1}`} className="text-blue-700 hover:underline block">{IMK_CONTACT.email1}</a>
                    <a href={`mailto:${IMK_CONTACT.email2}`} className="text-blue-700 hover:underline block">{IMK_CONTACT.email2}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center rounded shrink-0">
                    <Instagram className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Instagram</span>
                    <a href="https://instagram.com/imk.serv.industriales" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline block">@imk.serv.industriales</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-md">
              <h3 className="text-2xl font-bold font-display uppercase text-slate-900 mb-6">Formulario de Solicitud</h3>
              
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-emerald-800">Mensaje preparado</h4>
                    <p className="text-sm text-emerald-700 mt-1">Se abrió WhatsApp para enviar la solicitud. {lastWhatsAppUrl && <a href={lastWhatsAppUrl} className="underline" target="_blank" rel="noreferrer">Reabrir aquí</a>}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Nombre o Empresa *</label>
                  <input type="text" name="nombreEmpresa" required value={formData.nombreEmpresa} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Correo Electrónico *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Teléfono (9 dígitos) *</label>
                    <input type="tel" name="telefono" required pattern="[0-9]{9}" maxLength={9} value={formData.telefono} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-mono" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Servicio Requerido</label>
                  <select name="servicioInteres" value={formData.servicioInteres} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                    <option value="Mantenimiento mecánico y estructural">Mantenimiento mecánico y estructural</option>
                    <option value="Proyectos de montaje y desmontaje">Proyectos de montaje y desmontaje</option>
                    <option value="Desarrollo de obras de ingeniería">Desarrollo de obras de ingeniería</option>
                    <option value="Obras civiles y topografía">Obras civiles y topografía</option>
                    <option value="Parada de Planta Urgente">Parada de Planta Urgente</option>
                    <option value="Otro">Otro Requerimiento</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Mensaje *</label>
                  <textarea name="mensaje" required rows={4} value={formData.mensaje} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider rounded transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>Enviar por WhatsApp</span>
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
