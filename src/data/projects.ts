export interface Project {
  id: string
  nameKey: string
  descriptionKey: string
  tags: string[]
  liveUrl?: string
  docsUrl?: string
  githubUrl?: string
  period: string
}

export const projects: Project[] = [
  {
    id: 'rio-celeste',
    nameKey: 'projects.rioceleste.name',
    descriptionKey: 'projects.rioceleste.description',
    tags: ['React 19', 'TypeScript', 'Vite', 'Nodemailer', 'SEO', 'JSON-LD'],
    liveUrl: 'https://riocelestewildlifetours.com/',
    period: 'Mar 2026',
  },
  {
    id: 'jm-ride',
    nameKey: 'projects.jmride.name',
    descriptionKey: 'projects.jmride.description',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'PostgreSQL', 'Drizzle ORM'],
    liveUrl: 'https://jm-ride.vercel.app/',
    period: 'Jan–Mar 2026',
  },
  {
    id: 'carlos-guide',
    nameKey: 'projects.carlosguide.name',
    descriptionKey: 'projects.carlosguide.description',
    tags: ['React 18', 'Vite', 'BrowserRouter', 'SEO'],
    liveUrl: 'https://www.carlos-guidecr.com/',
    period: 'Jan–Mar 2026',
  },
  {
    id: 'leona-waterfall',
    nameKey: 'projects.leona.name',
    descriptionKey: 'projects.leona.description',
    tags: ['Nuxt 4', 'SSR', 'Nitro', 'PostgreSQL', 'Prisma ORM'],
    liveUrl: 'https://leona-waterfall-page.vercel.app/',
    period: 'Nov 2025–Mar 2026',
  },
  {
    id: 'scrcr',
    nameKey: 'projects.scrcr.name',
    descriptionKey: 'projects.scrcr.description',
    tags: ['Fullstack', 'Scrum', 'Azure DevOps', 'Vitest', 'RBAC'],
    liveUrl: 'https://scrcr.vercel.app/',
    period: 'Feb 2025–Jun 2026',
  },
  {
    id: 'moonriver',
    nameKey: 'projects.moonriver.name',
    descriptionKey: 'projects.moonriver.description',
    tags: ['React', 'Vite', 'Responsive Design', 'SPA'],
    liveUrl: 'https://moonrivertravel.com/',
    period: 'Jun–Nov 2025',
  },
  {
    id: 'brewcode',
    nameKey: 'projects.brewcode.name',
    descriptionKey: 'projects.brewcode.description',
    tags: ['Nuxt 3', 'Vue 3', 'SSG', 'Supabase', 'Drizzle ORM', 'Groq AI', 'PWA', 'SEO'],
    liveUrl: 'https://brew-code.vercel.app/',
    period: 'Mar–Jun 2026',
  },
  {
    id: 'sipauna',
    nameKey: 'projects.sipauna.name',
    descriptionKey: 'projects.sipauna.description',
    tags: ['Nuxt 4', 'Vue 3', 'GraphQL', 'Supabase', 'Pinia', 'PWA'],
    liveUrl: 'https://sipauna.vercel.app/',
    docsUrl: 'https://deepwiki.com/Dmong04/sipauna-webpage',
    period: '2025–2026',
  },
]
