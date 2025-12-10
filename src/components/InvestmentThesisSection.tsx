import { ArrowRight, Target, TrendingUp, Lightbulb, HeartPulse, DollarSign, ShoppingCart, Network, Sparkles, Layers, Database, Boxes, Users } from 'lucide-react';

export function InvestmentThesisSection() {
  return (
    <section id="investment-thesis" className="relative py-32  bg-gradient-to-r from-[#A345F8] via-[#272C8F] to-[#0F3CA8] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-data-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-data-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Top soft divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column */}
          <div className="space-y-12">
            {/* Headline */}
            <div>
              <h2 className="text-4xl lg:text-5xl mb-8">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  From Vision to Disruption
                </span>
              </h2>
              
              {/* Body text */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  We invest in <span className="text-blue-400">AI Applications</span> and <span className="text-purple-400">AI Tooling</span>.<br />
                  Our thesis guides every investment and shapes how we evaluate the future.
                </p>
              </div>
            </div>

            {/* We back ventures heading */}
            <div className="mt-12">
              <h3 className="text-3xl lg:text-4xl text-white mb-10">
                We back ventures redefining:
              </h3>
            </div>

            {/* Hexagonal categories */}
            <div className="flex flex-wrap items-center justify-start gap-6">
              {/* Healthcare */}
              <div className="relative group">
                <div 
                  className="w-32 h-36 backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <HeartPulse className="w-8 h-8 text-cyan-400" />
                  <span className="text-white text-sm">Healthcare</span>
                </div>
              </div>

              {/* Finance */}
              <div className="relative group">
                <div 
                  className="w-32 h-36 backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <DollarSign className="w-8 h-8 text-blue-400" />
                  <span className="text-white text-sm">Finance</span>
                </div>
              </div>

              {/* Commerce */}
              <div className="relative group">
                <div 
                  className="w-32 h-36 backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <ShoppingCart className="w-8 h-8 text-purple-400" />
                  <span className="text-white text-sm">Commerce</span>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="relative group">
                <div 
                  className="w-32 h-36 backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-400/30 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <Network className="w-8 h-8 text-emerald-400" />
                  <span className="text-white text-sm">Infrastructure</span>
                </div>
              </div>

              {/* And Beyond */}
              <div className="relative group">
                <div 
                  className="w-32 h-36 backdrop-blur-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-400/30 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <Sparkles className="w-8 h-8 text-violet-400" />
                  <span className="text-white text-sm">and beyond</span>
                </div>
              </div>
            </div>

            {/* CTA for left column */}
            <div className="pt-8">
              <a
                href="#thesis-details"
                className="inline-flex items-center gap-3 group text-lg"
              >
                <span className="text-[rgb(177,122,255)] group-hover:text-white transition-colors duration-300">
                  Explore Our Thesis
                </span>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Highlighted statement */}
            <div>
              <blockquote className="text-2xl lg:text-3xl text-white leading-tight">
                &ldquo;Pattern-matching is easy. Pattern-creating is hard.{' '}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  We do both.
                </span>
                &rdquo;
              </blockquote>
            </div>

            {/* VDAT Framework Card */}
            <div>
              {/* VDAT Title */}
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl text-white mb-3">
                  VDAT Framework
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Our proprietary VDAT Framework is the filter for clarity, enabling us to separate the weed from the chaff when evaluating startups. It helps assess whether AI is truly foundational to a business model, while measuring the depth of its technology and the strength of the team behind it.
                </p>
              </div>

              {/* 4 Frosted Glass Boxes */}
              <div className="grid grid-cols-2 gap-5">
                {/* Variety */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 aspect-square">
                  <div className="flex flex-col items-center justify-center text-center gap-4 h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 flex items-center justify-center">
                      <Layers className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-2">Variety</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Diversity of AI applications and use cases
                      </p>
                    </div>
                  </div>
                </div>

                {/* Data */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 aspect-square">
                  <div className="flex flex-col items-center justify-center text-center gap-4 h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 flex items-center justify-center">
                      <Database className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-2">Data</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Quality and strategic advantage of data assets
                      </p>
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 aspect-square">
                  <div className="flex flex-col items-center justify-center text-center gap-4 h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 flex items-center justify-center">
                      <Boxes className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-2">Architecture</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Technical infrastructure and system design
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 aspect-square">
                  <div className="flex flex-col items-center justify-center text-center gap-4 h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 flex items-center justify-center">
                      <Users className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl text-white mb-2">Team</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Founder capability and team excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA for right column */}
            <div className="pt-8">
              <a
                href="#thesis-details"
                className="inline-flex items-center gap-3 group text-lg"
              >
                <span className="text-[rgb(177,122,255)] group-hover:text-white transition-colors duration-300">
                  Explore more
                </span>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom soft divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}
