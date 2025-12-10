import { Lightbulb, Brain, TrendingUp, Target } from 'lucide-react';

export function ValuePropositionSection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Early Insight',
      description: 'We spot potential before it scales and partner from day zero.',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: Brain,
      title: 'AI Depth',
      description: 'We speak the language of AI because we\'ve built with it.',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      icon: TrendingUp,
      title: 'Enduring Scale',
      description: 'We stand shoulder-to-shoulder with founders to scale bold ideas.',
      color: 'from-cyan-400 to-emerald-400',
      bgColor: 'from-cyan-500/20 to-emerald-500/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      icon: Target,
      title: 'Shared Vision',
      description: 'We help build the future of AI through mentorship, partnerships, and global ecosystems.',
      color: 'from-emerald-400 to-purple-400',
      bgColor: 'from-emerald-500/20 to-purple-500/20',
      borderColor: 'border-emerald-400/30'
    }
  ];

  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-data-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-data-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        <defs>
          <pattern id="value-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="rgba(59,130,246,0.5)" />
            <line x1="25" y1="25" x2="50" y2="25" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" />
            <line x1="25" y1="25" x2="25" y2="50" stroke="rgba(147,51,234,0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#value-grid)" />
      </svg>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Boxes Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`backdrop-blur-xl bg-gradient-to-br ${value.bgColor} border ${value.borderColor} rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 aspect-square flex items-center justify-center`}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.bgColor} border ${value.borderColor} flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-xl mb-2 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                          {value.title}
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Heading and Description */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Why SenseAI
                </span>
              </h2>
              <p className="text-2xl text-gray-300 mb-8">
                Rooted in India, Wired for the World
              </p>
            </div>

            {/* Additional Content */}
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                We bring deep AI expertise, strategic insight, and a founder-first mindset to every partnership. Our focus is simple: identify transformative AI companies early and help them scale globally.
              </p>
              
              <div className="pt-4">
                <blockquote className="text-xl text-white border-l-4 border-purple-400 pl-6 italic">
                  &ldquo;Together, let&apos;s shape the future of technology.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}
