"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Dr. Jaimin Patel", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Appointments", path: "/appointments" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="Pulmo One Logo"
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="md:block">
              <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
                Pulmo One
              </h1>
              <p className="text-xs text-muted-foreground">
                Lung Care & Allergy Center
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-4 h-4" />
              <span className="font-medium">Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-2 px-4 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-border">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button className="w-full gap-2 bg-gradient-primary">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
