export type ProjectDivision = 'business' | 'digital' | 'connect' | 'cloud' | 'nexus';

export type Project = {
  slug: string;
  title: string;
  division: ProjectDivision;
  /** Demonstrations are clearly labelled and are not client engagements. */
  status: 'demonstration' | 'in-development' | 'delivered';
  summary: string;
  tags: string[];
};

/**
 * ⚠️ All entries below are DEMONSTRATIONS or internal work-in-progress.
 * Do not present these as client engagements or commercial deployments.
 * Replace or extend this list as real, publishable projects are completed
 * and the client approves publication.
 */
export const projects: Project[] = [
  {
    slug: 'demo-school-suite',
    title: 'School Operations Suite',
    division: 'business',
    status: 'demonstration',
    summary:
      'A demonstration interface for managing students, classes, and fee records in a single system.',
    tags: ['Web app', 'Dashboard', 'Education'],
  },
  {
    slug: 'demo-retail-pos',
    title: 'Retail POS & Inventory',
    division: 'business',
    status: 'demonstration',
    summary:
      'Demonstration point-of-sale with live inventory levels and daily sales reporting.',
    tags: ['POS', 'Inventory', 'Retail'],
  },
  {
    slug: 'demo-sms-console',
    title: 'SMS Console',
    division: 'connect',
    status: 'demonstration',
    summary:
      'A demonstration messaging console for composing, sending, and tracking business SMS.',
    tags: ['SMS', 'API', 'Dashboard'],
  },
  {
    slug: 'demo-corp-site',
    title: 'Corporate Website Template',
    division: 'digital',
    status: 'demonstration',
    summary:
      'A demonstration modern corporate website with CMS-ready content structure and SEO fundamentals.',
    tags: ['Next.js', 'SEO', 'Responsive'],
  },
];