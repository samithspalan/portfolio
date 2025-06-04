
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/30 scroll-mt-16 text-center overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-6 py-20 md:py-32">
        <p
          className="text-2xl md:text-3xl text-muted-foreground mb-2 section-fade-in transition-all duration-300 hover:scale-105 hover:text-accent"
          style={{ animationDelay: '0.2s' }}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-bold font-headline tracking-tight text-primary mb-6 section-fade-in transition-all duration-300 hover:scale-110 hover:text-accent"
          style={{ animationDelay: '0.4s' }}
        >
          Samith
        </h1>
        <div
          className="mb-6 section-fade-in min-h-[60px] md:min-h-[70px]" // Removed transform from parent div
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
            A Passionate Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-accent mt-1 hover:brightness-125 transition-all duration-300 hover:scale-105">
            Innovator | Problem Solver | Lifelong Learner
          </p>
        </div>
        <p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 section-fade-in transition-all duration-300 hover:scale-105 hover:text-foreground"
          style={{ animationDelay: '0.8s' }}
        >
          Transforming ideas into innovative web solutions. Explore my work and let&apos;s build something amazing together.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 section-fade-in"
          style={{ animationDelay: '1.0s' }}
        >
          <Button asChild size="lg" className="font-semibold">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-semibold">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
