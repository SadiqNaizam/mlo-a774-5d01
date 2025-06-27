import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter: React.FC = () => {
  console.log('AppFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} eCommerce Dashboard Builder. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
          <Link to="#" className="transition-colors hover:text-foreground">About Us</Link>
          <Link to="#" className="transition-colors hover:text-foreground">Privacy Policy</Link>
          <Link to="#" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default AppFooter;