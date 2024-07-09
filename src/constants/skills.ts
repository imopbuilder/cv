import { z } from 'zod';

export const skillsSchema = z.object({
  id: z.number(),
  title: z.string(),
});

export const SKILLS: z.infer<typeof skillsSchema>[] = [
  {
    id: 1,
    title: 'JavaScript',
  },
  {
    id: 2,
    title: 'Typescript',
  },
  {
    id: 3,
    title: 'Java',
  },
  {
    id: 4,
    title: 'Python',
  },
  {
    id: 5,
    title: 'React.js',
  },
  {
    id: 6,
    title: 'Tanstack',
  },
  {
    id: 7,
    title: 'Redux/Zustand',
  },
  {
    id: 8,
    title: 'SASS',
  },
  {
    id: 9,
    title: 'Tailwind CSS',
  },
  {
    id: 10,
    title: 'CSS',
  },
  {
    id: 12,
    title: 'Shadcn UI',
  },
  {
    id: 13,
    title: 'HTML',
  },
  {
    id: 14,
    title: 'Next.js',
  },
  {
    id: 15,
    title: 'Node.js',
  },
  {
    id: 16,
    title: 'Express.js',
  },
  {
    id: 17,
    title: 'MongoDB',
  },
  {
    id: 18,
    title: 'MySQL',
  },
  {
    id: 19,
    title: 'PostgreSQL',
  },
  {
    id: 20,
    title: 'Drizzle ORM',
  },
  {
    id: 21,
    title: 'tRPC',
  },
];
