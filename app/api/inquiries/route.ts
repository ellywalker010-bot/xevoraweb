// import { NextResponse } from 'next/server';
// import { createHash } from 'crypto';
// import { prisma } from '@/lib/db';
// import { inquirySchema } from '@/lib/validation/inquiry';
// import { sendInquiryEmail } from '@/lib/email';

// // Naive in-memory rate limiter — fine for a marketing site.
// const hits = new Map<string, { count: number; reset: number }>();
// const WINDOW_MS = 60_000;
// const MAX = 5;

// function rateLimit(ip: string) {
//   const now = Date.now();
//   const entry = hits.get(ip);
//   if (!entry || entry.reset < now) {
//     hits.set(ip, { count: 1, reset: now + WINDOW_MS });
//     return true;
//   }
//   if (entry.count >= MAX) return false;
//   entry.count++;
//   return true;
// }

// export async function POST(req: Request) {
//   const ip =
//     req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

//   if (!rateLimit(ip)) {
//     return NextResponse.json(
//       { ok: false, error: 'Too many requests. Please try again shortly.' },
//       { status: 429 }
//     );
//   }

//   let body: unknown;
//   try {
//     body = await req.json();
//   } catch {
//     return NextResponse.json(
//       { ok: false, error: 'Invalid request.' },
//       { status: 400 }
//     );
//   }

//   const parsed = inquirySchema.safeParse(body);
//   if (!parsed.success) {
//     return NextResponse.json(
//       {
//         ok: false,
//         error: 'Validation failed.',
//         fields: parsed.error.flatten().fieldErrors,
//       },
//       { status: 422 }
//     );
//   }

//   const data = parsed.data;

//   // Honeypot: if this optional field is filled, silently pretend success.
//   if ('company_website' in data && data.company_website) {
//     return NextResponse.json({ ok: true });
//   }

//   const ipHash = createHash('sha256')
//     .update(ip + (process.env.IP_HASH_SALT ?? ''))
//     .digest('hex');

//   try {
//     const saved = await prisma.inquiry.create({
//       data: {
//         fullName: data.fullName,
//         organisation: data.organisation || null,
//         email: data.email,
//         phone: data.phone || null,
//         service: data.service,
//         budget: data.budget,
//         description: data.description,
//         ipHash,
//         userAgent: req.headers.get('user-agent') ?? null,
//       },
//     });

//     // Best-effort email. If it fails, we still have the DB record.
//     sendInquiryEmail(saved).catch((err) => console.error('[email]', err));

//     return NextResponse.json({ ok: true, id: saved.id });
//   } catch (err) {
//     console.error('[inquiries]', err);
//     return NextResponse.json(
//       {
//         ok: false,
//         error:
//           'We could not save your inquiry. Please email us directly at support@xevoratechnologies.com.',
//       },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from 'next/server';
import { createHash } from 'crypto';
import { prisma } from '@/lib/db';
import { inquirySchema } from '@/lib/validation/inquiry';
import { sendInquiryEmail } from '@/lib/email';

const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again shortly.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Validation failed.',
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot — if filled, pretend success.
  if (data.hp_xyz) {
    return NextResponse.json({ ok: true });
  }

  const ipHash = createHash('sha256')
    .update(ip + (process.env.IP_HASH_SALT ?? ''))
    .digest('hex');

  try {
    const saved = await prisma.inquiry.create({
      data: {
        fullName: data.fullName,
        organisation: data.organisation || null,
        email: data.email,
        phone: data.phone || null,
        service: data.service,
        budget: data.budget,
        description: data.description,
        ipHash,
        userAgent: req.headers.get('user-agent') ?? null,
      },
    });

    sendInquiryEmail(saved).catch((err) => console.error('[email]', err));

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (err) {
    console.error('[inquiries]', err);
    return NextResponse.json(
      {
        ok: false,
        error:
          'We could not save your inquiry. Please email us directly at support@xevoratechnologies.com.',
      },
      { status: 500 }
    );
  }
}