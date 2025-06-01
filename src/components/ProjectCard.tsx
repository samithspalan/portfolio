'use client';

import type { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, Github, Sparkles, Loader2 } from 'lucide-react';
import React, { useState, useTransition } from 'react';
import { generateProjectSummaryAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [summary, setSummary] = useState(project.summary || 'Click below to generate an AI-powered summary.');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleGenerateSummary = () => {
    setIsLoading(true);
    startTransition(async () => {
      const result = await generateProjectSummaryAction(project.rawDescription);
      if (result.summary) {
        setSummary(result.summary);
        toast({ title: "Summary Generated!", description: "AI successfully summarized the project." });
      } else {
        setSummary(project.summary || 'Failed to generate summary. Please try again.');
        toast({ variant: "destructive", title: "Error", description: result.error || "Unknown error generating summary." });
      }
      setIsLoading(false);
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative w-full h-48 md:h-56">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl md:text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-sm text-primary">{project.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4 min-h-[60px]">
          {summary}
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-foreground">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-4 border-t">
        <div className="flex gap-2">
          {project.projectUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source
              </Link>
            </Button>
          )}
        </div>
        <Button 
            size="sm" 
            onClick={handleGenerateSummary} 
            disabled={isLoading || isPending} 
            className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
          >
            {isLoading || isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Generate Summary
        </Button>
      </CardFooter>
    </Card>
  );
}
