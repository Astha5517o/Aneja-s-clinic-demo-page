export type Category = 'All' | 'Skin' | 'Hair' | 'Laser' | 'Aesthetic' | 'Vitiligo';

export interface Treatment {
  id: string;
  name: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  whoIsItFor: string[];
  whatToExpect: {
    consultation: string;
    procedure: string;
    recovery: string;
  };
  keyHighlights: string[];
  estimatedDuration: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  focusAreas: string;
  bio: string;
  schedule: {
    location: string;
    days: string;
    timings: string;
  }[];
  image: string;
}

export interface ClinicLocation {
  id: string;
  name: string;
  area: string;
  address: string;
  city: string;
  landmark: string;
  phone: string;
  whatsapp: string;
  email: string;
  timings: string;
  sundayTimings: string;
  mapQuery: string;
  parkingAvailable: boolean;
  facilities: string[];
}

export type AppointmentType =
  | 'Dermatology Consultation'
  | 'Skin Treatment Consultation'
  | 'Hair Consultation'
  | 'Laser Consultation'
  | 'Aesthetic Consultation'
  | 'Vitiligo Evaluation';

export type AppointmentStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface AppointmentRequest {
  id: string;
  patientName: string;
  phone: string;
  email: string;
  appointmentType: AppointmentType;
  doctorId: string;
  doctorName: string;
  locationId: string;
  locationName: string;
  date: string; // YYYY-MM-DD
  timeSlot: string;
  message?: string;
  isFirstVisit: boolean;
  status: AppointmentStatus;
  createdAt: string;
}

export interface BeforeAfterCase {
  id: string;
  treatmentId: string;
  treatmentName: string;
  category: Category;
  headline: string;
  clinicalDetails: string;
  duration: string;
  sessions: string;
  beforeImage: string;
  afterImage: string;
}

export interface EducationalArticle {
  id: string;
  topic: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Consultation' | 'Treatments' | 'Location';
}

export type NavTab =
  | 'home'
  | 'treatments'
  | 'doctors'
  | 'about'
  | 'locations'
  | 'contact'
  | 'book'
  | 'admin-demo';
