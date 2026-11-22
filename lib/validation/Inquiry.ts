// import { z } from 'zod';

// export const serviceOptions = [
//   { value: 'business', label: 'XEVORA Business — management software' },
//   { value: 'digital', label: 'XEVORA Digital — websites & apps' },
//   { value: 'connect', label: 'XEVORA Connect — communication systems' },
//   { value: 'cloud', label: 'XEVORA Cloud — hosting & infrastructure' },
//   { value: 'nexus', label: 'XEVORA Nexus — financial technology' },
//   { value: 'other', label: 'Something else' },
// ] as const;

// export const budgetOptions = [
//   { value: '250k-500k', label: 'UGX 250,000 – 500,000' },
//   { value: '500k-1m',   label: 'UGX 500,000 – 1,000,000' },
//   { value: '1m-2m',     label: 'UGX 1,000,000 – 2,000,000' },
//   { value: '2m-5m',     label: 'UGX 2,000,000 – 5,000,000' },
//   { value: 'over-5m',   label: 'Over UGX 5,000,000' },
//   { value: 'not-sure',  label: 'Not sure yet' },
// ] as const;

// export const inquirySchema = z.object({
//   fullName: z
//     .string()
//     .trim()
//     .min(2, 'Please enter your full name.')
//     .max(120, 'Name is too long.'),
//   organisation: z.string().trim().max(160, 'Organisation name is too long.').optional().or(z.literal('')),
//   email: z.string().trim().email('Enter a valid email address.').max(200),
//   phone: z.string().trim().max(40, 'Phone number is too long.').optional().or(z.literal('')),
//   service: z.enum(['business', 'digital', 'connect', 'cloud', 'nexus', 'other'], {
//     errorMap: () => ({ message: 'Please select a service.' }),
//   }),
//   budget: z.enum(
//   ['250k-500k', '500k-1m', '1m-2m', '2m-5m', 'over-5m', 'not-sure'],
//   { errorMap: () => ({ message: 'Please select a budget range.' }) }
// ),
//   description: z
//     .string()
//     .trim()
//     .min(20, 'Please describe your project in a little more detail (at least 20 characters).')
//     .max(4000, 'Description is too long.'),
//   // Honeypot — a real user will never fill this.
//   company_website: z.string().max(0).optional().or(z.literal('')),
// });

// export type InquiryInput = z.infer<typeof inquirySchema>;

// export const inquiryDefaults: InquiryInput = {
//   fullName: '',
//   organisation: '',
//   email: '',
//   phone: '',
//   service: 'business',
//   budget: 'not-sure',
//   description: '',
//   company_website: '',
// };



import { z } from 'zod';

export const serviceOptions = [
  { value: 'business', label: 'XEVORA Business — management software' },
  { value: 'digital', label: 'XEVORA Digital — websites & apps' },
  { value: 'connect', label: 'XEVORA Connect — communication systems' },
  { value: 'cloud', label: 'XEVORA Cloud — hosting & infrastructure' },
  { value: 'nexus', label: 'XEVORA Nexus — financial technology' },
  { value: 'other', label: 'Something else' },
] as const;

export const budgetOptions = [
  { value: '250k-500k', label: 'UGX 250,000 – 500,000' },
  { value: '500k-1m', label: 'UGX 500,000 – 1,000,000' },
  { value: '1m-2m', label: 'UGX 1,000,000 – 2,000,000' },
  { value: '2m-5m', label: 'UGX 2,000,000 – 5,000,000' },
  { value: 'over-5m', label: 'Over UGX 5,000,000' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

export const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(120, 'Name is too long.'),
  organisation: z
    .string()
    .trim()
    .max(160, 'Organisation name is too long.')
    .optional()
    .or(z.literal('')),
  email: z.string().trim().email('Enter a valid email address.').max(200),
  phone: z
    .string()
    .trim()
    .max(40, 'Phone number is too long.')
    .optional()
    .or(z.literal('')),
  service: z.enum(['business', 'digital', 'connect', 'cloud', 'nexus', 'other'], {
    errorMap: () => ({ message: 'Please select a service.' }),
  }),
  budget: z.enum(
    ['250k-500k', '500k-1m', '1m-2m', '2m-5m', 'over-5m', 'not-sure'],
    { errorMap: () => ({ message: 'Please select a budget range.' }) }
  ),
  description: z
    .string()
    .trim()
    .min(20, 'Please describe your project in a little more detail (at least 20 characters).')
    .max(4000, 'Description is too long.'),
  hp_xyz: z.string().max(0).optional().or(z.literal('')),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const inquiryDefaults: InquiryInput = {
  fullName: '',
  organisation: '',
  email: '',
  phone: '',
  service: 'business',
  budget: 'not-sure',
  description: '',
  hp_xyz: '',
};