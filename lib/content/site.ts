// import { divisions } from './divisions';

// export const site = {
//   name: 'XEVORA Technologies',
//   shortName: 'XEVORA',
//   tagline: 'Simplifying Business Solutions Through Technology.',
//   url: 'https://xevoratechnologies.com',

//   // ⚠️ PLACEHOLDERS — replace with real values before launch.
//   contact: {
//     email: 'support@xevoratechnologies.com', // TODO: replace with real address
//     phone: '+256 747 979 158',
//     address: 'Kampala-Uganda',
//   },

//   social: {
//     linkedin: '',
//     x: '',
//     github: '',
//     instagram: '',
//   },
// } as const;

// export const primaryNav = [
//   { label: 'Home', href: '/' },
//   { label: 'About Us', href: '/about' },
//   { label: 'Solutions', href: '/solutions' },
//   { label: 'Products', href: '/products' },
//   { label: 'Industries', href: '/industries' },
//   { label: 'Contact', href: '/contact' },
// ] as const;

// export const footerNav = {
//   company: [
//     { label: 'About Us', href: '/about' },
//     { label: 'Industries', href: '/industries' },
//     { label: 'Products', href: '/products' },
//     { label: 'Contact', href: '/contact' },
//   ],
//   solutions: divisions.map((d) => ({
//     label: d.name,
//     href: `/solutions/${d.slug}`,
//   })),
//   legal: [
//     { label: 'Privacy Policy', href: '/privacy' },
//     { label: 'Terms of Service', href: '/terms' },
//   ],
// } as const;






import { divisions } from './divisions';

export const site = {
  name: 'XEVORA Technologies',
  shortName: 'XEVORA',
  tagline: 'Simplifying Business Solutions Through Technology.',
  url: 'https://xevoratechnologies.com',

  contact: {
    email: 'support@xevoratechnologies.com',
    phone: '+256 747 979 158',
    address: 'Kampala-Uganda',
  },

  social: {
    linkedin: '',
    x: '',
    github: '',
    instagram: '',
  },
};

export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNav = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ],
  solutions: divisions.map((d) => ({
    label: d.name,
    href: `/solutions/${d.slug}`,
  })),
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;