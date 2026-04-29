import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuración del transportador de email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: process.env.SMTP_USER, // tu email
    pass: process.env.SMTP_PASS, // tu contraseña de aplicación
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Configuración del email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'alejandro.aguilar.higuera@gmail.com', // email donde recibir los mensajes
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
          </div>

          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">

          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            Este mensaje fue enviado desde el formulario de contacto del portfolio de Alejandro Aguilar.
          </p>
        </div>
      `,
      replyTo: email, // Permite responder directamente al remitente
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, intenta de nuevo.' },
      { status: 500 }
    );
  }
}