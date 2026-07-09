export interface BookingFormData {
  occasion: string;
  date: string;
  petType: string;
  petName: string;
  duration: string;
  name: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  emoji: string;
  src: string;
  poster?: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}
