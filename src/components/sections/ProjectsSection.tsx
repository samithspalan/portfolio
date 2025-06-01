import { Section } from "@/components/shared/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projects"; // Assuming you have this data file

export function ProjectsSection() {
  return (
    <Section id="projects" style={{ animationDelay: '0.6s' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">My Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A selection of projects I&apos;ve worked on, showcasing my skills and creativity.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
