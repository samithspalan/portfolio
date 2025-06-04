
import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap, Code, Server, Network, Database, Layers, Atom, FileCode, Palette, Coffee, DatabaseZap, Code2 } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <FileCode className="w-5 h-5 text-primary" /> },
  { name: "Node.js", icon: <Server className="w-5 h-5 text-primary" /> },
  { name: "Express.js", icon: <Network className="w-5 h-5 text-primary" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5 text-primary" /> },
  { name: "PHP", icon: <FileCode className="w-5 h-5 text-primary" /> },
  { name: "Laravel", icon: <Layers className="w-5 h-5 text-primary" /> },
  { name: "Python", icon: <Code2 className="w-5 h-5 text-primary" /> }, // Changed from Snake
  { name: "React & Next.js", icon: <Atom className="w-5 h-5 text-primary" /> },
  { name: "HTML", icon: <FileCode className="w-5 h-5 text-primary" /> },
  { name: "CSS", icon: <Palette className="w-5 h-5 text-primary" /> },
  { name: "Java", icon: <Coffee className="w-5 h-5 text-primary" /> },
  { name: "C", icon: <Code className="w-5 h-5 text-primary" /> },
  { name: "C++", icon: <Code className="w-5 h-5 text-primary" /> },
  { name: "Firebase", icon: <DatabaseZap className="w-5 h-5 text-primary" /> },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-secondary/30" style={{ animationDelay: '0.4s' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into my educational journey and technical skills.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
              <GraduationCap className="w-7 h-7 text-accent" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground">B.E. in Computer Science Engineering</h3>
              <p className="text-sm">SCEM, Mangalore | 2023 - 2027 (Expected)</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">PUC (PCMC)</h3>
              <p className="text-sm">Vidyodaya PU College, Udupi | 2021 - 2023</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Award className="w-7 h-7 text-accent" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
              {skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <p className="mt-12 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
        I am a passionate and driven Computer Science student at SCEM, Mangalore, with a solid foundation from Vidyodaya PU College. I&apos;m dedicated to mastering new technologies and building innovative projects. My focus is on leveraging my growing skill set to create impactful software solutions and contribute to exciting technological advancements. I thrive on learning and am eager to apply my knowledge to real-world challenges.
      </p>
    </Section>
  );
}
