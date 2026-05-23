import { Heart, Globe, Sparkles, Feather, BookmarkCheck, Star } from "lucide-react";
import { motion } from "motion/react";

export default function GospelSection() {
  const pathways = [
    {
      icon: <Feather className="w-5 h-5 text-clay-red" />,
      title: "Strip Back the Performance",
      pacing: "Jesus never established a high-visibility, performance-driven weekly routine. He invited simple, ordinary working people to follow Him in authentic, daily relationships.",
      focus: "Living Faith Over Ritual",
      accent: "bg-clay-light/10 text-clay-dark"
    },
    {
      icon: <Heart className="w-5 h-5 text-clay-red" />,
      title: "Experience True Family",
      pacing: "The Good News is that God wants to restore our relationship with Him and integrate us into a real, visible Kingdom Family. A safe family where you are fully known, needed, and secure.",
      focus: "Belonging Before Believing",
      accent: "bg-sage-green text-warm-cream"
    },
    {
      icon: <Star className="w-5 h-5 text-clay-red" />,
      title: "Kingdom Life Today",
      pacing: "Jesus' Message isn't just about an afterlife; it's about experiencing the peaceful, restorative Reign of God today. We walk this out as we share meals, support needs, and bear burdens together.",
      focus: "Practical Love in Action",
      accent: "bg-honey-light/20 text-sage-green"
    }
  ];

  return (
    <section id="gospel" className="py-24 bg-sage-green text-warm-cream relative overflow-hidden">
      {/* Visual background details to establish atmosphere */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-clay-light/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-honey-gold/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-honey-gold uppercase block">
            The Gospel According To Jesus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white leading-tight">
            Restoring Faith to Its<br/>
            <span className="font-serif italic text-honey-gold font-normal">Original Beauty.</span>
          </h2>
          <div className="h-0.5 w-24 bg-honey-gold mt-4" />
        </div>

        {/* Detailed Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          <div className="lg:col-span-4 space-y-6 text-left">
            <p className="text-base sm:text-lg text-sage-soft font-sans leading-relaxed">
              We believe many people are spiritually exhausted. Not because they don't love Jesus, but because they have grown tired of the corporate overhead, theological debates, and performance pressure that often decorates modern religion.
            </p>
            <p className="text-sm sm:text-base text-sage-soft/85 leading-relaxed">
              When we read the Gospel, we see a Savior who meets people around tables, breaks bread with outcasts, and measures discipleship by how sincerely we love one another. That is the faith we are striving to live out in Gwinnett.
            </p>
            
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <span className="text-xl">🕊️</span>
              <p className="text-xs text-sage-soft/90 italic">
                “A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.” — Jesus (John 13:34)
              </p>
            </div>
          </div>

          {/* Three Column Pathway Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pathways.map((path, idx) => (
              <motion.div
                id={`gospel-path-${idx}`}
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/5 shadow-soft hover:scale-[1.01] transition-all ${path.accent}`}
              >
                <div className="space-y-4 text-left">
                  <div className="w-9 h-9 rounded-xl bg-white/95 flex items-center justify-center shadow-soft">
                    {path.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-extrabold tracking-tight">
                    {path.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-90 font-sans">
                    {path.pacing}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-current/10 flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider">
                  <span>{path.focus}</span>
                  <BookmarkCheck className="w-4 h-4 shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
