
'use client';

import type { Project } from '@/types';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const summaryText = project.summary || "A brief description of this project.";

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader>
        <CardTitle className="font-headline text-xl md:text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-sm text-primary">{project.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4 min-h-[60px]">
          {summaryText}
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
      </CardFooter>
    </Card>
  );
}

