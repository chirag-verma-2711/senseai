import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from 'figma:asset/senseai-logo.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveDropdown(null);
  };

  const MenuButton = ({ label, onClick, hasDropdown }: { label: string; onClick?: () => void; hasDropdown?: boolean }) => (
    <button
      onClick={onClick}
      className="relative text-black/80 hover:text-black transition-colors duration-300 group px-3 py-2 flex items-center gap-1"
    >
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(147,51,234,0.6)]" />
      </span>
      {hasDropdown && <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />}
    </button>
  );

  const Dropdown = ({ items }: { items: { label: string; onClick: () => void }[] }) => (
    <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white/50 backdrop-blur-xl border border-white/30 shadow-lg overflow-hidden">
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent pointer-events-none" />
      {/* Noise texture for glass effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        backgroundSize: '200px 200px'
      }} />
      
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className="relative w-full text-left px-4 py-3 text-black/80 hover:text-black hover:bg-white/30 transition-all duration-300 border-b border-white/20 last:border-b-0"
        >
          {item.label}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-[0_4px_16px_rgba(255,255,255,0.15)]">
      {/* Frosted glass background */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-xl border-b border-white/30">
        {/* Additional frosted texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
        {/* Noise texture for glass effect */}
        <div className="absolute inset-0 opacity-40" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }} />
      </div>
      
      <div className="relative px-8 pl-8 pr-4">
        <div className="flex items-center justify-center h-28 relative">
          {/* Logo - positioned absolutely to the left */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute left-0 flex items-center group"
          >
            <img src={logo} alt="SenseAI Ventures" className="h-44" />
          </button>

          {/* Menu Items - centered */}
          <div className="flex items-center gap-3">
            {/* Home */}
            <MenuButton label="Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent transform -rotate-12" />

            {/* About Us */}
            <MenuButton label="About Us" onClick={() => scrollToSection('about')} />
            
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent transform -rotate-12" />

            {/* Why AI? */}
            <MenuButton label="Why AI?" onClick={() => scrollToSection('why-ai')} />
            
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent transform -rotate-12" />

            {/* Our Thesis */}
            <MenuButton label="Our Thesis" onClick={() => scrollToSection('investment-thesis')} />
            
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent transform -rotate-12" />

            {/* Our Portfolio - with dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('portfolio')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <MenuButton label="Our Portfolio" hasDropdown />
              {activeDropdown === 'portfolio' && (
                <Dropdown items={[
                  { label: 'Fund Alpha', onClick: () => scrollToSection('portfolio') },
                  { label: 'Fund One', onClick: () => scrollToSection('portfolio') }
                ]} />
              )}
            </div>
            
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent transform -rotate-12" />

            {/* Team - with dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('team')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <MenuButton label="Team" hasDropdown />
              {activeDropdown === 'team' && (
                <Dropdown items={[
                  { label: 'Sense AI Team', onClick: () => scrollToSection('team') },
                  { label: 'Advisors', onClick: () => scrollToSection('team') },
                  { label: 'Industry Experts', onClick: () => scrollToSection('team') }
                ]} />
              )}
            </div>
            
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent transform -rotate-12" />

            {/* Spotlight - with dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('spotlight')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <MenuButton label="Spotlight" hasDropdown />
              {activeDropdown === 'spotlight' && (
                <Dropdown items={[
                  { label: 'Media', onClick: () => scrollToSection('spotlight') },
                  { label: 'Articles', onClick: () => scrollToSection('spotlight') }
                ]} />
              )}
            </div>
            
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent transform -rotate-12" />

            {/* Contact Us */}
            <MenuButton label="Contact Us" onClick={() => scrollToSection('pitch')} />
            
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent transform -rotate-12" />

            {/* Apply for Investment - CTA Button */}
            <button
              onClick={() => scrollToSection('pitch')}
              className="ml-2 px-6 py-2 text-black/80 hover:text-black rounded-full hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 hover:scale-105"
            >
              Apply for Investment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}