import { Service, Testimonial, PortfolioItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup',
    description: 'A timeless, elegant look tailored to your unique features and wedding style. Includes high-end products for long-lasting wear.',
    price: 'Starting from $250',
    duration: '90 mins',
    category: 'bridal',
    image: 'input_file_1.png',
    includes: ['Skin preparation', 'Full makeup application', 'Premium false lashes', 'Touch-up kit']
  },
  {
    id: 'event-makeup',
    title: 'Special Event Makeup',
    description: 'Red carpet ready or sophisticated evening glam. Perfect for galas, parties, or any special occasion.',
    price: 'Starting from $150',
    duration: '60 mins',
    category: 'makeup',
    image: 'input_file_3.png',
    includes: ['Skin prep', 'Full glam makeup', 'False lashes']
  },
  {
    id: 'hair-styling',
    title: 'Luxury Hair Styling',
    description: 'From classic Hollywood waves to modern effortless updos. Styled to complement your makeup and outfit.',
    price: 'Starting from $120',
    duration: '60 mins',
    category: 'hair',
    image: 'input_file_4.png',
    includes: ['Hair prep', 'Full styling', 'Product application for hold']
  },
  {
    id: 'bridal-trial',
    title: 'Bridal Trial & Consultation',
    description: 'The perfect opportunity to test your dream look before the big day. We discuss your vision and refine every detail.',
    price: 'Starting from $200',
    duration: '120 mins',
    category: 'consultation',
    image: 'input_file_0.png',
    includes: ['In-depth consultation', 'Full makeup trial', 'Hair styling trial (optional add-on)']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra M.',
    role: 'Bride',
    content: 'Dimitra made me feel like the most beautiful version of myself on my wedding day. Her attention to detail is unmatched, and the makeup lasted all night through tears and dancing!',
    rating: 5
  },
  {
    id: '2',
    name: 'Sophia R.',
    role: 'Event Client',
    content: 'I have never received so many compliments on my makeup. Dimitra has a way of making you look glamorous yet still like yourself. A true professional.',
    rating: 5
  },
  {
    id: '3',
    name: 'Isabella K.',
    role: 'Bride',
    content: 'The best decision I made for my wedding. Dimitra is calm, professional, and incredibly talented. My entire bridal party looked stunning.',
    rating: 5
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 'p1', title: 'Classic Bridal Glam', category: 'bridal', image: 'input_file_1.png' },
  { id: 'p2', title: 'Hollywood Waves', category: 'hair', image: 'input_file_4.png' },
  { id: 'p3', title: 'Soft Natural Glow', category: 'natural', image: 'input_file_3.png' },
  { id: 'p4', title: 'Evening Red Carpet', category: 'glam', image: 'input_file_5.png' },
  { id: 'p5', title: 'Boho Bridal Updo', category: 'hair', image: 'input_file_0.png' },
  { id: 'p6', title: 'Modern Minimalist', category: 'bridal', image: 'input_file_2.png' }
];
