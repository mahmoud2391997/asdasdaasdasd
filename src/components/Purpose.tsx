import { Coffee, Search, ArrowRight, Home, Users, Heart, Milestone } from "lucide-react";
import { motion } from "motion/react";

interface PurposeProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Purpose({ onScrollTo }: PurposeProps) {
  const points = [
    {
      role: "WHO WE ARE",
      title: "A Jesus-Centered Family",
      desc: "Not an audience in a dark stadium or list of names. We are active believers, neighbors, parents, and friends in Gwinnett County learning to follow Jesus in daily, real relationships.",
      themeColor: "bg-clay-light/10 border-clay-light/30 text-sage-green",
      icon: <Users className="w-6 h-6 text-clay-red" />,
      tag: "Relational, not Institutional"
    },
    {
      role: "WHAT WE DO",
      title: "Gather in Homes & Share Life",
      desc: "We clear the living room sofas, cook comforting meals together, share prayer, examine Scriptures openly, and support one another in the practical details of weekly Gwinnett life.",
      themeColor: "bg-sage-green text-warm-cream border-sage-light/20",
      icon: <Home className="w-6 h-6 text-honey-gold" />,
      tag: "Dinner & Bible Conversation"
    },
    {
      role: "WHY WE EXIST",
      title: "Real Kingdom Belonging",
      desc: "Because Jesus didn't build a weekly production; He built a family. We exist so that nobody in our County has to navigate spiritual life or personal trials in isolating crowds.",
      themeColor: "bg-honey-light/20 border-honey-gold/30 text-sage-green",
      icon: <Heart className="w-6 h-6 text-honey-gold" />,
      tag: "Known, Needed, & Loved"
    }
  ];

  return (
    <section id="purpose" className="py-24 bg-warm-canvas/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-clay-red uppercase block">
            The 10-Second Test
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-sage-green tracking-tight leading-tight">
            Simple Faith. Genuine Connection.<br/>
            <span className="font-serif italic font-normal text-clay-red">No Performance.</span>
          </h2>
          <div className="h-1 w-20 bg-clay-red mx-auto rounded-full mt-4" />
          <p className="text-base sm:text-lg text-warm-gray mt-6 max-w-2xl mx-auto">
            If you have grown tired of performance-oriented church programs, discover what faith looks like stripped back to its first-century essentials.
          </p>
        </div>

        {/* Core Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <motion.div
              id={`purpose-card-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 rounded-3xl border shadow-soft flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 ${pt.themeColor}`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider opacity-90 uppercase">
                    {pt.role}
                  </span>
                  <div className="p-3 bg-warm-card rounded-xl shadow-soft">
                    {pt.icon}
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider font-mono uppercase bg-warm-card/70 text-clay-red shadow-xs">
                    {pt.tag}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold tracking-tight">
                    {pt.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90">
                    {pt.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-current/10 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider">
                <Milestone className="w-4 h-4" />
                <span>Active County Network</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What They Should Do Next Action Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 sm:p-10 rounded-3xl bg-sage-green text-warm-cream flex flex-col md:flex-row items-center justify-between gap-6 shadow-elegant"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-display font-extrabold">
              Ready to meet some Gwinnett neighbors?
            </h4>
            <p className="text-xs sm:text-sm text-sage-soft/80 max-w-xl">
              We gather on different nights across Lawrenceville, Dululth, Buford, Snellville, Lilburn, and Suwanee. Our doors are wide open.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              id="purpose-visit-btn"
              onClick={() => onScrollTo("gatherings")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-honey-gold text-warm-charcoal font-display font-bold text-sm hover:bg-white transition-all duration-200 shadow-soft cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Find a Gathering Near Me</span>
            </button>
            <button
              id="purpose-expect-btn"
              onClick={() => onScrollTo("expect")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-warm-cream/30 text-warm-cream hover:bg-warm-cream hover:text-sage-green transition-all duration-200 text-sm font-display font-bold cursor-pointer"
            >
              <span>See What It's Like First</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
