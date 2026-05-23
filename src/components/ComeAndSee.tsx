import React, { useState } from "react";
import { Coffee, Send, Calendar, CheckCircle2, MessageSquareText, ShieldAlert, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ComeAndSee() {
  const [activeStep, setActiveStep] = useState<"write" | "done">("write");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    neighborhood: "Lawrenceville",
    preferences: "coffee",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setActiveStep("done");
  };

  return (
    <section id="come-and-see" className="py-24 bg-warm-canvas/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Come & See Heartfelt Letter (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-clay-red uppercase block">
                Our Hearth
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-sage-green leading-[1.1]">
                A Simple, Warm Invitation:<br/>
                <span className="font-serif italic font-normal text-clay-red font-display mt-2 block">
                  Come and See.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-warm-charcoal font-sans leading-relaxed">
              <p className="font-semibold text-sage-green text-lg">
                We know many people are tired of performance-driven religion and disconnected, spectator-style church experiences. 
              </p>
              
              <p>
                What we has found is simple but powerful: believers grow deeply when they live life together in authentic community centered around Jesus. Not sitting in quiet pews facing a elevated stage, but sitting in circles around dinner tables.
              </p>

              <blockquote className="border-l-4 border-clay-light pl-4 font-serif italic text-sage-light text-xl bg-warm-canvas/20 py-3 pr-4 rounded-r-xl">
                "Our gatherings are relaxed, participatory, family-oriented, and centered around relationship with God and one another."
              </blockquote>

              <p>
                No pressure. No performance. Just ordinary Gwinnett residents learning to follow Jesus together in a relaxed environment.
              </p>

              <h4 className="font-serif italic text-2xl font-semibold text-clay-red">
                We would genuinely love for you to come and see.
              </h4>
            </div>

            {/* Simulated signatures for personalization */}
            <div className="pt-4 flex items-center gap-6">
              <div>
                <span className="font-serif italic text-2xl text-sage-green block select-none">
                  Marcus & Leah
                </span>
                <span className="text-xs font-mono text-warm-gray uppercase tracking-wider block">
                  Lawrenceville Hosts
                </span>
              </div>
              <div className="h-8 w-px bg-warm-canvas/60" />
              <div>
                <span className="font-serif italic text-2xl text-sage-green block select-none">
                  Eli & Gabriela
                </span>
                <span className="text-xs font-mono text-warm-gray uppercase tracking-wider block">
                  Buford Hosts
                </span>
              </div>
              <div className="h-8 w-px bg-warm-canvas/60" />
              <div>
                <span className="font-serif italic text-2xl text-sage-green block select-none">
                  Jonathan & Chloe
                </span>
                <span className="text-xs font-mono text-warm-gray uppercase tracking-wider block">
                  Duluth Hosts
                </span>
              </div>
            </div>
          </div>

          {/* Interactive booking box (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* Soft decorative golden highlight */}
            <div className="absolute top-1/2 -right-12 w-48 h-48 bg-honey-gold/15 rounded-full filter blur-3xl -z-10" />
            
            <div className="p-8 rounded-3xl bg-warm-card border border-warm-canvas/80 shadow-elegant relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-clay-red" />

              <AnimatePresence mode="wait">
                {activeStep === "write" ? (
                  <motion.div
                    id="booking-form-wrapper"
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center mb-6 space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-clay-light/10 flex items-center justify-center mx-auto text-clay-red shadow-soft">
                        <Coffee className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-display font-black text-sage-green">
                        Too shy to visit straight away?
                      </h3>
                      <p className="text-xs text-warm-gray max-w-xs mx-auto">
                        That is completely okay! Meet a warm host for casual coffee, tea, or a juice in Gwinnett County first. Let's chat on neutral ground.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <div>
                        <label className="block text-xs font-mono font-bold text-sage-green uppercase tracking-wider mb-1">
                          My Name
                        </label>
                        <input
                          id="booking-input-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Emily Rodriguez"
                          className="w-full px-4 py-3 text-sm bg-warm-cream border border-warm-canvas/60 rounded-xl focus:outline-none focus:border-clay-red font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-sage-green uppercase tracking-wider mb-1">
                          Text Number or Email
                        </label>
                        <input
                          id="booking-input-contact"
                          type="text"
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          placeholder="e.g., (770) 555-0192"
                          className="w-full px-4 py-3 text-sm bg-warm-cream border border-warm-canvas/60 rounded-xl focus:outline-none focus:border-clay-red font-sans"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-mono font-bold text-sage-green uppercase tracking-wider mb-1">
                            Nearest Town
                          </label>
                          <select
                            id="booking-select-town"
                            value={formData.neighborhood}
                            onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                            className="w-full px-3 py-3 text-sm bg-warm-cream border border-warm-canvas/60 rounded-xl focus:outline-none focus:border-clay-red font-sans cursor-pointer"
                          >
                            <option value="Lawrenceville">Lawrenceville</option>
                            <option value="Duluth">Duluth</option>
                            <option value="Suwanee">Suwanee</option>
                            <option value="Buford">Buford</option>
                            <option value="Snellville">Snellville</option>
                            <option value="Lilburn">Lilburn</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold text-sage-green uppercase tracking-wider mb-1">
                            Preferences
                          </label>
                          <select
                            id="booking-select-type"
                            value={formData.preferences}
                            onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                            className="w-full px-3 py-3 text-sm bg-warm-cream border border-warm-canvas/60 rounded-xl focus:outline-none focus:border-clay-red font-sans cursor-pointer"
                          >
                            <option value="coffee">☕ Coffee first</option>
                            <option value="call">📞 Quick phone call</option>
                            <option value="chat">💬 Text chat</option>
                            <option value="home">🏡 Direct house visit</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-sage-green uppercase tracking-wider mb-1">
                          Any specific questions? (Optional)
                        </label>
                        <textarea
                          id="booking-input-message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="e.g., What should I expect for my 4 year old? / Can I bring a friend?"
                          rows={2}
                          className="w-full px-4 py-3 text-sm bg-warm-cream border border-warm-canvas/60 rounded-xl focus:outline-none focus:border-clay-red font-sans resize-none"
                        />
                      </div>

                      <button
                        id="booking-submit-btn"
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-clay-red hover:bg-clay-dark text-warm-cream font-display font-bold text-sm transition-all shadow-soft cursor-pointer mt-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message to Gwinnett Family</span>
                      </button>

                      <p className="text-[10px] text-warm-gray text-center font-mono mt-2 leading-none">
                        🔒 Safe & Respectful contact. No spam/unsolicited calls ever.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    id="booking-success-wrapper"
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-sage-green/10 flex items-center justify-center mx-auto text-sage-green">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-display font-black text-sage-green">
                        Warmly Received!
                      </h3>
                      <p className="text-sm text-warm-gray max-w-sm mx-auto">
                        Thank you so much, <strong className="text-clay-red">{formData.name}</strong>. We treat relationship as our highest priority.
                      </p>
                    </div>

                    <div className="p-4 bg-sage-soft border border-sage-light/25 rounded-2xl text-left space-y-3">
                      <p className="text-xs text-sage-light leading-relaxed">
                        🏡 One of our helpful host couples in <strong className="text-clay-red">{formData.neighborhood}</strong> has been notified! 
                      </p>
                      <ul className="text-xs text-warm-gray space-y-1.5 list-disc pl-4 font-mono">
                        <li>We'll contact you via <strong className="text-sage-green">{formData.contact}</strong></li>
                        <li>We'll keep things exceptionally casual (no religious quizzes!)</li>
                        <li>We will coordinate a tasty {formData.preferences} on us</li>
                      </ul>
                    </div>

                    <button
                      id="booking-reset-btn"
                      onClick={() => {
                        setActiveStep("write");
                        setFormData({ name: "", contact: "", neighborhood: "Lawrenceville", preferences: "coffee", message: "" });
                      }}
                      className="px-6 py-2 border border-warm-canvas text-xs font-mono text-warm-gray hover:text-clay-red rounded-lg text-center mx-auto cursor-pointer block"
                    >
                      ← Send another note
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
