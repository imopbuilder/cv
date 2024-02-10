import { Github, LinkedIn, Twitter } from '@/components/global/icons';
import { Mail, Phone } from 'lucide-react';

export const RESUME = {
  intro: {
    section: 'intro',
    name: 'Rahul Palamarthi',
    description: 'Self-taught developer, building full stack apps and contributing to open source',
    location: {
      value: 'Tirupati, India, IST',
      href: 'https://www.google.com/maps/place/Tirupati',
    },
    profilePic: {
      src: 'profile-pic.jpg',
      alt: 'profile-pic',
    },
    socialLinks: [
      {
        icon: Mail,
        label: 'gmail',
        href: 'mailto:rahulpalamarthi@gmail.com',
      },
      {
        icon: Phone,
        label: 'phone',
        href: 'tel:+919515989271',
      },
      {
        icon: Github,
        label: 'github',
        href: 'https://github.com/rahu1gg',
      },
      {
        icon: LinkedIn,
        label: 'linkedin',
        href: 'https://www.linkedin.com/in/rahul-palamarthi',
      },
      {
        icon: Twitter,
        label: 'twitter',
        href: 'https://twitter.com/rahu1gg',
      },
    ],
  },
  about: {
    section: 'about',
    description: '',
  },
  skills: {
    section: 'skills',
    value: [
      {
        title: '',
        value: ['JavaScript', 'TypeScript', 'React/Next.js'],
      },
      {
        title: '',
        value: ['JavaScript', 'TypeScript', 'React/Next.js'],
      },
      {
        title: '',
        value: ['JavaScript', 'TypeScript', 'React/Next.js'],
      },
    ],
  },
  education: {
    section: 'education',
    value: [
      {
        college: '',
        branch: '',
        duration: '',
      },
    ],
  },
} as const;
