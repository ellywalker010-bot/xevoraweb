// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/Button';
// import { Input, Textarea, Select } from '@/components/ui/Field';
// import {
//   inquirySchema,
//   inquiryDefaults,
//   serviceOptions,
//   budgetOptions,
//   type InquiryInput,
// } from '@/lib/validation/inquiry';

// type FieldErrors = Partial<Record<keyof InquiryInput, string>>;
// type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

// export function InquiryForm() {
//   const [values, setValues] = useState<InquiryInput>(inquiryDefaults);
//   const [errors, setErrors] = useState<FieldErrors>({});
//   const [state, setState] = useState<SubmitState>('idle');
//   const [serverMessage, setServerMessage] = useState<string>('');

//   function update<K extends keyof InquiryInput>(key: K, value: InquiryInput[K]) {
//     setValues((v) => ({ ...v, [key]: value }));
//     if (errors[key]) {
//       setErrors((e) => ({ ...e, [key]: undefined }));
//     }
//   }

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (state === 'submitting') return;

//     // Client-side validation
//     const parsed = inquirySchema.safeParse(values);
//     if (!parsed.success) {
//       const fieldErrors: FieldErrors = {};
//       for (const issue of parsed.error.issues) {
//         const key = issue.path[0] as keyof InquiryInput;
//         if (!fieldErrors[key]) fieldErrors[key] = issue.message;
//       }
//       setErrors(fieldErrors);
//       setState('idle');
//       return;
//     }

//     setErrors({});
//     setState('submitting');
//     setServerMessage('');

//     try {
//       const res = await fetch('/api/inquiries', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(parsed.data),
//       });

//       const data = await res.json().catch(() => ({}));

//       if (!res.ok) {
//         if (res.status === 422 && data?.fields) {
//           setErrors(data.fields as FieldErrors);
//         }
//         setServerMessage(data?.error ?? 'Something went wrong. Please try again.');
//         setState('error');
//         return;
//       }

//       setState('success');
//       setValues(inquiryDefaults);
//     } catch {
//       setServerMessage(
//         'We could not reach the server. Please check your connection and try again.'
//       );
//       setState('error');
//     }
//   }

//   if (state === 'success') {
//     return (
//       <div
//         role="status"
//         aria-live="polite"
//         className="rounded-2xl border border-brand-orange/30 bg-brand-orange/[0.06] p-8 md:p-10"
//       >
//         <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-50 md:text-2xl">
//           Thank you — your inquiry has been received.
//         </h3>
//         <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-300">
//           We will review what you have shared and respond within a few business days.
//           If your inquiry is time-sensitive, please email us directly.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={onSubmit} noValidate className="space-y-6">
//       {/* Honeypot field — visually hidden, real users won't fill it */}
//       <div className="sr-only" aria-hidden>
//         <label htmlFor="company_website">Do not fill this in</label>
//         <input
//           id="company_website"
//           name="company_website"
//           type="text"
//           tabIndex={-1}
//           autoComplete="off"
//           value={values.company_website ?? ''}
//           onChange={(e) => update('company_website', e.target.value)}
//         />
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2">
//         <Input
//           label="Full name"
//           name="fullName"
//           required
//           autoComplete="name"
//           value={values.fullName}
//           onChange={(e) => update('fullName', e.target.value)}
//           error={errors.fullName}
//         />
//         <Input
//           label="Business or organisation"
//           name="organisation"
//           autoComplete="organization"
//           value={values.organisation ?? ''}
//           onChange={(e) => update('organisation', e.target.value)}
//           error={errors.organisation}
//         />
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2">
//         <Input
//           label="Email address"
//           name="email"
//           type="email"
//           required
//           autoComplete="email"
//           value={values.email}
//           onChange={(e) => update('email', e.target.value)}
//           error={errors.email}
//         />
//         <Input
//           label="Phone number"
//           name="phone"
//           type="tel"
//           autoComplete="tel"
//           value={values.phone ?? ''}
//           onChange={(e) => update('phone', e.target.value)}
//           error={errors.phone}
//         />
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2">
//         <Select
//           label="Service of interest"
//           name="service"
//           required
//           options={serviceOptions}
//           value={values.service}
//           onChange={(e) => update('service', e.target.value as InquiryInput['service'])}
//           error={errors.service}
//         />
//         <Select
//           label="Estimated budget"
//           name="budget"
//           required
//           options={budgetOptions}
//           value={values.budget}
//           onChange={(e) => update('budget', e.target.value as InquiryInput['budget'])}
//           error={errors.budget}
//         />
//       </div>

//       <Textarea
//         label="Project description"
//         name="description"
//         required
//         placeholder="Describe the business problem, the workflow you want to improve, and any constraints we should know about."
//         value={values.description}
//         onChange={(e) => update('description', e.target.value)}
//         error={errors.description}
//       />

//       {state === 'error' && serverMessage && (
//         <div
//           role="alert"
//           className="rounded-lg border border-red-500/30 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300"
//         >
//           {serverMessage}
//         </div>
//       )}

//       <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
//         <p className="text-xs leading-relaxed text-neutral-500 sm:max-w-sm">
//           By submitting, you agree we may contact you about your inquiry. We do not
//           share your information with third parties.
//         </p>
//         <Button
//           type="submit"
//           variant="primary"
//           size="lg"
//           disabled={state === 'submitting'}
//           className="sm:min-w-[180px]"
//         >
//           {state === 'submitting' ? 'Sending…' : 'Send inquiry'}
//         </Button>
//       </div>
//     </form>
//   );
// }








'use client';

import { useEffect, useRef, useState } from 'react';
import {
  inquirySchema,
  inquiryDefaults,
  serviceOptions,
  budgetOptions,
  type InquiryInput,
} from '@/lib/validation/inquiry';

type FieldErrors = Partial<Record<keyof InquiryInput, string>>;
type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function InquiryForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<SubmitState>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const onSubmit = async (e: Event) => {
      e.preventDefault();

      const fd = new FormData(form);
      const raw: InquiryInput = {
        fullName: String(fd.get('fullName') ?? '').trim(),
        organisation: String(fd.get('organisation') ?? '').trim(),
        email: String(fd.get('email') ?? '').trim(),
        phone: String(fd.get('phone') ?? '').trim(),
        service: String(fd.get('service') ?? '') as InquiryInput['service'],
        budget: String(fd.get('budget') ?? '') as InquiryInput['budget'],
        description: String(fd.get('description') ?? '').trim(),
        hp_xyz: String(fd.get('hp_xyz') ?? ''),
      };

      const parsed = inquirySchema.safeParse(raw);
      if (!parsed.success) {
        const fieldErrors: FieldErrors = {};
        for (const issue of parsed.error.issues) {
          const key = issue.path[0] as keyof InquiryInput;
          if (!fieldErrors[key]) fieldErrors[key] = issue.message;
        }
        setErrors(fieldErrors);
        setServerMessage('Please fix the highlighted fields.');
        setState('error');
        return;
      }

      setErrors({});
      setServerMessage('');
      setState('submitting');

      try {
        const res = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(parsed.data),
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          if (res.status === 422 && data?.fields) {
            setErrors(data.fields as FieldErrors);
          }
          setServerMessage(data?.error ?? 'Something went wrong. Please try again.');
          setState('error');
          return;
        }

        setState('success');
        form.reset();
      } catch {
        setServerMessage(
          'We could not reach the server. Please check your connection and try again.'
        );
        setState('error');
      }
    };

    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, []);

  if (state === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-brand-orange/30 bg-brand-orange/[0.06] p-8 md:p-10"
      >
        <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-50 md:text-2xl">
          Thank you — your inquiry has been received.
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-300">
          We will review what you have shared and respond within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate className="space-y-6">
      <div className="sr-only" aria-hidden>
        <label htmlFor="hp_xyz">Leave empty</label>
        <input
          id="hp_xyz"
          name="hp_xyz"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" required error={errors.fullName}>
          <input
            type="text"
            name="fullName"
            autoComplete="name"
            required
            defaultValue={inquiryDefaults.fullName}
            className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-brand-orange"
          />
        </Field>
        <Field label="Business or organisation" error={errors.organisation}>
          <input
            type="text"
            name="organisation"
            autoComplete="organization"
            defaultValue={inquiryDefaults.organisation ?? ''}
            className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-brand-orange"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email address" required error={errors.email}>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            defaultValue={inquiryDefaults.email}
            className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-brand-orange"
          />
        </Field>
        <Field label="Phone number" error={errors.phone}>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            defaultValue={inquiryDefaults.phone ?? ''}
            className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-brand-orange"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Service of interest" required error={errors.service}>
          <select
            name="service"
            required
            defaultValue={inquiryDefaults.service}
            className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-brand-orange"
          >
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimated budget" required error={errors.budget}>
          <select
            name="budget"
            required
            defaultValue={inquiryDefaults.budget}
            className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-brand-orange"
          >
            {budgetOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project description" required error={errors.description}>
        <textarea
          name="description"
          rows={6}
          required
          defaultValue={inquiryDefaults.description}
          placeholder="Describe the business problem, the workflow you want to improve, and any constraints we should know about."
          className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-brand-orange"
        />
      </Field>

      {state === 'error' && serverMessage && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
          {serverMessage}
        </div>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-neutral-500 sm:max-w-sm">
          By submitting, you agree we may contact you about your inquiry. We do not
          share your information with third parties.
        </p>
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-orange-400 disabled:opacity-50 sm:min-w-[180px]"
        >
          {state === 'submitting' ? 'Sending…' : 'Send inquiry'}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
        {label}
        {required && <span className="ml-1 text-brand-orange">*</span>}
      </span>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}