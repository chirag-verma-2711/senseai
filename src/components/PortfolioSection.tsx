import { ArrowRight, ArrowUpRight } from 'lucide-react';
// import codeKarmaLogo from 'figma:asset/codekarma.png';
// import contineuLogo from 'figma:asset/contineu.png';
// import card3Logo from 'figma:asset/irame.png';
// import card4Logo from 'figma:asset/pipeshift.png';
// import card5Logo from 'figma:asset/llumo.png';
// import card6Logo from 'figma:asset/cureskin.png';
// import card7Logo from 'figma:asset/confido.png';
import codeKarmaLogo from "../assets/codekarma.png";
import contineuLogo from "../assets/contineu.png";
import card3Logo from "../assets/irame.png";
import card4Logo from "../assets/pipeshift.png";
import card5Logo from "../assets/llumo.png";
import card6Logo from "../assets/cureskin.png";
import card7Logo from "../assets/confido.png";

import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PortfolioSection() {
  const cards = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <section id="portfolio" className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-data-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-data-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        <defs>
          <pattern id="portfolio-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="rgba(147,51,234,0.5)" />
            <line x1="25" y1="25" x2="50" y2="25" stroke="rgba(147,51,234,0.3)" strokeWidth="0.5" />
            <line x1="25" y1="25" x2="25" y2="50" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
      </svg>
      
      <div className="relative z-10 w-full">{/* Header - Centered Content */}
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Builders of the Future
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center">
              Meet the Makers, Movers, and Partners in AI<br />
              who are transforming markets and redefining industries.
            </p>
          </div>

          {/* Auto-scrolling cards container */}
          <div className="relative w-full overflow-hidden">
            {/* Left Arrow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20">
              <ChevronLeft className="w-8 h-8 text-purple-400/50" strokeWidth={1} />
            </div>
            
            {/* Right Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20">
              <ChevronRight className="w-8 h-8 text-purple-400/50" strokeWidth={1} />
            </div>

            <div className="flex gap-6 animate-scroll">
              {/* First set of cards */}
              {cards.map((card) => (
                <div
                  key={`card-1-${card}`}
                  className="flex-shrink-0 w-64 h-64 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:bg-white/15 hover:scale-105 transition-all duration-300 relative"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(147, 51, 234, 0.2)'
                  }}
                >
                  {/* Card content */}
                  <div className="w-full h-full flex items-center justify-center p-6">
                    {card === 1 ? (
                      <img src={codeKarmaLogo} alt="CodeKarma" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 2 ? (
                      <img src={contineuLogo} alt="Contineu" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 3 ? (
                      <img src={card3Logo} alt="Card3" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 4 ? (
                      <img src={card4Logo} alt="Card4" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 5 ? (
                      <img src={card5Logo} alt="Card5" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 6 ? (
                      <img src={card6Logo} alt="Card6" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 7 ? (
                      <img src={card7Logo} alt="Card7" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : (
                      <span className="text-gray-400">Card {card}</span>
                    )}
                  </div>
                  {/* Bottom left "Ai" text for card 1 */}
                  {card === 1 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Ai
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 2 */}
                  {card === 2 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Construction Tech
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 3 */}
                  {card === 3 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Audit & Compliance
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 4 */}
                  {card === 4 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tooling
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 5 */}
                  {card === 5 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tooling
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 6 */}
                  {card === 6 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Skin Care
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 7 */}
                  {card === 7 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Healthcare
                      </span>
                    </div>
                  )}
                  {/* Bottom right arrow CTA */}
                  <div className="absolute bottom-4 right-4">
                    <ArrowUpRight className="w-5 h-5 text-purple-400/60 hover:text-purple-400 transition-colors" strokeWidth={1.5} />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {cards.map((card) => (
                <div
                  key={`card-2-${card}`}
                  className="flex-shrink-0 w-64 h-64 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:bg-white/15 hover:scale-105 transition-all duration-300 relative"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(147, 51, 234, 0.2)'
                  }}
                >
                  {/* Card content */}
                  <div className="w-full h-full flex items-center justify-center p-6">
                    {card === 1 ? (
                      <img src={codeKarmaLogo} alt="CodeKarma" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 2 ? (
                      <img src={contineuLogo} alt="Contineu" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 3 ? (
                      <img src={card3Logo} alt="Card3" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 4 ? (
                      <img src={card4Logo} alt="Card4" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 5 ? (
                      <img src={card5Logo} alt="Card5" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 6 ? (
                      <img src={card6Logo} alt="Card6" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : card === 7 ? (
                      <img src={card7Logo} alt="Card7" className="max-w-[70%] max-h-[70%] object-contain" />
                    ) : (
                      <span className="text-gray-400">Card {card}</span>
                    )}
                  </div>
                  {/* Bottom left "Ai" text for card 1 */}
                  {card === 1 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Ai
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 2 */}
                  {card === 2 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Construction Tech
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 3 */}
                  {card === 3 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Audit & Compliance
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 4 */}
                  {card === 4 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tooling
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 5 */}
                  {card === 5 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tooling
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 6 */}
                  {card === 6 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Skin Care
                      </span>
                    </div>
                  )}
                  {/* Bottom left text for card 7 */}
                  {card === 7 && (
                    <div className="absolute bottom-4 left-4">
                      <span className="text-lg bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Healthcare
                      </span>
                    </div>
                  )}
                  {/* Bottom right arrow CTA */}
                  <div className="absolute bottom-4 right-4">
                    <ArrowUpRight className="w-5 h-5 text-purple-400/60 hover:text-purple-400 transition-colors" strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Link */}
          <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-8 text-center">
            <a
              href="#portfolio-details"
              className="inline-flex items-center gap-3 group text-lg"
            >
              <span className="text-[rgb(177,122,255)] group-hover:text-white transition-colors duration-300">
                Explore the Portfolio
              </span>
              <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-264px * 7 - 24px * 7));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}