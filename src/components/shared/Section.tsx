import { cn } from '@/lib/utils';
import type React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      // scroll-mt-16 to offset fixed header height (h-16 in Header.tsx)
      className={cn(
        'w-full max-w-6xl py-16 md:py-24 px-4 md:px-6 scroll-mt-16 section-fade-in', 
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
