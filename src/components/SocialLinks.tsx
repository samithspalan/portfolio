import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const socialLinks = [
  { name: 'Email', href: 'mailto:samith7755@gmail.com', icon: <Mail className="h-5 w-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: <Linkedin className="h-5 w-5" /> },
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: <Github className="h-5 w-5" /> },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: <Twitter className="h-5 w-5" /> },
];

export function SocialLinks() {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold font-headline text-foreground">Connect With Me</h3>
      <p className="text-muted-foreground">
        Feel free to reach out through any of these platforms.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        {socialLinks.map((link) => (
          <Button key={link.name} variant="outline" asChild className="flex-grow sm:flex-grow-0">
            <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`My ${link.name} profile`}>
              {link.icon}
              <span className="ml-2 hidden sm:inline">{link.name}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
