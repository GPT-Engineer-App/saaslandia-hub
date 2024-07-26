import React from 'react';
import { Button } from "@/components/ui/button";
import { Package2 } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Package2 className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">SaaS Company</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button className="ml-auto">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;