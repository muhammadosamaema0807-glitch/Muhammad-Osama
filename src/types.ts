export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  includes: string[];
  image: string;
  category: 'makeup' | 'hair' | 'bridal' | 'consultation';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bridal' | 'glam' | 'natural' | 'hair';
  image: string;
}
