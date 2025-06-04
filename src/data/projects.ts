
import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    category: 'Web Development',
    projectUrl: 'https://example.com/ecommerce',
    repoUrl: 'https://github.com/example/ecommerce',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    rawDescription: 'Developed a full-stack e-commerce platform with features like product listings, shopping cart, user authentication, and order management. Focused on a responsive UI and scalable backend architecture. Integrated Stripe for payment processing. Used agile methodologies for project management.',
    summary: 'A comprehensive e-commerce solution enabling seamless online shopping experiences with robust backend functionalities.',
  },
  {
    id: '2',
    title: 'AI Chatbot Assistant',
    category: 'Artificial Intelligence',
    projectUrl: 'https://example.com/chatbot',
    technologies: ['Python', 'Flask', 'NLP', 'Docker', 'Dialogflow'],
    rawDescription: 'Built an AI-powered chatbot for customer service. It uses Natural Language Processing to understand user queries and provide relevant responses. Deployed using Docker and Flask. The chatbot improved customer satisfaction by 20% and reduced response times significantly.',
    summary: 'An intelligent chatbot leveraging NLP to enhance customer service efficiency and user satisfaction.',
  },
  {
    id: '3',
    title: 'Mobile Fitness Tracker',
    category: 'Mobile App Development',
    repoUrl: 'https://github.com/example/fitness-app',
    technologies: ['React Native', 'Firebase', 'Expo', 'Google Fit API'],
    rawDescription: 'Created a cross-platform mobile application for tracking fitness activities like running, cycling, and gym workouts. Features include GPS tracking, workout logging, progress charts, and social sharing. Used Firebase for backend services including authentication and database. Leveraged Expo for faster development cycles.',
    summary: 'A feature-rich mobile fitness tracker designed to help users monitor activities and achieve health goals.',
  },
];
