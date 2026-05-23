import { useState } from "react";
import { Coffee, Utensils, MessageSquare, HandHeart, Users, HelpCircle, Check, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatToExpect() {
  const [activeTab, setActiveTab] = useState<"flow" | "fears">("flow");
  const [selectedFearId, setSelectedFearId] = useState<string | null>("fear-1");

  const eveningFlow = [
    {
      step: "01",
      icon: <Utensils className="w-6 h-6 text-clay-red" />,
      title: "6:30 PM — We Share a Meal Together",
      desc: "Our gathering starts and anchors around a shared dinner. We sit around tables, counter heights, or sofa stools. This isn't a hasty snack; it's a family meal with warm conversation and relaxed laughter.",
      details: "No agenda during the first hour. It's simply about catching up, greeting guests, eating good food, and enjoying one another's company. We love making vegetarian/gluten-free spaces so everyone feels welcomed!"
    },
    {
      step: "02",
      icon: <MessageSquare className="w-6 h-6 text-clay-red" />,
      title: "7:30 PM — Interactive Discussion",
      desc: "Nobody stands behind a podium. We read Scriptures together (often just a few verses or a chapter), ask honest questions, and seek to understand how to practice Jesus' Teachings.",
      details: "There's no pressure to be a theology expert. Questions are highly celebrated. Anyone can share their insights, and you are welcome to just sit back, listen, and digest the dialogue."
    },
    {
      step: "03",
      icon: <HandHeart className="w-6 h-6 text-clay-red" />,
      title: "8:00 PM — Prayer & Mutual Support",
      desc: "We ask 'How are you actually doing?' and spend time praying for specific needs in our families, health, or workplaces. We look for simple, concrete ways to help one another throughout Gwinnett.",
      details: "It is personal, gentle, and strictly voluntary. We pray as friends, in simple conversational words—no dramatic performances or religious jargon required."
    },
    {
      step: "04",
      icon: <Users className="w-6 h-6 text-clay-red" />,
      title: "8:30 PM — Dessert & Coffee",
      desc: "We wrap up official prayers but don't rush away. Kids wrap up play, coffee is brewed, and we chat around the kitchen until people naturally decide to head home.",
      details: "This is often where the deepest, most genuine friendships are formed. You can stay as long as you'd like, or excuse yourself whenever you need to put the kids to bed."
    }
  ];

  const fears = [
    {
      id: "fear-1",
      question: "Will I be put on the spot or forced to talk?",
      solution: "Absolutely not.",
      answer: "We absolutely hate awkward church interactions. You will never be asked to stand up, introduce yourself, pray out loud, or read Scripture. You are fully welcome to just eat dinner, sip coffee, observe, and relax. Your presence alone is a huge gift to us.",
      tag: "Social Comfort"
    },
    {
      id: "fear-2",
      question: "What should I do with my children?",
      solution: "Bring them! Children are fully embraced here.",
      answer: "We don't isolate children into distant institutional classrooms. Kids are considered a super vital part of our house family! They eat dinner or play with other kids in designated safe spaces nearby. They are welcome to wiggle, laugh, and be precisely who they are.",
      tag: "For Families"
    },
    {
      id: "fear-3",
      question: "What should I wear? Is there a dress code?",
      solution: "Wear whatever you wear on a regular Tuesday night.",
      answer: "T-shirts, jeans, sweaters, shorts, or gym clothes are perfect. Since we are gathering in real living rooms, dress strictly for comfort. No religious formality, suits, or dresses required.",
      tag: "What to Wear"
    },
    {
      id: "fear-4",
      question: "Do I need to belong to a specific denomination?",
      solution: "No, we center purely on Jesus.",
      answer: "Our house churches include people from various theological backgrounds, as well as those who are just questioning or exploring faith for the first time. We focus strictly on following Jesus and experiencing loving community, not enforcing sectarian religion.",
      tag: "Beliefs"
    }
  ];

  return (
    <section id="expect" className="py-24 bg-warm-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-clay-red uppercase block">
            No Secrets, No Formality
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-sage-green tracking-tight">
            What Actually Happens When You Show Up?
          </h2>
          <p className="text-base sm:text-lg text-warm-gray mt-4">
            Most visitors feel a bit nervous before entering a new living room. We want to reduce that fear by walking you through exactly what to expect.
          </p>

          {/* Clean Rounded Tabs styled with Warm Terracotta & Deep Sage */}
          <div className="inline-flex p-1.5 rounded-2xl bg-warm-canvas/50 mt-8">
            <button
              id="expect-tab-flow"
              onClick={() => setActiveTab("flow")}
              className={`px-6 py-2 rounded-xl text-sm font-display font-bold transition-all cursor-pointer ${
                activeTab === "flow"
                  ? "bg-sage-green text-warm-cream shadow-soft"
                  : "text-warm-gray hover:text-sage-green"
              }`}
            >
              🌙 The Evening Flow
            </button>
            <button
              id="expect-tab-fears"
              onClick={() => {
                setActiveTab("fears");
                // Pre-populate if null
                if (!selectedFearId) setSelectedFearId("fear-1");
              }}
              className={`px-6 py-2 rounded-xl text-sm font-display font-bold transition-all cursor-pointer ${
                activeTab === "fears"
                  ? "bg-sage-green text-warm-cream shadow-soft"
                  : "text-warm-gray hover:text-sage-green"
              }`}
            >
              ❤️ Addressing Your Nervousness
            </button>
          </div>
        </div>

        {/* Tab Selection Content */}
        <div>
          <AnimatePresence mode="wait">
            {activeTab === "flow" ? (
              <motion.div
                id="expect-flow-panel"
                key="flow"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {eveningFlow.map((item, idx) => (
                  <div
                    id={`flow-step-${idx}`}
                    key={idx}
                    className="p-8 rounded-3xl bg-warm-card border border-warm-canvas/60 shadow-soft hover:border-clay-light/35 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono font-black text-clay-red bg-clay-light/10 px-3.5 py-1 rounded-lg">
                          {item.step}
                        </span>
                        <div className="p-2.5 bg-warm-cream rounded-xl">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-black text-sage-green">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-5 border-t border-warm-canvas/50 bg-sage-soft/30 p-4 rounded-xl">
                      <p className="text-xs text-sage-light font-medium italic flex gap-1.5">
                        <span className="shrink-0 text-clay-red">📍 Note:</span>
                        <span>{item.details}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                id="expect-fears-panel"
                key="fears"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Fear Navigation List (5 Cols) */}
                <div className="lg:col-span-5 space-y-3">
                  {fears.map((fear) => {
                    const isSelected = selectedFearId === fear.id;
                    return (
                      <button
                        id={`fear-btn-${fear.id}`}
                        key={fear.id}
                        onClick={() => setSelectedFearId(fear.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-clay-light/15 border-clay-light text-clay-dark font-semibold shadow-soft"
                            : "bg-warm-card border-warm-canvas/60 text-warm-gray hover:border-clay-light/40 hover:bg-warm-canvas/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle className={`w-5 h-5 shrink-0 ${isSelected ? "text-clay-red" : "text-warm-gray/60"}`} />
                          <span className="text-sm sm:text-base font-display font-bold leading-tight">
                            {fear.question}
                          </span>
                        </div>
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                          isSelected ? "bg-clay-red text-warm-cream" : "bg-warm-cream text-warm-gray"
                        }`}>
                          {fear.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Fear Detail Answer Card (7 Cols) */}
                <div className="lg:col-span-7">
                  <AnimatePresence mode="wait">
                    {selectedFearId && (
                      <motion.div
                        id="fear-answer-card"
                        key={selectedFearId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="p-8 sm:p-10 rounded-3xl bg-sage-green text-warm-cream shadow-elegant border border-sage-light/20"
                      >
                        <div className="space-y-6">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-honey-gold animate-ping" />
                            <span className="text-xs font-mono font-bold tracking-wider text-honey-gold uppercase">
                              Visitor Assurance Plan
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-display font-extrabold leading-tight text-white border-b border-sage-light/35 pb-4">
                            "{fears.find((f) => f.id === selectedFearId)?.question}"
                          </h3>

                          <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 text-honey-gold text-xs font-mono font-bold uppercase tracking-wide">
                              <Check className="w-4 h-4" />
                              <span>{fears.find((f) => f.id === selectedFearId)?.solution}</span>
                            </div>

                            <p className="text-base sm:text-lg text-sage-soft/90 leading-relaxed font-sans font-light">
                              {fears.find((f) => f.id === selectedFearId)?.answer}
                            </p>
                          </div>

                          <div className="pt-6 border-t border-sage-light/25 flex flex-wrap gap-4 text-xs font-mono text-sage-soft/70">
                            <span>🤝 No pressure of performance</span>
                            <span>•</span>
                            <span>🌻 Simply come and check it out</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
