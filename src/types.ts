export interface QuizQuestion {
  id: number;
  subject: string;
  statement: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DaySchedule {
  day: string;
  theme: string;
  tasks: string[];
  tips: string;
  status: "pending" | "completed";
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  badge: string;
}
