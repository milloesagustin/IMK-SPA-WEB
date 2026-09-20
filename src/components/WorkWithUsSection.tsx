import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Send, 
  Loader2
} from 'lucide-react';

export const WorkWithUsSection: React.FC = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Calculate word count
  const getWordCount = (text: string): number => {
    const trimmed = text.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  };

  const wordCount = getWordCount(experiencia);
  const isWordCountExceeded = wordCount > 100;

  // File handling
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    setErrorMessage('');
    const validExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = (file.name || '').toLowerCase();
    const isValidExtension = validExtensions.some(ext => fileName.endsWith(ext));
    const mime = (file.type || '').toLowerCase();
    const isValidMime = 
      mime.includes('pdf') || 
      mime.includes('msword') || 
      mime.includes('wordprocessingml') ||
      mime.includes('officedocument');

    if (!isValidExtension && !isValidMime) {
      setErrorMessage('Por favor adjunta un archivo en formato PDF o Word (.pdf, .doc, .docx).');
      return;
    }

    // Max 10MB
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('El archivo excede el tamaño máximo permitido de 10 MB.');
      return;
    }

    setCvFile(file);
  };

  const removeFile = () => {
    setCvFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!nombreCompleto.trim()) {
      setErrorMessage('Por favor ingresa tu nombre completo.');
      return;
    }

    if (!telefono.trim()) {
      setErrorMessage('Por favor ingresa tu número de teléfono.');
      return;
    }

    if (!email.trim()) {
      setErrorMessage('Por favor ingresa tu correo electrónico.');
      return;
    }

    if (!experiencia.trim()) {
      setErrorMessage('Por favor ingresa un breve resumen de tu experiencia.');
      return;
    }

    if (isWordCountExceeded) {
      setErrorMessage(`Tu mensaje tiene ${wordCount} palabras. El máximo permitido son 100 palabras.`);
      return;
    }

    if (!cvFile) {
      setErrorMessage('Por favor adjunta tu Currículum Vitae (CV) en formato PDF o Word.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send directly to our backend server which uses Resend with real binary file attachment
      const formData = new FormData();
      formData.append('nombreCompleto', nombreCompleto.trim());
      formData.append('telefono', telefono.trim());
      formData.append('email', email.trim());
      formData.append('experiencia', experiencia.trim());
      formData.append('cv', cvFile, cvFile.name);

      const response = await fetch('/api/postular', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success || result.data)) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || 'Ocurrió un error al enviar la postulación. Por favor intenta nuevamente.');
      }
    } catch (err) {
      setErrorMessage('Error de conexión al enviar el formulario. Por favor verifica tu conexión a internet o intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setNombreCompleto('');
    setTelefono('');
    setEmail('');
    setExperiencia('');
    setCvFile(null);
    setSubmitted(false);
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="trabaja-con-nosotros" className="py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-700" />
            <span className="text-blue-700 font-bold text-sm tracking-widest uppercase">
              Oportunidades Laborales
            </span>
            <span className="w-8 h-[2px] bg-blue-700" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 uppercase">
            Trabaja con Nosotros
          </h2>
          <p className="text-slate-600 text-lg">
            Súmate al equipo de IMK Servicios Industriales.
          </p>
        </div>

        {/* Application Form Centered */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 sm:p-10 border border-slate-200 rounded-md shadow-sm" id="formulario-trabaja-con-nosotros">
            
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-2xl font-black font-display uppercase text-slate-900 tracking-tight">
                Formulario de Postulación
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Ingresa tus datos y adjunta tu currículum vitae. Se enviará automáticamente al área de Selección de IMK.
              </p>
            </div>

            {/* Submission Success Banner */}
            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-md shadow-sm flex items-center justify-center gap-3 text-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                <h4 className="font-black text-emerald-950 text-xl font-display uppercase tracking-wide">
                  ¡Postulación y CV enviados con éxito!
                </h4>
              </div>
            ) : (
                <>
                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3 text-red-800 text-sm">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Application Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Nombre Completo */}
                    <div>
                      <label htmlFor="postulante-nombre" className="block text-sm font-bold text-slate-800 mb-1.5">
                        Nombre Completo <span className="text-blue-700">*</span>
                      </label>
                      <input
                        id="postulante-nombre"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={nombreCompleto}
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        placeholder="Ej. Juan Carlos Pérez Morales"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-colors disabled:opacity-60"
                      />
                    </div>

                    {/* Teléfono & Correo en dos columnas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="postulante-telefono" className="block text-sm font-bold text-slate-800 mb-1.5">
                          Número de Teléfono <span className="text-blue-700">*</span>
                        </label>
                        <input
                          id="postulante-telefono"
                          type="tel"
                          required
                          disabled={isSubmitting}
                          value={telefono}
                          onChange={(e) => setTelefono(e.target.value)}
                          placeholder="+56 9 1234 5678"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-colors disabled:opacity-60"
                        />
                      </div>

                      <div>
                        <label htmlFor="postulante-correo" className="block text-sm font-bold text-slate-800 mb-1.5">
                          Correo Electrónico <span className="text-blue-700">*</span>
                        </label>
                        <input
                          id="postulante-correo"
                          type="email"
                          required
                          disabled={isSubmitting}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="nombre@ejemplo.cl"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-colors disabled:opacity-60"
                        />
                      </div>
                    </div>

                    {/* Breve mensaje de experiencia (máximo 100 palabras) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="postulante-experiencia" className="block text-sm font-bold text-slate-800">
                          Breve Resumen de tu Experiencia <span className="text-blue-700">*</span>
                        </label>
                        <span 
                          className={`text-xs font-semibold px-2 py-0.5 rounded ${
                            isWordCountExceeded 
                              ? 'bg-red-100 text-red-700 font-bold' 
                              : wordCount > 85 
                              ? 'bg-amber-100 text-amber-800' 
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {wordCount} / 100 palabras
                        </span>
                      </div>
                      
                      <textarea
                        id="postulante-experiencia"
                        required
                        disabled={isSubmitting}
                        rows={4}
                        value={experiencia}
                        onChange={(e) => setExperiencia(e.target.value)}
                        placeholder="Menciona tu especialidad técnica (ej. Mecánico de chancadores, Soldador calificado 6G, Rigger), años de trayectoria y faenas o proyectos en los que te has desempeñado..."
                        className={`w-full px-4 py-3 bg-slate-50 border rounded text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-colors disabled:opacity-60 ${
                          isWordCountExceeded
                            ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                            : 'border-slate-300 focus:border-blue-700 focus:ring-blue-700'
                        }`}
                      />
                      
                      {isWordCountExceeded && (
                        <p className="text-xs text-red-600 mt-1 font-medium">
                          Has superado el límite de 100 palabras. Por favor sintetiza brevemente tu texto.
                        </p>
                      )}
                    </div>

                    {/* Adjuntar y Subir CV */}
                    <div>
                      <span className="block text-sm font-bold text-slate-800 mb-1.5">
                        Adjuntar Currículum Vitae (CV) <span className="text-blue-700">*</span>
                      </span>

                      {!cvFile ? (
                        <label
                          htmlFor="postulante-cv-file"
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                          className={`block p-6 sm:p-8 border-2 border-dashed rounded-md text-center cursor-pointer select-none transition-colors active:bg-blue-50/80 ${
                            dragActive 
                              ? 'border-blue-600 bg-blue-50/50' 
                              : 'border-slate-300 hover:border-blue-600 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            id="postulante-cv-file"
                            name="attachment"
                            type="file"
                            disabled={isSubmitting}
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                          <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-blue-700 mb-3 pointer-events-none">
                            <UploadCloud className="w-6 h-6" />
                          </div>
                          <p className="text-sm font-bold text-slate-800 pointer-events-none">
                            Toca o haz clic para seleccionar tu CV
                          </p>
                          <p className="text-xs text-slate-500 mt-1 pointer-events-none">
                            Formatos soportados: PDF o Word (.pdf, .doc, .docx) • Máx. 10 MB
                          </p>
                        </label>
                      ) : (
                        <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-md flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="w-10 h-10 bg-blue-700 text-white rounded flex items-center justify-center shrink-0">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-sm font-bold text-slate-900 truncate">
                                {cvFile.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {formatFileSize(cvFile.size)} • Listo para enviar
                              </p>
                            </div>
                          </div>

                          {!isSubmitting && (
                            <button
                              type="button"
                              onClick={removeFile}
                              className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-white transition-colors"
                              title="Quitar archivo"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Botón POSTULAR */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        id="btn-postular"
                        disabled={isWordCountExceeded || isSubmitting}
                        className={`w-full flex items-center justify-center gap-2.5 px-8 py-4 font-black uppercase font-display text-base tracking-wider rounded-md shadow-md transition-all ${
                          isWordCountExceeded || isSubmitting
                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                            : 'bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white cursor-pointer'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Enviando Postulación y CV...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>POSTULAR</span>
                          </>
                        )}
                      </button>
                      
                      <p className="text-center text-xs text-slate-500 mt-2.5">
                        Al hacer clic en <strong>POSTULAR</strong>, tu información y el archivo adjunto se enviarán directamente al equipo de Selección.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    );
  };
