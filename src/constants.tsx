import { Building2, Home, Palette, HardHat, Cpu, Layers, PencilRuler, Sparkles } from 'lucide-react';
import React from 'react';
import { Service, Project, Testimonial, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'architecture',
    title: 'Architecture',
    description: 'Bespoke architectural design that harmonizes with the environment and elevates modern living.',
    icon: <Building2 className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1500'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Transforming existing structures into contemporary masterpieces while preserving their soul.',
    icon: <Home className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1500'
  },
  {
    id: 'decor-art',
    title: 'Decor & Art',
    description: 'Curating bespoke furniture, fine art, and premium textures to create a truly personalized atmosphere.',
    icon: <Palette className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1500'
  },
  {
    id: 'construction',
    title: 'Construction',
    description: 'Precision engineering and premium craftsmanship to bring architectural visions to life with structural integrity.',
    icon: <HardHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1500'
  },
  {
    id: 'home-automation',
    title: 'Home Automation',
    description: 'Seamlessly integrating smart technology for an intuitive and luxurious living experience.',
    icon: <Cpu className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1500'
  },
  {
    id: 'layouts',
    title: '2D / 3D Layouts',
    description: 'Advanced visualization and spatial planning to ensure every detail is perfectly realized.',
    icon: <Layers className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=1500'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'viva-villa',
    title: 'The Obsidian Villa',
    category: 'Modern Villas',
    image: 'https://rg-prd-a2fcb4ad.b-cdn.net/4ef2959e-f2dc-48e3-99e4-ebc86b95e7e7/Rockwell_Kahlo_0457.jpg?crop=2819%2C2819%2C91%2C181&quality=75&width=1000',
    location: 'Hyderabad, India',
    description: 'A monolithic architectural statement blending dark stone with warm walnut accents.',
    materials: ['Basalt Stone', 'Walnut Wood', 'Floor-to-ceiling Glass']
  },
  {
    id: 'sky-penthouse',
    title: 'Azure Penthouse',
    category: 'Apartment Interiors',
    image: 'https://rg-prd-a2fcb4ad.b-cdn.net/015f19fe-d077-4a15-8180-d413e38d05c3/Rockwell_Forma_0194.jpg?crop=3000%2C3000%2C0%2C0&quality=75&width=2000',
    location: 'Banjara Hills, Hyderabad',
    description: 'Minimalist luxury high above the city, featuring open-plan living and bespoke walnut furniture.',
    materials: ['White Marble', 'Brushed Brass', 'Walnut Veneer']
  },
  {
    id: 'heritage-revival',
    title: 'Heritage Manor',
    category: 'Renovations',
    image: 'https://rg-prd-a2fcb4ad.b-cdn.net/015f19fe-d077-4a15-8180-d413e38d05c3/Rockwell_Forma_1460.jpg?crop=2716%2C2716%2C0%2C89&quality=75&width=1000',
    location: 'Jubilee Hills, Hyderabad',
    description: 'Restoring a classic estate with modern amenities and timeless aesthetic.',
    materials: ['Reclaimed Walnut', 'Hand-cut Limestone', 'Antique Bronze']
  },
  {
    id: 'zen-retreat',
    title: 'Zen Garden House',
    category: 'Luxury Homes',
    image: 'https://rg-prd-a2fcb4ad.b-cdn.net/1b109a08-16a4-49e7-96ba-7f554ac1a3d1/023TerraSanta.jpg?crop=7455%2C4902%2C0%2C0&quality=75&width=2000',
    location: 'Gachibowli, Hyderabad',
    description: 'A sanctuary of peace integrating indoor and outdoor living spaces.',
    materials: ['Bamboo', 'Walnut', 'Natural Slate']
  },
  {
    id: 'smart-sanctuary',
    title: 'The Intelligent Loft',
    category: 'Smart Homes',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1000',
    location: 'Financial District, Hyderabad',
    description: 'Cutting-edge technology meets high-end design in this fully automated urban loft.',
    materials: ['Polished Concrete', 'Walnut Panels', 'Smart Glass']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Discovery', description: 'Understanding your vision, lifestyle, and aspirations.' },
  { number: '02', title: 'Concept', description: 'Developing the initial design language and spatial flow.' },
  { number: '03', title: '3D Visualization', description: 'Photorealistic renders to bring the vision to life.' },
  { number: '04', title: 'Materials', description: 'Selecting the finest textures and finishes.' },
  { number: '05', title: 'Execution', description: 'Meticulous construction and project management.' },
  { number: '06', title: 'Styling', description: 'Curating art, decor, and bespoke furniture.' },
  { number: '07', title: 'Handover', description: 'The final reveal of your dream space.' },
  { number: '08', title: 'Support', description: 'Ongoing care and post-completion assistance.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Reddy',
    role: 'Homeowner',
    content: 'Woodlife Studios transformed our house into a sanctuary. Their attention to detail and choice of materials is unparalleled.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Vikram Malhotra',
    role: 'CEO, Tech Corp',
    content: 'An architectural firm that truly understands modern luxury. The Obsidian Villa exceeded all our expectations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  }
];
