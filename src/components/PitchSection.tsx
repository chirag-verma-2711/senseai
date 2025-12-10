import { ArrowRight } from 'lucide-react';

export function PitchSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Abstract AI mesh background */}
      <div className="absolute inset-0 opacity-20">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-data-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-data-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Abstract lines pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          {/* Diagonal lines creating mesh pattern */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="20%" y1="0" x2="100%" y2="80%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="40%" y1="0" x2="100%" y2="60%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="60%" y1="0" x2="100%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="80%" y1="0" x2="100%" y2="20%" stroke="url(#line-gradient)" strokeWidth="1" />
          
          <line x1="0" y1="20%" x2="80%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="0" y1="40%" x2="60%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="0" y1="60%" x2="40%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="0" y1="80%" x2="20%" y2="100%" stroke="url(#line-gradient)" strokeWidth="1" />
        </svg>
      </div>

      {/* Top soft divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main headline */}
        <h2 className="text-4xl lg:text-6xl mb-12 max-w-4xl mx-auto leading-tight">
          <span className="text-white">
            History remembers the builders.
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-thin">
            Be one.
          </span>
        </h2>

        {/* CTA Button */}
        <a
          href="#pitch"
          className="inline-flex items-center gap-3 group text-lg"
        >
          <span className="text-[rgb(177,122,255)] group-hover:text-white transition-colors duration-300">
            Pitch to Us
          </span>
          <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-all duration-300" />
        </a>
      </div>

      {/* Bottom soft divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
    </section>
  );
}