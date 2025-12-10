import { ArrowRight } from 'lucide-react';
import senseAILogo from 'figma:asset/vector_hero.png';

export function AboutSection() {
  return (
    <section id="about" className="relative bg-gray-900 py-12 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-data-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-data-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Neural network background pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        <defs>
          <pattern id="about-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="rgba(147,51,234,0.5)" />
            <line x1="30" y1="30" x2="60" y2="30" stroke="rgba(147,51,234,0.3)" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="30" y2="60" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-grid)" />
      </svg>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div>
              <h2 className="text-5xl lg:text-6xl mb-6">
                <span className="text-white font-bold">Capital Designed</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-thin">
                  for the AI Age
                </span>
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
              <p className="mb-4 px-[0px] py-[27px]">
                SenseAI partners with dynamic entrepreneurs at the early stage who are obsessed with revolutionising the world through Artificial Intelligence.
              </p>
              
              <p className="mb-8 text-[20px] m-[0px]">
                Our approach is built on <span className="text-blue-400">Founder friendly</span> & <span className="text-purple-400">AI First</span> ethos, helping start-ups convert ideas into thriving businesses.
              </p>
              
              <p>
                We provide capital plus deep support across product development, go-to-market strategy, and scale execution.
              </p>
            </div>

            {/* Call to Action Link */}
            <div className="pt-2">
              <a
                href="#journey"
                className="inline-flex items-center gap-3 group text-lg"
              >
                <span className="text-[rgb(177,122,255)] group-hover:text-white transition-colors duration-300">
                  Our Journey
                </span>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - AI Illustration */}
          <div className="relative">
            {/* Abstract AI Graphics with People */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* SVG Illustration */}
              <svg className="w-full h-full" viewBox="0 0 600 500">
                <defs>
                  {/* Gradient definitions */}
                  <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="grad-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                  </linearGradient>
                  
                  {/* Circular clip path for logo */}
                  <clipPath id="circle-clip">
                    <circle cx="300" cy="250" r="28" />
                  </clipPath>
                </defs>

                {/* Central AI Hub/Node */}
                <circle cx="300" cy="250" r="45" fill="url(#grad-purple)" opacity="0.3">
                  <animate attributeName="r" values="45;50;45" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="250" r="30" fill="url(#grad-purple)" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                
                {/* Logo Image in center - clipped to circle */}
                <image 
                  href={senseAILogo} 
                  x="272" 
                  y="222" 
                  width="56" 
                  height="56" 
                  clipPath="url(#circle-clip)" 
                  opacity="0.6"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <animate attributeName="opacity" values="0.5;0.7;0.5" dur="3s" repeatCount="indefinite" />
                </image>

                {/* Founder - Top */}
                <g transform="translate(300, 80)">
                  <circle cx="0" cy="0" r="22" fill="url(#grad-blue)" opacity="0.7" />
                  <ellipse cx="0" cy="38" rx="28" ry="32" fill="url(#grad-blue)" opacity="0.6" />
                  <text x="0" y="-25" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="500">Founder</text>
                </g>

                {/* Marketing Consultant - Left */}
                <g transform="translate(100, 250)">
                  <circle cx="0" cy="0" r="22" fill="url(#grad-pink)" opacity="0.7" />
                  <ellipse cx="0" cy="38" rx="28" ry="32" fill="url(#grad-pink)" opacity="0.6" />
                  <text x="0" y="90" textAnchor="middle" fill="#ec4899" fontSize="12" fontWeight="500">Marketing</text>
                  <text x="0" y="105" textAnchor="middle" fill="#ec4899" fontSize="12" fontWeight="500">Consultant</text>
                </g>

                {/* Investor - Right */}
                <g transform="translate(500, 250)">
                  <circle cx="0" cy="0" r="22" fill="url(#grad-purple)" opacity="0.7" />
                  <ellipse cx="0" cy="38" rx="28" ry="32" fill="url(#grad-purple)" opacity="0.6" />
                  <text x="0" y="90" textAnchor="middle" fill="#a855f7" fontSize="13" fontWeight="500">Investor</text>
                </g>

                {/* Mentor - Bottom */}
                <g transform="translate(300, 420)">
                  <circle cx="0" cy="0" r="22" fill="url(#grad-green)" opacity="0.7" />
                  <ellipse cx="0" cy="38" rx="28" ry="32" fill="url(#grad-green)" opacity="0.6" />
                  <text x="0" y="-25" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="500">Mentor</text>
                </g>

                {/* Neural Network Connections - Animated */}
                {/* Founder to AI Hub */}
                <line x1="300" y1="118" x2="300" y2="250" stroke="url(#grad-blue)" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                </line>

                {/* Marketing Consultant to AI Hub */}
                <line x1="128" y1="250" x2="300" y2="250" stroke="url(#grad-pink)" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.2s" repeatCount="indefinite" />
                </line>

                {/* AI Hub to Investor */}
                <line x1="300" y1="250" x2="472" y2="250" stroke="url(#grad-purple)" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                </line>

                {/* AI Hub to Mentor */}
                <line x1="300" y1="250" x2="300" y2="382" stroke="url(#grad-green)" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2.3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.3s" repeatCount="indefinite" />
                </line>

                {/* Data Flow Particles */}
                {/* Particle 1 - Founder to AI */}
                <circle r="3" fill="#3b82f6" opacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#path1" />
                  </animateMotion>
                </circle>
                <path id="path1" d="M 300 118 L 300 250" fill="none" />

                {/* Particle 2 - AI to Investor */}
                <circle r="3" fill="#a855f7" opacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#path2" />
                  </animateMotion>
                </circle>
                <path id="path2" d="M 300 250 L 472 250" fill="none" />

                {/* Particle 3 - Marketing Consultant to AI */}
                <circle r="3" fill="#ec4899" opacity="0.8">
                  <animateMotion dur="4.2s" repeatCount="indefinite">
                    <mpath href="#path3" />
                  </animateMotion>
                </circle>
                <path id="path3" d="M 128 250 L 300 250" fill="none" />

                {/* Particle 4 - AI to Mentor */}
                <circle r="3" fill="#10b981" opacity="0.8">
                  <animateMotion dur="4.3s" repeatCount="indefinite">
                    <mpath href="#path4" />
                  </animateMotion>
                </circle>
                <path id="path4" d="M 300 250 L 300 382" fill="none" />

                {/* Connection Nodes */}
                <circle cx="300" cy="118" r="4" fill="#3b82f6">
                  <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="128" cy="250" r="4" fill="#ec4899">
                  <animate attributeName="r" values="4;6;4" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="472" cy="250" r="4" fill="#a855f7">
                  <animate attributeName="r" values="4;6;4" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="382" r="4" fill="#10b981">
                  <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Background hexagons for tech feel */}
                <polygon points="300,200 320,210 320,230 300,240 280,230 280,210" 
                         stroke="rgba(147,51,234,0.2)" strokeWidth="1" fill="none" opacity="0.3" />
                <polygon points="200,280 220,290 220,310 200,320 180,310 180,290" 
                         stroke="rgba(59,130,246,0.2)" strokeWidth="1" fill="none" opacity="0.3" />
                <polygon points="400,280 420,290 420,310 400,320 380,310 380,290" 
                         stroke="rgba(6,182,212,0.2)" strokeWidth="1" fill="none" opacity="0.3" />
                <polygon points="300,150 315,157 315,172 300,180 285,172 285,157" 
                         stroke="rgba(236,72,153,0.2)" strokeWidth="1" fill="none" opacity="0.3" />
                <polygon points="300,320 315,327 315,342 300,350 285,342 285,327" 
                         stroke="rgba(16,185,129,0.2)" strokeWidth="1" fill="none" opacity="0.3" />
              </svg>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-500/20 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-blue-500/20 rounded-bl-3xl" />

              {/* Floating particles */}
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-particle-float" />
              <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-particle-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-particle-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}