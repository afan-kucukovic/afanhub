
export interface Game {
  id: string;
  title: string;
  description: string;
  status: 'In Development' | 'Alpha' | 'Beta' | 'Released';
  image: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
