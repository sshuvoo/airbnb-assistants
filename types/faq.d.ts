export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSection {
  heading: {
    plain: string;
    accent: string;
  };
  subheading: string;
  items: FaqItem[];
}
