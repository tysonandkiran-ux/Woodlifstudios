import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
  materials: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
