import { Zap, TrendingUp, RefreshCw, Target } from 'lucide-react';

export function WhySenseAISection() {
  const pillars = [
    {
      icon: Zap,
      title: 'Adoption at Scale',
      description: 'AI is now essential, measurable, and everywhere.',
      color: 'from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-400/30',
      iconColor: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Capital Flows',
      description: 'Fastest flood of capital in tech history is going to AI.',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/30',
      iconColor: 'text-blue-400'
    },
    {
      icon: RefreshCw,
      title: 'Disruption',
      description: 'The operating system of every industry is being rewritten.',
      color: 'from-cyan-500/20 to-emerald-500/20',
      borderColor: 'border-cyan-400/30',
      iconColor: 'text-cyan-400'
    },
    {
      icon: Target,
      title: 'Growing Revenues',
      description: 'AI startups are reaching scale faster than ever.',
      color: 'from-emerald-500/20 to-purple-500/20',
      borderColor: 'border-emerald-400/30',
      iconColor: 'text-emerald-400'
    }
  ];

  return (
    <section id="why-senseai" className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-data-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-data-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern background */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        <defs>
          <pattern id="why-senseai-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="rgba(147,51,234,0.5)" />
            <line x1="30" y1="30" x2="60" y2="30" stroke="rgba(147,51,234,0.3)" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="30" y2="60" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#why-senseai-grid)" />
      </svg>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Heading and Subtext */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl">
              <span className="text-white">Why </span>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-thin">
                AI
              </span>
            </h2>
            
            <p className="text-gray-300 text-xl leading-relaxed">
              &ldquo;Investing in AI can be risky, but{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                not investing in AI is riskier
              </span>
              &rdquo;
            </p>
          </div>

          {/* Right Column - Boxes Grid */}
          <div className="grid grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className={`backdrop-blur-xl bg-gradient-to-br ${pillar.color} border ${pillar.borderColor} rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 aspect-square flex items-center justify-center`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} border ${pillar.borderColor} flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${pillar.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-2">{pillar.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}