
export interface Project {
  id: string;
  title: string;
  category: string;
  projectUrl?: string; // Made optional as it's no longer always present
  repoUrl?: string;
  technologies: string[];
  rawDescription: string;
  summary?: string;
}
