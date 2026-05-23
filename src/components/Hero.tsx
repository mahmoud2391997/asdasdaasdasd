import { ArrowRight, Flame, Heart, Sparkles, MapPin, Compass } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const values = [
    { icon: "🍗", label: "Shared Meals", desc: "Every house gathering centers around a shared dinner table." },
    { icon: "💬", label: "Real Dialogue", desc: "No lecture halls. Honest, participatory conversation over open Bibles." },
    { icon: "👶", label: "Family Space", desc: "A place where kids are embraced as vital, active parts of the family." }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 pb-20 flex items-center justify-center bg-radial from-clay-light/5 to-transparent overflow-hidden"
    >
      {/* Decorative Orbs to enrich details beautifully */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-honey-gold/10 filter blur-3xl -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-clay-light/5 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-green/10 text-sage-green text-xs font-mono font-bold uppercase tracking-wider self-start"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-clay-red"></span>
              </span>
              <span>Gwinnett County House Church Network</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-sage-green leading-[1.1]">
                You Were Created For{" "}
                <span className="font-serif italic text-clay-red block mt-1">Real Relationship.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-warm-gray leading-relaxed max-w-2xl font-sans">
                A simple, Jesus-centered house church family throughout Gwinnett County where people share meals, grow together, pray together, and learn to live Kingdom Life together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col xs:flex-row gap-4 pt-2"
            >
              <button
                id="hero-visit-gathering"
                onClick={() => onScrollTo("gatherings")}
                className="group flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-clay-red hover:bg-clay-dark text-warm-cream font-display font-bold text-base transition-all duration-200 shadow-soft hover:shadow-elegant cursor-pointer"
              >
                <span>Visit a Gathering</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-learn-more"
                onClick={() => onScrollTo("expect")}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-sage-green text-sage-green hover:bg-sage-green hover:text-warm-cream font-display font-bold text-base transition-all duration-200 cursor-pointer"
              >
                <span>Learn About House Church</span>
              </button>
            </motion.div>

            {/* Quick trust metrics block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 border-t border-warm-canvas/60 pt-6 max-w-md"
            >
              <div>
                <span className="block text-2xl font-display font-bold text-sage-green">6+</span>
                <span className="block text-xs uppercase tracking-wider text-warm-gray font-semibold font-mono">Neighborhoods</span>
              </div>
              <div className="border-l border-warm-canvas/60 pl-4">
                <span className="block text-2xl font-display font-bold text-sage-green">Casual</span>
                <span className="block text-xs uppercase tracking-wider text-warm-gray font-semibold font-mono">No Stage Shows</span>
              </div>
              <div className="border-l border-warm-canvas/60 pl-4">
                <span className="block text-2xl font-display font-bold text-sage-green">Authentic</span>
                <span className="block text-xs uppercase tracking-wider text-warm-gray font-semibold font-mono">True Family</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Collage (5 Cols) */}
          <div className="lg:col-span-5 relative h-[450px] sm:h-[500px] mt-8 lg:mt-0">
            {/* Background clay warm blob */}
            <div className="absolute inset-10 bg-honey-gold/10 rounded-[40px] transform rotate-3 -z-10" />
            <div className="absolute inset-10 bg-clay-light/10 rounded-[40px] transform -rotate-2 -z-10" />
            
            {/* Top/Main Image: Dinner table gathering */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-4 w-[75%] h-[55%] rounded-3xl overflow-hidden border-4 border-warm-cream shadow-elegant hover:scale-[1.02] hover:-rotate-1 transition-transform duration-300 z-20 cursor-pointer"
              onClick={() => onScrollTo("gatherings")}
            >
              <img
                src="/src/assets/images/table_gathering_1779499121203.png"
                alt="Meals around table in a cozy home"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-sage-green/95 backdrop-blur-xs text-warm-cream px-3 py-1 rounded-lg text-xs font-display font-medium flex items-center gap-1">
                <span>🍽️ Neighbors eating dinner together</span>
              </div>
            </motion.div>

            {/* Bottom Left: Cozy bible discussion on sofa */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="absolute bottom-4 left-0 w-[60%] h-[42%] rounded-3xl overflow-hidden border-4 border-warm-cream shadow-elegant hover:scale-[1.02] hover:rotate-1 transition-transform duration-300 z-30 cursor-pointer"
              onClick={() => onScrollTo("expect")}
            >
              <img
                src="/src/assets/images/living_room_1779499141321.png"
                alt="Bible study and open conversation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-clay-red/95 backdrop-blur-xs text-warm-cream px-3 py-1 rounded-lg text-xs font-display font-medium flex items-center gap-1">
                <span>💬 Bible talk on living room couches</span>
              </div>
            </motion.div>

            {/* Bottom Right: Kids coloring / playing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute bottom-0 right-4 w-[45%] h-[35%] rounded-3xl overflow-hidden border-4 border-warm-cream shadow-elegant hover:scale-[1.02] transition-transform duration-300 z-10 cursor-pointer"
              onClick={() => onScrollTo("expect")}
            >
              <img
                src="/src/assets/images/kids_family_1779499158968.png"
                alt="Children happy environment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-honey-gold/95 backdrop-blur-xs text-warm-charcoal px-2.5 py-0.5 rounded-md text-[10px] font-display font-bold uppercase tracking-wider">
                Family & Kids
              </div>
            </motion.div>
          </div>

        </div>

        {/* Feature/Values Strip */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <motion.div
              id={`hero-value-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-warm-card border border-warm-canvas/60 shadow-soft hover:border-clay-light/35 transition-all group hover:scale-[1.01]"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl p-2.5 bg-warm-cream rounded-xl group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sage-green text-base leading-snug">
                    {val.label}
                  </h3>
                  <p className="text-sm text-warm-gray mt-1 leading-normal">
                    {val.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
