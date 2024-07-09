import { Github, LinkedIn, Twitter } from '@/components/global/icons';
import { Laugh, Mail, Phone } from 'lucide-react';

export const INTRO = {
  name: 'Rahul Palamarthi',
  description: 'Passionate programmer, Self-taught Developer, Open Source Contributor',
  location: {
    value: 'Chirala, India',
    href: 'https://www.google.com/maps/place/Chirala',
  },
  profilePic: {
    src: 'profile-pic.jpg',
    alt: 'profile-pic',
  },
  socialLinks: [
    {
      icon: Github,
      label: 'gitHub',
      href: 'https://github.com/rahu1gg',
    },
    {
      icon: LinkedIn,
      label: 'linkedin',
      href: 'https://www.linkedin.com/in/rahul-palamarthi',
    },
    {
      icon: Twitter,
      label: 'X',
      href: 'https://twitter.com/rahu1gg',
    },
  ],

  personalLinks: [
    {
      icon: Mail,
      label: 'gmail',
      href: 'mailto:rahulpalamarthi@gmail.com',
      value: 'rahulpalamarthi@gmail.com',
    },
    {
      icon: Phone,
      label: 'phone',
      href: 'tel:+919515989271',
      value: '+919515989271',
    },
    {
      icon: Laugh,
      label: 'Personal Website',
      href: 'https://rahulgg.in',
      value: 'https://rahulgg.in',
    },
  ],
};
