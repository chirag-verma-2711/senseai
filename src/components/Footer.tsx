import { Linkedin, Youtube, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/senseai-foot.png";

export function Footer() {
  const [email, setEmail] = useState('');

  const siteLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why SenseAI', href: '#why-senseai' },
    { label: 'Team', href: '#team' },
    { label: 'Why AI', href: '#why-ai' },
    { label: 'Investment Thesis', href: '#investment-thesis' }
  ];

  const importantLinks = [
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Investor Relations', href: '#investors' },
    { label: 'Contact Us', href: '#pitch' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
    { icon: Phone, href: 'tel:+911234567890', label: 'Call Now', color: 'hover:text-green-400' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gray-950 border-t border-white/5 w-full">
      <div className="w-full px-6 py-16">
        <div className="container mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Logo and Company Description */}
            <div className="space-y-6">
              {/* Logo */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center group"
              >
                <img src={logo} alt="SenseAI Ventures" className="h-auto w-full max-w-[200px]" />
              </button>
              
              {/* Company Description */}
              <p className="text-gray-400 text-sm leading-relaxed !mt-0">
                India's pioneering AI-native venture fund since 2017. We invest in visionary founders building the future with artificial intelligence, from applications to infrastructure.
              </p>
              
              {/* Tagline */}
              <p className="text-gray-500 text-xs italic">
                Empowering AI Innovators. Funding the Future.
              </p>
            </div>

            {/* Column 2: Site Links */}
            <div>
              <h4 className="text-white text-lg mb-6">Site Links</h4>
              <ul className="space-y-3">
                {siteLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Important Links */}
            <div>
              <h4 className="text-white text-lg mb-6">Important Links</h4>
              <ul className="space-y-3">
                {importantLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter and Social */}
            <div>
              <h4 className="text-white text-lg mb-6">Stay Connected</h4>
              
              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors duration-300 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-[7px] p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  Subscribe to our newsletter for updates
                </p>
              </form>

              {/* Social Media Icons */}
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">Follow us:</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SenseAI Ventures. All rights reserved.
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-6 text-gray-500 text-xs">
              <span>Made with AI in India</span>
              <span className="hidden md:block">•</span>
              <span className="hidden md:block">Building the Future Together</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}