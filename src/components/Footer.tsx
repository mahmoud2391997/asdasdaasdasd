import { Heart, Compass, Map, MessageCircle, HeartHandshake } from "lucide-react";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-green text-warm-cream border-t border-white/5 relative overflow-hidden">
      
      {/* Visual top border ribbon with terracotta highlights */}
      <div className="h-1.5 w-full bg-linear-to-r from-clay-red via-honey-gold to-clay-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Main call block (5 Cols) */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-2 group">
              <span className="text-2xl">🕊️</span>
              <span className="font-display font-black text-xl tracking-tight text-white uppercase">
                Acts 2:42 Network
              </span>
            </div>
            
            <p className="text-sm text-sage-soft/80 max-w-sm leading-relaxed font-sans">
              An welcoming, relational network of simple house churches meeting in living rooms across Gwinnett County, Georgia. No performance overhead — just real meals and real friends centered around Jesus.
            </p>

            <div className="pt-2 text-xs font-serif italic text-honey-gold max-w-sm">
              “And they devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and the prayers.” — Acts 2:42
            </div>
          </div>

          {/* Quick jumps block (3 Cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-honey-gold">
              Quick Jumps
            </h4>
            <ul className="space-y-2 text-sm font-display font-medium text-sage-soft/90">
              <li>
                <button
                  id="foot-link-about"
                  onClick={() => onScrollTo("purpose")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  🌾 Who We Are
                </button>
              </li>
              <li>
                <button
                  id="foot-link-expect"
                  onClick={() => onScrollTo("expect")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  🚪 What To Expect
                </button>
              </li>
              <li>
                <button
                  id="foot-link-gatherings"
                  onClick={() => onScrollTo("gatherings")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  🏡 Active Living Rooms
                </button>
              </li>
              <li>
                <button
                  id="foot-link-gospel"
                  onClick={() => onScrollTo("gospel")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  ✨ The Gospel of Jesus
                </button>
              </li>
            </ul>
          </div>

          {/* Gwinnett Locations (4 Cols) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-honey-gold">
              Active Living Rooms
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-sans">
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-sage-soft/95">
                Lawrenceville, GA
              </span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-sage-soft/95">
                Duluth, GA
              </span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-sage-soft/95">
                Suwanee, GA
              </span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-sage-soft/95">
                Buford, GA
              </span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-sage-soft/95">
                Lilburn, GA
              </span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-sage-soft/95">
                Snellville, GA
              </span>
            </div>
            
            <p className="text-[11px] text-sage-soft/60 leading-normal pl-0.5">
              📍 Gwinnett County Georgia House Churches. All locations are non-commercial residential areas. Details & coordinates shared securely with visitors.
            </p>
          </div>

        </div>

        {/* Legal & Meta attribution */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-sage-soft/65">
          <p>
            © {currentYear} Acts 2:42 Gwinnett County Network. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1">
            <span>Made with visible love for Gwinnett neighbors</span>
            <Heart className="w-3 h-3 text-clay-red fill-clay-red animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
