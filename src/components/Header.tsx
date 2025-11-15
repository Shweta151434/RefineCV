import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-content mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/RefineCV Logo.jpg"
                alt="RefineCV"
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/find-connections" className="text-dark hover:text-primary transition-colors font-normal">
              Find Connections
            </Link>
            <a href="#services" className="text-dark hover:text-primary transition-colors font-normal">
              Our Services
            </a>
            <a href="#blog" className="text-dark hover:text-primary transition-colors font-normal">
              Blog
            </a>
            <a href="#pricing" className="text-dark hover:text-primary transition-colors font-normal">
              Pricing
            </a>
            <a href="#about" className="text-dark hover:text-primary transition-colors font-normal">
              About
            </a>
            <a href="#signin" className="text-dark hover:text-primary transition-colors font-normal">
              Sign In
            </a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link to="/find-connections" className="text-dark hover:text-primary transition-colors">
              Find Connections
            </Link>
            <a href="#services" className="text-dark hover:text-primary transition-colors">
              Our Services
            </a>
            <a href="#blog" className="text-dark hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#pricing" className="text-dark hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-dark hover:text-primary transition-colors">
              About
            </a>
            <a href="#signin" className="text-dark hover:text-primary transition-colors">
              Sign In
            </a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition-all">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
