// type SectionTone = 'dark' | 'darkest';

// type SectionProps = {
//   children: React.ReactNode;
//   tone?: SectionTone;
//   id?: string;
//   className?: string;
// };

// const tones: Record<SectionTone, string> = {
//   dark: 'bg-ink-950',
//   darkest: 'bg-black',
// };

// export function Section({ children, tone = 'dark', id, className = '' }: SectionProps) {
//   return (
//     <section
//       id={id}
//       className={`relative border-t border-white/5 py-20 md:py-28 ${tones[tone]} ${className}`}
//     >
//       <div className="mx-auto max-w-container px-6 md:px-8">{children}</div>
//     </section>
//   );
// }

// /* ---------- Heading ---------- */

// type HeadingProps = {
//   eyebrow?: string;
//   title: React.ReactNode;
//   description?: React.ReactNode;
//   align?: 'left' | 'center';
//   className?: string;
// };

// export function SectionHeading({
//   eyebrow,
//   title,
//   description,
//   align = 'left',
//   className = '',
// }: HeadingProps) {
//   const alignment = align === 'center' ? 'text-center mx-auto' : '';
//   return (
//     <div className={`max-w-2xl ${alignment} ${className}`}>
//       {eyebrow && (
//         <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
//           {eyebrow}
//         </p>
//       )}
//       <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-4xl">
//         {title}
//       </h2>
//       {description && (
//         <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }













type SectionTone = 'dark' | 'darkest';

type SectionProps = {
  children: React.ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
};

const tones: Record<SectionTone, string> = {
  dark: 'bg-ink-950',
  darkest: 'bg-black',
};

export function Section({ children, tone = 'dark', id, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative border-t border-white/5 py-14 md:py-16 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-container px-6 md:px-8">{children}</div>
    </section>
  );
}

/* ---------- Heading ---------- */

type HeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: HeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}