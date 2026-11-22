export type DivisionStatus = 'live' | 'in-development' | 'concept';

export type DivisionService = {
  name: string;
  status: DivisionStatus;
  note?: string;
};

export type Division = {
  slug: 'business' | 'digital' | 'connect' | 'cloud' | 'nexus';
  name: string;
  shortName: string;
  category: string;
  /** One-sentence summary for cards. */
  summary: string;
  /** 2–3 sentence purpose paragraph for the division page. */
  purpose: string;
  /** 3–5 sentences, one per paragraph, for the division page intro. */
  intro: string[];
  services: DivisionService[];
  cta: { label: string; href: string };
  /** Optional compliance or clarification note shown on the division page. */
  complianceNote?: string;
};

export const divisions: Division[] = [
  {
    slug: 'business',
    name: 'XEVORA Business',
    shortName: 'Business',
    category: 'Business Management Software',
    summary:
      'Software that replaces spreadsheets and manual processes with systems built for how your business actually runs.',
    purpose:
      'We build software that removes repetitive manual work and gives operators a single, accurate view of their business.',
    intro: [
      'Most businesses do not have a software problem — they have a process problem that software can solve. The goal is not to add another tool, but to replace the fragmented mix of spreadsheets, paper, and disconnected apps with one system that fits how you already work.',
      'XEVORA Business designs and builds management systems for schools, shops, clinics, and service firms. Every system starts with your workflow, not a template.',
    ],
    services: [
      { name: 'School management systems', status: 'in-development' },
      { name: 'Inventory management', status: 'in-development' },
      { name: 'Point-of-sale systems', status: 'in-development' },
      { name: 'Customer relationship management', status: 'concept' },
      { name: 'Custom web applications', status: 'live' },
      { name: 'Reporting & analytics dashboards', status: 'in-development' },
      { name: 'Business process automation', status: 'in-development' },
    ],
    cta: { label: 'Discuss a business system', href: '/contact?service=business' },
  },
  {
    slug: 'digital',
    name: 'XEVORA Digital',
    shortName: 'Digital',
    category: 'Web & Application Development',
    summary:
      'Websites, web applications, and mobile products that represent your business properly and perform reliably.',
    purpose:
      'We design and build the digital presence and products your business runs on.',
    intro: [
      'A website is not a brochure. It is the first interaction most customers have with your business, and a web application is often the product itself. Both deserve to be treated as engineering work, not decoration.',
      'XEVORA Digital covers the full lifecycle: information architecture, interface design, development, deployment, and ongoing maintenance.',
    ],
    services: [
      { name: 'Business websites', status: 'live' },
      { name: 'E-commerce platforms', status: 'live' },
      { name: 'Web applications', status: 'live' },
      { name: 'Android applications', status: 'in-development' },
      { name: 'iOS applications', status: 'concept' },
      { name: 'UI/UX design', status: 'live' },
      { name: 'Ongoing website maintenance', status: 'live' },
      { name: 'API integration', status: 'live' },
      { name: 'Custom software development', status: 'live' },
    ],
    cta: { label: 'Start a digital project', href: '/contact?service=digital' },
  },
  {
    slug: 'connect',
    name: 'XEVORA Connect',
    shortName: 'Connect',
    category: 'Business Communication Systems',
    summary:
      'Messaging, alerts, and communication workflows that keep customers and internal teams reliably in sync.',
    purpose:
      'We build communication tools that help businesses reach customers reliably and manage conversations in one place.',
    intro: [
      'Business communication breaks down quietly. Messages go out from personal phones, delivery is unverifiable, and no one can answer "did the customer actually receive it?" two weeks later.',
      'XEVORA Connect is focused on fixing that: structured messaging, delivery-aware notifications, and dashboards that show what was sent, when, and to whom.',
    ],
    services: [
      { name: 'SMS API integration', status: 'in-development' },
      { name: 'Business messaging systems', status: 'concept' },
      { name: 'Notification systems', status: 'in-development' },
      { name: 'Automated business alerts', status: 'concept' },
      { name: 'Customer communication dashboards', status: 'concept' },
    ],
    cta: { label: 'Talk about communication systems', href: '/contact?service=connect' },
  },
  {
    slug: 'cloud',
    name: 'XEVORA Cloud',
    shortName: 'Cloud',
    category: 'Hosting & Digital Infrastructure',
    summary:
      'Hosting, deployment, DNS, and infrastructure management that keeps your systems online, fast, and recoverable.',
    purpose:
      'We provide and manage the infrastructure layer so your applications stay online and recoverable.',
    intro: [
      'Infrastructure is the part of technology that is invisible until it fails. Websites go down, servers run out of disk, backups turn out to be empty, and nobody remembers the DNS password.',
      'XEVORA Cloud exists to make that layer boring: proper hosting, monitored servers, versioned backups, and someone accountable when something breaks.',
    ],
    services: [
      { name: 'Website hosting', status: 'live' },
      { name: 'VPS deployment & management', status: 'live' },
      { name: 'Domain & DNS configuration', status: 'live' },
      { name: 'Application deployment', status: 'live' },
      { name: 'Server administration', status: 'live' },
      { name: 'Database hosting & management', status: 'in-development' },
      { name: 'Backup planning & verification', status: 'live' },
      { name: 'Infrastructure monitoring', status: 'in-development' },
    ],
    cta: { label: 'Plan your infrastructure', href: '/contact?service=cloud' },
  },
  {
    slug: 'nexus',
    name: 'XEVORA Nexus',
    shortName: 'Nexus',
    category: 'Trading & Financial Technology',
    summary:
      'Software for trading workflows, financial data, and market analysis — developed as tools, not financial services.',
    purpose:
      'We develop software for trading workflows and financial data. We do not provide brokerage, custody, or investment advice.',
    intro: [
      'Traders and finance teams rely on tools that either do not exist, cost a fortune, or force their workflow into someone else’s assumptions. XEVORA Nexus is our division for building software around that workflow.',
      'Everything produced under Nexus is software — dashboards, journals, data interfaces, and automation tools. It is not a financial service.',
    ],
    services: [
      { name: 'Trading journal application', status: 'in-development' },
      { name: 'Financial data dashboards', status: 'concept' },
      { name: 'Market analysis tools', status: 'concept' },
      { name: 'Portfolio tracking interfaces', status: 'concept' },
      { name: 'Financial workflow automation', status: 'concept' },
    ],
    cta: { label: 'Discuss a financial tool', href: '/contact?service=nexus' },
    complianceNote:
      'XEVORA Nexus develops software only. XEVORA Technologies is not a licensed broker, dealer, exchange, or investment adviser, and does not execute trades or hold client funds.',
  },
];

export const divisionsBySlug = Object.fromEntries(
  divisions.map((d) => [d.slug, d])
) as Record<Division['slug'], Division>;