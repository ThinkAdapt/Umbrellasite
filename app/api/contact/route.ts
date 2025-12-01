import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company, size, message } = body || {};

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <h2>New Contact</h2>
      <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
      <p><strong>Email:</strong> ${email || ''}</p>
      <p><strong>Phone:</strong> ${phone || ''}</p>
      <p><strong>Company:</strong> ${company || ''}</p>
      <p><strong>Size:</strong> ${size || ''}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || '').replace(/\n/g, '<br/>')}</p>
    `;

    await transport.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: 'zeyneptekin1682@gmail.com',
      subject: 'New contact from TeamSense site',
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact error', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

