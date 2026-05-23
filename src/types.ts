export interface Gathering {
  id: string;
  hostName: string;
  region: string;
  neighborhood: string;
  dayTime: string;
  schedule: string;
  atmosphere: string;
  kidsWelcome: string;
  size: string;
  coordinates: { x: number; y: number }; // Relative percentage coordinates for an interactive map of Gwinnett County
}

export interface ExpectationItem {
  id: string;
  title: string;
  shortText: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  location: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  reducingFear: string;
}
