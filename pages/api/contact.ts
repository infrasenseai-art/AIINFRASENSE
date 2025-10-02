// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Resend mit API Key aus ENV initialisieren
const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: 'Bitte Name, E-Mail und Nachricht ausfüllen.' });
  }

  // Default FROM & TO aus ENV Variablen lesen
  const from =
    process.env.CONTACT_FROM || 'Infrasenseai <onboarding@resend.dev>';

  const toRaw =
    process.env.CONTACT_TO || 'infrasenseai@gmail.com';

  try {
    // mehrere Empfänger durch Komma möglich
    const to = toRaw
      .split(',')
      .map((s) => s.trim());

    await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `Neue Anfrage von ${name}`,
      text: `Name: ${name}
E-Mail: ${email}
Unternehmen: ${company || '-'}
Nachricht:
${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Resend error', err);
    return res
      .status(500)
      .json({ error: err?.message || 'E-Mail Versand fehlgeschlagen' });
  }
}
