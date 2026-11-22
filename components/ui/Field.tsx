import { forwardRef } from 'react';

const labelClass =
  'mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400';

const baseFieldClass =
  'w-full rounded-lg border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 transition-colors focus:border-brand-orange/60 focus:outline-none focus:ring-2 focus:ring-brand-yellow/30 disabled:opacity-50';

const errorClass =
  'mt-2 text-xs leading-relaxed text-red-400';

/* ---------- Text input ---------- */

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  required?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, required, id, className = '', ...rest },
  ref
) {
  const inputId = id ?? rest.name;
  return (
    <div>
      <label htmlFor={inputId} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-brand-orange">*</span>}
      </label>
      <input
        id={inputId}
        ref={ref}
        className={`${baseFieldClass} ${error ? 'border-red-500/50' : ''} ${className}`}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} className={errorClass}>
          {error}
        </p>
      )}
    </div>
  );
});

/* ---------- Textarea ---------- */

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  required?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, error, required, id, className = '', ...rest }, ref) {
    const inputId = id ?? rest.name;
    return (
      <div>
        <label htmlFor={inputId} className={labelClass}>
          {label}
          {required && <span className="ml-1 text-brand-orange">*</span>}
        </label>
        <textarea
          id={inputId}
          ref={ref}
          rows={6}
          className={`${baseFieldClass} resize-y ${error ? 'border-red-500/50' : ''} ${className}`}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
        {error && (
          <p id={`${inputId}-error`} className={errorClass}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

/* ---------- Select ---------- */

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  required?: boolean;
  options: readonly { value: string; label: string }[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, required, id, options, className = '', ...rest },
  ref
) {
  const inputId = id ?? rest.name;
  return (
    <div>
      <label htmlFor={inputId} className={labelClass}>
        {label}
        {required && <span className="ml-1 text-brand-orange">*</span>}
      </label>
      <select
        id={inputId}
        ref={ref}
        className={`${baseFieldClass} appearance-none bg-[url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23a1a1aa%27 stroke-width=%271.6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27><path d=%27M4 6l4 4 4-4%27/></svg>")] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10 ${error ? 'border-red-500/50' : ''} ${className}`}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-ink-900">
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${inputId}-error`} className={errorClass}>
          {error}
        </p>
      )}
    </div>
  );
});