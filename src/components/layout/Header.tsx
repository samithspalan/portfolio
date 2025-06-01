'use client';

import Link from 'next/link';
import { BriefcaseBusiness, Home, MessageSquare, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

const navItems = [
  { href: '#hero', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '#about', label: 'About', icon: <UserCircle className="h-5 w-5" /> },
  { href: '#projects', label: 'Projects', icon: <BriefcaseBusiness className="h-5 w-5" /> },
  { href: '#contact', label: 'Contact', icon: <MessageSquare className="h-5 w-5" /> },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#hero" className="text-2xl font-bold font-headline text-primary">
          Samith S Palan
        </Link>
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="text-sm font-medium hover:text-primary transition-colors">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
            <Link href="#hero" className="mb-6 text-2xl font-bold font-headline text-primary">
              Samith S Palan
            </Link>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
