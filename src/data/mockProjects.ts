import type { Project } from '../types/project';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Modern E-commerce Dashboard',
    description: 'A clean and modern dashboard design for e-commerce platforms',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2424'
    ],
    category: 'ui-design',
    tags: ['dashboard', 'ui design', 'web'],
    creator: {
      id: 'user1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2424',
      role: 'UI/UX Designer',
      location: 'San Francisco, CA'
    },
    likes: 234,
    views: 1420,
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'Nature Photography Collection',
    description: 'A series of stunning nature photographs from around the world',
    coverImage: 'https://images.unsplash.com/photo-1682686581498-5e85c7228119?auto=format&fit=crop&q=80&w=2424',
    images: [
      'https://images.unsplash.com/photo-1682686581498-5e85c7228119?auto=format&fit=crop&q=80&w=2424',
      'https://images.unsplash.com/photo-1682686580391-615b1e32be1d?auto=format&fit=crop&q=80&w=2424'
    ],
    category: 'photography',
    tags: ['nature', 'photography', 'landscape'],
    creator: {
      id: 'user2',
      name: 'Michael Torres',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2424',
      role: 'Photographer',
      location: 'Vancouver, BC'
    },
    likes: 567,
    views: 2891,
    createdAt: '2024-03-14'
  }
];