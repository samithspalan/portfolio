import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 text-center section-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-primary/50">
           <Image src="https://placehold.co/200x200.png" alt="Samith" layout="fill" objectFit="cover" data-ai-hint="professional portrait" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline tracking-tight">
          <span className="block">Hello, I&apos;m </span>
          <span className="block text-primary mt-2">Samith</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          A passionate Full Stack Developer transforming ideas into innovative web solutions. Explore my work and let&apos;s build something amazing together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
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
