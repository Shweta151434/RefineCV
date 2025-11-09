import { Facebook, Instagram, Linkedin, Youtube, Smartphone, Apple } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 px-6">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Try Now</h3>
            <ul className="space-y-3">
              <li>
                <a href="#ats-score" className="text-white/70 hover:text-white transition-colors">
                  Check ATS Score
                </a>
              </li>
              <li>
                <a href="#jd-comparison" className="text-white/70 hover:text-white transition-colors">
                  JD-CV Comparison
                </a>
              </li>
              <li>
                <a href="#cv-improviser" className="text-white/70 hover:text-white transition-colors">
                  CV Improviser
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Create CV</h3>
            <ul className="space-y-3">
              <li>
                <a href="#interview-prep" className="text-white/70 hover:text-white transition-colors">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="#find-jobs" className="text-white/70 hover:text-white transition-colors">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#find-connections" className="text-white/70 hover:text-white transition-colors">
                  Find Connections
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletters</h3>
            <ul className="space-y-3">
              <li>
                <a href="#blogs" className="text-white/70 hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#downloads" className="text-white/70 hover:text-white transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#sitemap" className="text-white/70 hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Privacy</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white/70 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-white/70 hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="text-white/70 text-sm">Follow Us</span>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-white/70 text-sm">Get The App</span>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                  <Apple size={20} />
                  <span className="text-sm">iOS</span>
                </a>
                <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                  <Smartphone size={20} />
                  <span className="text-sm">Android</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-white/50 text-sm">
            © 2025 RefineCV. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
