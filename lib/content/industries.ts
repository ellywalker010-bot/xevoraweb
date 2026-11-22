export type Industry = {
  slug: string;
  name: string;
  /** Short tagline shown on cards. */
  tagline: string;
  /** Full paragraph for the Industries page. */
  body: string;
};

export const industries: Industry[] = [
  {
    slug: 'education',
    name: 'Education',
    tagline: 'Records, fees, timetables, reporting.',
    body: 'Schools and training institutions run on records, fee tracking, timetables, and reporting. Purpose-built management software removes duplicate entry and gives administrators an accurate, single view of the institution.',
  },
  {
    slug: 'retail',
    name: 'Retail & Commerce',
    tagline: 'Sales, stock, and customer data in one place.',
    body: 'Inventory, sales, and customer records belong in a single system. Point-of-sale and inventory tools reduce stock errors, speed up checkout, and produce reports owners actually use to make decisions.',
  },
  {
    slug: 'sme',
    name: 'Small & Medium Businesses',
    tagline: 'Focused systems without enterprise overhead.',
    body: 'Small and medium businesses need tools that fit their existing workflow. We build focused systems that automate the specific tasks consuming the most time — not large platforms that require a team to operate.',
  },
  {
    slug: 'services',
    name: 'Professional Services',
    tagline: 'Clients, projects, and billing under control.',
    body: 'Firms managing clients, projects, and deliverables benefit from CRM and workflow tools that keep engagements organised, deadlines visible, and billable time properly accounted for.',
  },
  {
    slug: 'fintech',
    name: 'Financial Technology',
    tagline: 'Clean data and reliable tooling.',
    body: 'Traders and finance teams need clean data and dependable tooling. We build dashboards, journals, and workflow software for financial operations — as software, not as a financial service.',
  },
  {
    slug: 'logistics',
    name: 'Logistics & Distribution',
    tagline: 'Tracking, dispatch, and reporting.',
    body: 'Tracking, dispatching, and reporting are the operational backbone of logistics. Digital systems replace spreadsheets and reduce the blind spots that cost money in transit and inventory.',
  },
  {
    slug: 'institutions',
    name: 'Organisations & Institutions',
    tagline: 'Dependable, maintainable, accessible.',
    body: 'Public and non-profit institutions need systems that are dependable and maintainable over years, not marketing showcases. We prioritise clarity, accessibility, and long-term support in this work.',
  },
];