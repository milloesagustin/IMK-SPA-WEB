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
    <section id="trabaja-con-nosotros" className="py-24 bg-slate-950 border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500" />
            <span className="text-blue-400 font-bold text-xs tracking-widest uppercase">
              Oportunidades Laborales
            </span>
            <span className="w-8 h-[2px] bg-blue-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            Trabaja con Nosotros
          </h2>
          <p className="text-slate-300 text-lg">
            Súmate a nuestro equipo de técnicos, soldadores y especialistas en mantenimiento minero.
          </p>
        </div>

        {/* Application Form Centered */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900 p-8 sm:p-10 border border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden" id="formulario-trabaja-con-nosotros">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-sky-500 to-blue-800" />
            
            <div className="mb-6 pb-4 border-b border-slate-800">
              <h3 className="text-2xl font-black font-display uppercase text-white tracking-tight">
                Formulario de Postulación
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Ingresa tus datos y adjunta tu currículum vitae. Se enviará automáticamente al área de Selección de IMK.
              </p>
            </div>

            {/* Submission Success Banner */}
            {submitted ? (
              <div className="p-6 bg-emerald-950/80 border border-emerald-500/50 rounded-xl shadow-lg flex items-center justify-center gap-3 text-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
                <h4 className="font-black text-emerald-200 text-xl font-display uppercase tracking-wide">
                  ¡Postulación y CV enviados con éxito!
                </h4>
              </div>
            ) : (
                <>
                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-950/80 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-200 text-sm">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Application Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Nombre Completo */}
                    <div>
                      <label htmlFor="postulante-nombre" className="block text-sm font-extrabold text-slate-200 mb-1.5">
                        Nombre Completo <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="postulante-nombre"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={nombreCompleto}
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        placeholder="Ej. Juan Carlos Pérez Morales"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:bg-slate-950 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
                      />
                    </div>

                    {/* Teléfono & Correo en dos columnas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="postulante-telefono" className="block text-sm font-extrabold text-slate-200 mb-1.5">
                          Número de Teléfono <span className="text-blue-400">*</span>
                        </label>
                        <input
                          id="postulante-telefono"
                          type="tel"
                          required
                          disabled={isSubmitting}
                          value={telefono}
                          onChange={(e) => setTelefono(e.target.value)}
                          placeholder="+56 9 1234 5678"
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:bg-slate-950 focus:outline-none focus:border-blue-500 font-mono transition-colors disabled:opacity-60"
                        />
                      </div>

                      <div>
                        <label htmlFor="postulante-correo" className="block text-sm font-extrabold text-slate-200 mb-1.5">
                          Correo Electrónico <span className="text-blue-400">*</span>
                        </label>
                        <input
                          id="postulante-correo"
                          type="email"
                          required
                          disabled={isSubmitting}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="nombre@ejemplo.cl"
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:bg-slate-950 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-60"
                        />
                      </div>
                    </div>

                    {/* Breve mensaje de experiencia (máximo 100 palabras) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="postulante-experiencia" className="block text-sm font-bold text-slate-200">
                          Breve Resumen de tu Experiencia <span className="text-blue-400">*</span>
                        </label>
                        <span 
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                            isWordCountExceeded 
                              ? 'bg-red-950 text-red-400 font-bold border border-red-800' 
                              : wordCount > 85 
                              ? 'bg-amber-950 text-amber-300 border border-amber-800' 
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
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
                        className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-white placeholder:text-slate-500 focus:bg-slate-950 focus:outline-none transition-colors disabled:opacity-60 ${
                          isWordCountExceeded
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-slate-700 focus:border-blue-500'
                        }`}
                      />
                      
                      {isWordCountExceeded && (
                        <p className="text-xs text-red-400 mt-1 font-medium">
                          Has superado el límite de 100 palabras. Por favor sintetiza brevemente tu texto.
                        </p>
                      )}
                    </div>

                    {/* Adjuntar y Subir CV */}
                    <div>
                      <span className="block text-sm font-extrabold text-slate-200 mb-1.5">
                        Adjuntar Currículum Vitae (CV) <span className="text-blue-400">*</span>
                      </span>

                      {!cvFile ? (
                        <label
                          htmlFor="postulante-cv-file"
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                          className={`block p-6 sm:p-8 border-2 border-dashed rounded-xl text-center cursor-pointer select-none transition-all active:bg-blue-950/40 ${
                            dragActive 
                              ? 'border-blue-500 bg-blue-950/60 shadow-inner' 
                              : 'border-slate-700 bg-slate-950/70 hover:border-blue-500 hover:bg-slate-950 shadow-xs'
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
                          <div className="w-12 h-12 mx-auto bg-blue-950/80 border border-blue-500/40 rounded-full flex items-center justify-center text-blue-400 mb-3 pointer-events-none">
                            <UploadCloud className="w-6 h-6" />
                          </div>
                          <p className="text-sm font-extrabold text-white pointer-events-none">
                            Toca o haz clic para seleccionar tu CV
                          </p>
                          <p className="text-xs font-medium text-slate-400 mt-1 pointer-events-none">
                            Formatos soportados: PDF o Word (.pdf, .doc, .docx) • Máx. 10 MB
                          </p>
                        </label>
                      ) : (
                        <div className="p-4 bg-slate-950 border border-blue-500/50 rounded-xl flex items-center justify-between gap-4 shadow-md">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center shrink-0">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-sm font-bold text-white truncate">
                                {cvFile.name}
                              </p>
                              <p className="text-xs text-blue-400 font-semibold">
                                {formatFileSize(cvFile.size)} • Listo para enviar
                              </p>
                            </div>
                          </div>

                          {!isSubmitting && (
                            <button
                              type="button"
                              onClick={removeFile}
                              className="p-1.5 text-slate-400 hover:text-red-400 rounded-md hover:bg-slate-800 transition-colors"
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
                        className={`w-full flex items-center justify-center gap-2.5 px-8 py-4 font-black uppercase font-display text-base tracking-wider rounded-xl shadow-lg transition-all ${
                          isWordCountExceeded || isSubmitting
                            ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                            : 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white cursor-pointer hover:shadow-blue-500/25'
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
                      
                      <p className="text-center text-xs text-slate-400 mt-2.5">
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
