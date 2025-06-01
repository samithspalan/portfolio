import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Lightbulb, Settings, Users } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
  { name: "React & Next.js", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
  { name: "Node.js & Express", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
  { name: "Python & Django", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
  { name: "SQL & NoSQL Databases", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
  { name: "Cloud Platforms (AWS, Firebase)", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-secondary/30" style={{ animationDelay: '0.4s' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A brief overview of my professional journey, skills, and what drives me.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
              <Briefcase className="w-7 h-7 text-accent" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground">Senior Software Engineer</h3>
              <p className="text-sm">Tech Solutions Inc. | 2020 - Present</p>
              <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                <li>Lead development of key features for enterprise applications.</li>
                <li>Mentor junior developers and conduct code reviews.</li>
                <li>Collaborate with cross-functional teams to define project requirements.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Software Developer</h3>
              <p className="text-sm">Innovatech Ltd. | 2018 - 2020</p>
              <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                <li>Developed and maintained web applications using modern frameworks.</li>
                <li>Contributed to full software development lifecycle.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <GraduationCap className="w-7 h-7 text-accent" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground">B.E. in Computer Science Engineering</h3>
                <p className="text-sm">SCEM, Mangalore | 2023 - 2027</p>
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
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 text-muted-foreground">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <p className="mt-12 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
        I am dedicated to crafting high-quality, user-centric software solutions. My passion lies in leveraging cutting-edge technologies to solve real-world problems and create meaningful impact. I thrive in collaborative environments and am always eager to learn and grow.
      </p>
    </Section>
  );
}
