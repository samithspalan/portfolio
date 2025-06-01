export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  projectUrl?: string;
  repoUrl?: string;
  technologies: string[];
  rawDescription: string;
  summary?: string;
}
