import { z } from 'zod';

export const educationSchema = z.object({
  id: z.number(),
  college: z.string(),
  branch: z.string(),
  duration: z.string(),
});

export const EDUCATION: z.infer<typeof educationSchema>[] = [
  {
    id: 1,
    college: 'Sri Venkateswara University College of Engineering, Tirupati',
    branch: "Bachelor's Degree in Electrical and Electronics Engineering",
    duration: '2024',
  },
  {
    id: 2,
    college: 'Vignana Bharathi Junior College, Chirala',
    branch: 'XII',
    duration: '2020',
  },
  {
    id: 3,
    college: "St. Ann's School, Chirala",
    branch: 'X (ICSE)',
    duration: '2018',
  },
];
