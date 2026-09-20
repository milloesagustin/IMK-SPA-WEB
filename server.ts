import express from 'express';
import path from 'path';
import multer from 'multer';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

app.use(express.json());

// API route for job application with real file attachment
app.post('/api/postular', upload.single('cv'), async (req, res) => {
  try {
    const { nombreCompleto, telefono, email, experiencia } = req.body;
    const file = req.file;

    if (!nombreCompleto || !telefono || !email) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    if (!file) {
      return res.status(400).json({ error: 'No se recibió ningún archivo de currículum' });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 8px;">Nueva Postulación Laboral - IMK</h2>
        <p style="font-size: 15px; color: #334155;">Se ha recibido una nueva postulación desde el sitio web con el currículum vitae adjunto:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; width: 35%; border-bottom: 1px solid #e2e8f0;">Nombre Completo:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${nombreCompleto}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Teléfono:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${telefono}">${telefono}</a></td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Correo Electrónico:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Archivo CV:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>${file.originalname}</strong> (${(file.size / 1024).toFixed(1)} KB) - <em>Adjunto en este correo</em></td>
          </tr>
        </table>

        <h3 style="color: #1e3a8a; margin-top: 25px; margin-bottom: 8px;">Resumen de Experiencia:</h3>
        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; color: #1e293b; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">
${experiencia || 'Sin resumen ingresado'}
        </div>

        <p style="margin-top: 25px; font-size: 12px; color: #94a3b8; text-align: center;">
          Este correo fue generado desde el portal web de IMK Servicios Industriales SpA. El archivo PDF/Word se encuentra adjunto para descarga directa.
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'IMK Postulaciones <onboarding@resend.dev>',
      to: ['contacto.novabuildstudio@gmail.com'],
      subject: `Nueva Postulación Laboral IMK - ${nombreCompleto}`,
      replyTo: email,
      html: htmlContent,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer,
        },
      ],
    });

    if (error) {
      console.error('Error from Resend:', error);
      return res.status(500).json({ error: error.message || 'Error al despachar el correo con Resend' });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error('Server error in /api/postular:', err);
    return res.status(500).json({ error: err.message || 'Error interno al procesar la postulación' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
