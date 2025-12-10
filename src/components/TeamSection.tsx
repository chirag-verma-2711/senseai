import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
// import placeholderPhoto from 'figma:asset/man_dummy.png';
import placeholderPhoto from "../assets/man_dummy.png";

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      designation: 'Managing Partner',
      tagline: 'Serial entrepreneur with 3 exits in AI infrastructure',
      photo: placeholderPhoto
    },
    {
      name: 'Priya Sharma',
      designation: 'General Partner',
      tagline: 'Former CTO at leading AI unicorn, 20+ years in tech',
      photo: placeholderPhoto
    },
    {
      name: 'Amit Patel',
      designation: 'Venture Partner',
      tagline: 'Deep learning researcher turned investor, PhD MIT',
      photo: placeholderPhoto
    },
    {
      name: 'Neha Reddy',
      designation: 'Investment Partner',
      tagline: 'Growth strategist with portfolio valued at $2B+',
      photo: placeholderPhoto
    }
  ];

  return (
    <section id="team" className="relative py-32 bg-gradient-to-br from-[#0A2A3D] via-[#043A3A] to-[#012F2C] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-data-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-data-pulse" style={{ animationDelay: '2s' }} />
      </div>


      {/* Top soft divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Headlines */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Executives
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A team of technologists, investors, and strategists with decades of experience in scaling frontier innovation.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 text-sm mb-3">
                  {member.designation}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-8">
          <a
            href="#team-details"
            className="inline-flex items-center gap-3 group text-lg"
          >
            <span className="text-[rgb(177,122,255)] group-hover:text-white transition-colors duration-300">
              Our Team
            </span>
            <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Bottom soft divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}