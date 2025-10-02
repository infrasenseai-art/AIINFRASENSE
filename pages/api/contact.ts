// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Resend-Client (API-Key kommt aus ENV)
const resend = new Resend(process.env.RESEND_API_KEY!);

// Hilfsfunktion: einfache Validierung
function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name = '', email = '', company = '', message = '' } = (req.body || {}) as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
      // optional: honeypot
      website?: string;
    };

    // Honeypot-Feld (im Frontend verborgen): wenn befüllt => Bot
    if ((req.body?.website as string)?.trim()) {
      return res.status(200).json({ ok: true }); // silently drop
    }

    if (!name.trim() || !isEmail(email) || !message.trim()) {
      return res.status(400).json({
        ok: false,
        error: 'Bitte Name, gültige E-Mail und Nachricht ausfüllen.',
      });
    }

    // Zieladresse(n) aus ENV
    const toRaw = process.env.CONTACT_TO || 'infrasenseai@gmail.com';
    const tos = toRaw.split(',').map((s) => s.trim()).filter(Boolean);

    // Absenderadresse – falls du keine eigene Domain verifiziert hast,
    // nutze die Resend Onboarding-Adresse:
    const from =
      process.env.CONTACT_FROM || 'Infrasenseai <onboarding@resend.dev>';

    const subject = `Neue Anfrage: ${name}${company ? ` (${company})` : ''}`;

    const text = [
      'Neue Website-Anfrage',
      '----------------------',
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Unternehmen: ${company || '-'}`,
      '',
      'Nachricht:',
      message,
    ].join('\n');

    const html = `
      <h2>Neue Website-Anfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Unternehmen:</strong> ${escapeHtml(company || '-')}</p>
      <p><strong>Nachricht:</strong><br>${nl2br(escapeHtml(message))}</p>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to: tos,
      subject,
      // wichtig: so kannst du direkt auf den Absender antworten
      reply_to: [email],
      text,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ ok: false, error: error.message || 'E-Mail Versand fehlgeschlagen' });
    }

    // optional: Bestätigung an Absender schicken
    // await resend.emails.send({
    //   from,
    //   to: [email],
    //   subject: 'Wir haben Ihre Anfrage erhalten',
    //   text: `Hallo ${name},\n\nDanke für Ihre Nachricht. Wir melden uns zeitnah.\n\nViele Grüße\nInfrasenseai`,
    // });

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err: any) {
    console.error('API /contact error:', err);
    return res.status(500).json({ ok: false, error: 'Serverfehler beim Versand' });
  }
}

// Hilfsfunktionen für HTML-Sicherheit und saubere Zeilenumbrüche
function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function nl2br(s: string) {
  return s.replace(/\n/g, '<br/>');
}
