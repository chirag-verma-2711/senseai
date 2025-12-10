import { Navigation } from "./components/Navigation";
// import heroDesign from "figma:asset/vector_hero.png";
import heroDesign from "./assets/vector_hero.png";
import { Rocket, TrendingUp } from "lucide-react";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { WhyAISection } from "./components/WhyAISection";
import { WhySenseAISection } from "./components/WhySenseAISection";
import { ValuePropositionSection } from "./components/ValuePropositionSection";
import { TeamSection } from "./components/TeamSection";
import { InvestmentThesisSection } from "./components/InvestmentThesisSection";
import { PitchSection } from "./components/PitchSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[99.36vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-emerald-900">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        {/* AI mesh overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <pattern
              id="ai-mesh"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Diagonal mesh lines */}
              <path
                d="M 0 50 Q 25 25, 50 50 T 100 50"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 50 0 Q 25 25, 0 50"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 100 50 Q 75 75, 50 100"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 50 0 Q 75 25, 100 50"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 0 50 Q 25 75, 50 100"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                fill="none"
              />
              {/* Connection nodes */}
              <circle
                cx="50"
                cy="50"
                r="1.5"
                fill="rgba(255,255,255,0.2)"
              />
              <circle
                cx="0"
                cy="50"
                r="1"
                fill="rgba(255,255,255,0.15)"
              />
              <circle
                cx="100"
                cy="50"
                r="1"
                fill="rgba(255,255,255,0.15)"
              />
              <circle
                cx="50"
                cy="0"
                r="1"
                fill="rgba(255,255,255,0.15)"
              />
              <circle
                cx="50"
                cy="100"
                r="1"
                fill="rgba(255,255,255,0.15)"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#ai-mesh)"
          />

          {/* Animated neural network lines */}
          <line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="40%"
            stroke="rgba(147,51,234,0.3)"
            strokeWidth="1"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="70%"
            y1="30%"
            x2="90%"
            y2="50%"
            stroke="rgba(59,130,246,0.3)"
            strokeWidth="1"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="20%"
            y1="80%"
            x2="50%"
            y2="60%"
            stroke="rgba(16,185,129,0.3)"
            strokeWidth="1"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </line>

          {/* Floating nodes */}
          <circle
            cx="30%"
            cy="40%"
            r="3"
            fill="rgba(147,51,234,0.5)"
          >
            <animate
              attributeName="cy"
              values="40%;38%;40%"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="70%"
            cy="30%"
            r="3"
            fill="rgba(59,130,246,0.5)"
          >
            <animate
              attributeName="cy"
              values="30%;32%;30%"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="50%"
            cy="70%"
            r="3"
            fill="rgba(16,185,129,0.5)"
          >
            <animate
              attributeName="cy"
              values="70%;68%;70%"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.2),transparent_70%)]" />

        {/* Binary code streams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-[10%] top-0 text-emerald-300/30 text-xs font-mono animate-binary-fall"
            style={{ animationDelay: "0s" }}
          >
            01101000
            <br />
            11010110
            <br />
            10110001
            <br />
            01010101
            <br />
            11001010
          </div>
          <div
            className="absolute left-[25%] top-0 text-blue-300/30 text-xs font-mono animate-binary-fall"
            style={{ animationDelay: "3s" }}
          >
            10101010
            <br />
            01010101
            <br />
            11110000
            <br />
            00111100
            <br />
            10011001
          </div>
          <div
            className="absolute left-[60%] top-0 text-purple-300/30 text-xs font-mono animate-binary-fall"
            style={{ animationDelay: "1.5s" }}
          >
            11001100
            <br />
            00110011
            <br />
            10101111
            <br />
            01110001
            <br />
            10010110
          </div>
          <div
            className="absolute left-[80%] top-0 text-cyan-300/30 text-xs font-mono animate-binary-fall"
            style={{ animationDelay: "4.5s" }}
          >
            01011010
            <br />
            10100101
            <br />
            11110011
            <br />
            00001111
            <br />
            10101100
          </div>
        </div>

        {/* Floating data particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-[15%] top-[20%] w-2 h-2 bg-emerald-300/40 rounded-full blur-sm animate-particle-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute left-[30%] top-[60%] w-3 h-3 bg-blue-300/40 rounded-full blur-sm animate-particle-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute left-[65%] top-[25%] w-2.5 h-2.5 bg-purple-300/40 rounded-full blur-sm animate-particle-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute left-[85%] top-[70%] w-2 h-2 bg-cyan-300/40 rounded-full blur-sm animate-particle-float"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute left-[40%] top-[35%] w-3 h-3 bg-violet-300/40 rounded-full blur-sm animate-particle-float"
            style={{ animationDelay: "2.5s" }}
          />
          <div
            className="absolute left-[75%] top-[50%] w-2 h-2 bg-teal-300/40 rounded-full blur-sm animate-particle-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Glowing AI orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-[20%] top-[30%] w-4 h-4 bg-emerald-200/30 rounded-full blur-md animate-data-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute left-[70%] top-[60%] w-5 h-5 bg-blue-200/30 rounded-full blur-md animate-data-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute left-[50%] top-[20%] w-6 h-6 bg-purple-200/30 rounded-full blur-lg animate-data-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute left-[90%] top-[40%] w-4 h-4 bg-cyan-200/30 rounded-full blur-md animate-data-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Signal wave lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent animate-signal-wave"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent animate-signal-wave"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-[75%] left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent animate-signal-wave"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Circuit patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          {/* Left side circuit */}
          <path
            d="M 50 150 L 150 150 L 150 250 L 250 250"
            stroke="rgba(16,185,129,0.4)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <circle
            cx="150"
            cy="150"
            r="4"
            fill="rgba(16,185,129,0.6)"
          >
            <animate
              attributeName="r"
              values="4;6;4"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="150"
            cy="250"
            r="3"
            fill="rgba(16,185,129,0.5)"
          />

          {/* Right side circuit */}
          <path
            d="M 1600 200 L 1500 200 L 1500 300 L 1400 300"
            stroke="rgba(59,130,246,0.4)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-20"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>
          <circle
            cx="1500"
            cy="200"
            r="4"
            fill="rgba(59,130,246,0.6)"
          >
            <animate
              attributeName="r"
              values="4;6;4"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="1500"
            cy="300"
            r="3"
            fill="rgba(59,130,246,0.5)"
          />

          {/* Top circuit */}
          <path
            d="M 800 100 L 900 100 L 900 150 L 1000 150"
            stroke="rgba(147,51,234,0.4)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <circle
            cx="900"
            cy="100"
            r="4"
            fill="rgba(147,51,234,0.6)"
          >
            <animate
              attributeName="r"
              values="4;5;4"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Hexagonal AI grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <defs>
            <pattern
              id="hexagon-pattern"
              x="0"
              y="0"
              width="100"
              height="87"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
                stroke="rgba(147,51,234,0.5)"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#hexagon-pattern)"
          />
        </svg>

        {/* Neural network web */}
        <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none">
          {/* Complex neural connections */}
          <line
            x1="15%"
            y1="25%"
            x2="35%"
            y2="35%"
            stroke="rgba(147,51,234,0.3)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.5;0.1"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="35%"
            y1="35%"
            x2="55%"
            y2="30%"
            stroke="rgba(59,130,246,0.3)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.5;0.1"
              dur="3.5s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </line>
          <line
            x1="55%"
            y1="30%"
            x2="75%"
            y2="40%"
            stroke="rgba(16,185,129,0.3)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.5;0.1"
              dur="4.5s"
              repeatCount="indefinite"
              begin="1s"
            />
          </line>
          <line
            x1="25%"
            y1="60%"
            x2="45%"
            y2="55%"
            stroke="rgba(147,51,234,0.3)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.5;0.1"
              dur="3.8s"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </line>
          <line
            x1="45%"
            y1="55%"
            x2="65%"
            y2="65%"
            stroke="rgba(59,130,246,0.3)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.5;0.1"
              dur="4.2s"
              repeatCount="indefinite"
              begin="0.8s"
            />
          </line>
          <line
            x1="65%"
            y1="65%"
            x2="85%"
            y2="60%"
            stroke="rgba(16,185,129,0.3)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.5;0.1"
              dur="3.6s"
              repeatCount="indefinite"
              begin="1.2s"
            />
          </line>

          {/* Neural nodes */}
          <circle
            cx="15%"
            cy="25%"
            r="2.5"
            fill="rgba(147,51,234,0.6)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="35%"
            cy="35%"
            r="2.5"
            fill="rgba(59,130,246,0.6)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="55%"
            cy="30%"
            r="2.5"
            fill="rgba(16,185,129,0.6)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="75%"
            cy="40%"
            r="2.5"
            fill="rgba(147,51,234,0.6)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="25%"
            cy="60%"
            r="2.5"
            fill="rgba(59,130,246,0.6)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="45%"
            cy="55%"
            r="2.5"
            fill="rgba(16,185,129,0.6)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="65%"
            cy="65%"
            r="2.5"
            fill="rgba(147,51,234,0.6)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.7s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="85%"
            cy="60%"
            r="2.5"
            fill="rgba(59,130,246,0.6)"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Scanning grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-0 top-[15%] w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-signal-wave"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute left-0 top-[35%] w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-signal-wave"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute left-0 top-[65%] w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-signal-wave"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute left-0 top-[85%] w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-signal-wave"
            style={{ animationDelay: "4.5s" }}
          />
        </div>

        {/* Data stream vertical lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[20%] top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-300/20 to-transparent" />
          <div className="absolute left-[40%] top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent" />
          <div className="absolute left-[60%] top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent" />
          <div className="absolute left-[80%] top-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-300/20 to-transparent" />
        </div>

        {/* Holographic rings */}
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none">
          <circle
            cx="20%"
            cy="30%"
            r="60"
            stroke="rgba(147,51,234,0.4)"
            strokeWidth="0.5"
            fill="none"
          >
            <animate
              attributeName="r"
              values="60;80;60"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.1;0.4"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="80%"
            cy="70%"
            r="70"
            stroke="rgba(59,130,246,0.4)"
            strokeWidth="0.5"
            fill="none"
          >
            <animate
              attributeName="r"
              values="70;90;70"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.1;0.4"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="50%"
            cy="50%"
            r="100"
            stroke="rgba(16,185,129,0.4)"
            strokeWidth="0.5"
            fill="none"
          >
            <animate
              attributeName="r"
              values="100;120;100"
              dur="7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.1;0.4"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* AI Processing indicators */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[10%] bottom-[20%] w-16 h-16 border border-purple-400/20 animate-data-pulse">
            <div className="absolute inset-2 border border-purple-400/30" />
            <div className="absolute inset-4 border border-purple-400/40" />
          </div>
          <div
            className="absolute right-[15%] top-[25%] w-20 h-20 border border-blue-400/20 animate-data-pulse"
            style={{ animationDelay: "1s" }}
          >
            <div className="absolute inset-2 border border-blue-400/30" />
            <div className="absolute inset-4 border border-blue-400/40" />
          </div>
        </div>

        {/* Digital matrix dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute left-[12%] top-[18%] w-1 h-1 bg-purple-300 rounded-full animate-data-pulse" />
          <div
            className="absolute left-[28%] top-[42%] w-1 h-1 bg-blue-300 rounded-full animate-data-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute left-[52%] top-[22%] w-1 h-1 bg-cyan-300 rounded-full animate-data-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute left-[68%] top-[58%] w-1 h-1 bg-emerald-300 rounded-full animate-data-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute left-[82%] top-[35%] w-1 h-1 bg-purple-300 rounded-full animate-data-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute left-[45%] top-[72%] w-1 h-1 bg-blue-300 rounded-full animate-data-pulse"
            style={{ animationDelay: "2.5s" }}
          />
          <div
            className="absolute left-[22%] top-[88%] w-1 h-1 bg-cyan-300 rounded-full animate-data-pulse"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute left-[78%] top-[15%] w-1 h-1 bg-emerald-300 rounded-full animate-data-pulse"
            style={{ animationDelay: "3.5s" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <h1 className="text-white text-center text-8xl">
            <span className="font-bold text-center">
              Empowering AI Innovators.
            </span>
            <br />
            <span className="font-thin">
              Funding the Future.
            </span>
          </h1>
          <div className="h-8" />
          <p className="text-white text-center text-2xl opacity-80">
            India's Pioneering AI-Native Fund since 2017
          </p>
          <div className="h-8" />
          <div className="flex items-center justify-center gap-6 max-w-xl mx-auto">
            <button className="group text-[20px] relative px-11 py-5 rounded-[3px] bg-white/10 backdrop-blur-md text-white overflow-hidden transition-all duration-300 border-2 border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-white/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)]">
                Let&apos;s build what&apos;s next
            </button>
            <button className="group text-[20px] relative px-11 py-5 rounded-[3px] bg-white/10 backdrop-blur-md text-white overflow-hidden transition-all duration-300 border-2 border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-white/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)]">
                Invest with us
            </button>
          </div>
        </div>

        {/* Design element - bottom right */}
        <div className="absolute bottom-0 right-0 w-1/3 opacity-10 animate-abstract-float">
          <img
            src={heroDesign}
            alt=""
            className="w-full h-auto"
          />
        </div>

        {/* Bottom curved wave */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          {/* Golden glow behind the curve */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-yellow-500/20 via-amber-400/10 to-transparent blur-2xl" />

          <svg
            className="w-full h-40 relative z-10"
            viewBox="0 0 1440 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Multiple layered semi-circular curves for depth */}
            <path
              d="M0,160 L0,100 Q720,-20 1440,100 L1440,160 Z"
              fill="#1F2937"
              fillOpacity="0.3"
            />
            <path
              d="M0,160 L0,105 Q720,-10 1440,105 L1440,160 Z"
              fill="#1F2937"
              fillOpacity="0.5"
            />
            <path
              d="M0,160 L0,110 Q720,0 1440,110 L1440,160 Z"
              fill="#374151"
              fillOpacity="0.7"
            />
            <path
              d="M0,160 L0,115 Q720,10 1440,115 L1440,160 Z"
              fill="#111827"
            />
          </svg>
        </div>
      </section>

      {/* Placeholder sections for scroll demo */}
      <section
        id="about"
        className="flex items-center justify-center pb-14"
      >
        <AboutSection />
      </section>

      <section
        id="portfolio"
        className="flex items-center justify-center"
      >
        <PortfolioSection />
      </section>

      <section
        id="value-proposition"
        className="flex items-center justify-center"
      >
        <ValuePropositionSection />
      </section>

      <section
        id="team"
        className=""
      >
        <TeamSection />
      </section>

      <section
        id="why-senseai"
        className="flex items-center justify-center"
      >
        <WhySenseAISection />
      </section>

      {/* <section
        id="why-ai"
        className="flex items-center justify-center"
      >
        <WhyAISection />
      </section> */}

      <section
        id="investment-thesis"
        className=""
      >
        <InvestmentThesisSection />
      </section>

      <section
        id="pitch"
        className="flex items-center justify-center"
      >
        <PitchSection />
      </section>

      <section
        id="footer"
        className="flex items-center justify-center"
      >
        <Footer />
      </section>
    </div>
  );
}