
export interface Project {
  id: string;
  title: string;
  category: string;
  projectUrl?: string;
  repoUrl?: string;
  technologies: string[];
  rawDescription: string;
  summary?: string;
}
