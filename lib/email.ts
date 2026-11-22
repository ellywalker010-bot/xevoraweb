import { Resend } from 'resend';
import type { Inquiry } from '@prisma/client';

const apiKey = process.env.RESEND_API_KEY;   // no fill — reads from .env.local
const to = process.env.INQUIRY_TO_EMAIL;     // no fill — reads from .env.local
const from = process.env.INQUIRY_FROM_EMAIL; // no fill — reads from .env.local

const resend = apiKey ? new Resend(apiKey) : null;

export async function sendInquiryEmail(inquiry: Inquiry) {
  if (!resend || !to || !from) {
    console.warn('[email] Resend not configured — inquiry saved to DB only.');
    return;
  }

  await resend.emails.send({
    from,
    to,
    replyTo: inquiry.email,
    subject: `New project inquiry — ${inquiry.fullName}`,
    text:
      `Name: ${inquiry.fullName}\n` +
      `Organisation: ${inquiry.organisation ?? '—'}\n` +
      `Email: ${inquiry.email}\n` +
      `Phone: ${inquiry.phone ?? '—'}\n` +
      `Service: ${inquiry.service}\n` +
      `Budget: ${inquiry.budget}\n\n` +
      `${inquiry.description}\n`,
  });
}