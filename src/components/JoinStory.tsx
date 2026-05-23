import React, { useState } from "react";
import { MessageSquare, ThumbsUp, Sparkles, Send, HelpCircle, CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial, FAQ } from "../types";

export default function JoinStory() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fName, setFName] = useState("");
  const [fContact, setFContact] = useState("");
  const [fMessage, setFMessage] = useState("");

  const testimonials: Testimonial[] = [
    {
      id: "test-1",
      name: "Hannah K.",
      role: "Duluth Resident",
      quote: "I finally felt known. After years of sitting in large auditoriums facing stage lights, having real neighbors serve me dinner on their sofa completely changed my faith. This is active family, not weekly entertainment.",
      location: "Duluth Gathering"
    },
    {
      id: "test-2",
      name: "Miguel R.",
      role: "Lawrenceville Resident",
      quote: "My children actually look forward to gathering with believers now. They aren't separated into segregated corporate nursery structures; they are embraced, loved, and fully integrated with the whole church family.",
      location: "Lawrenceville Gathering"
    },
    {
      id: "test-3",
      name: "Sarah T.",
      role: "Suwanee Resident & Teacher",
      quote: "No spiritual performance or political pressure. Just ordinary teachers, builders, and parents sharing comfortable living rooms, opening our Bibles collectively, and helping each other in real Gwinnett County life.",
      location: "Suwanee Gathering"
    }
  ];

  const faqs: FAQ[] = [
    {
      id: "faq-1",
      question: "Are you associated with a specific denomination?",
      answer: "No. We are a non-denominational network of independent house churches. We center purely around the Person and Teachings of Jesus Christ as expressed in standard Scriptures (Acts 2:42). We bless, love, and support all local Christian congregations in Gwinnett!",
      reducingFear: "You do not need to sign any religious bylaws to visit. We embrace everyone."
    },
    {
      id: "faq-2",
      question: "What actually happens with contributions or money?",
      answer: "Because we meet in real homes, we have zero corporate overhead, staff salaries, building mortgages, or light productions to fund. 100% of any collection goes directly to assisting families, feeding local neighbors in need, and supporting local missionary work.",
      reducingFear: "Finances are fully transparent and handled collectively with absolute zero pressure."
    },
    {
      id: "faq-3",
      question: "Is this weird or like a cult?",
      answer: "We know that meeting in homes sounds strange to those who grew up in corporate buildings! But house church is actually the oldest, most historic way church has ever existed. We are simply average Gwinnett citizens-teachers, small business owners, nurses, and students-who love Jesus and want real, honest community over institutions.",
      reducingFear: "Everything is wide open. You can ask anything, visit once, and leave with absolutely zero follow-up or pressure."
    },
    {
      id: "faq-4",
      question: "Can I host a gathering in my house?",
      answer: "Absolutely! If you love hospitality, have a sofa or kitchen table, and want to support neighbors in following Jesus, we'd love to coach and support you in starting a cozy house gathering in your corner of Gwinnett.",
      reducingFear: "We walk you through step-by-step to make hosting incredibly simple, warm, and natural."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fName || !fContact) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-warm-canvas/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Banner (Visual Slider) */}
        <div className="bg-warm-card border border-warm-canvas/80 p-8 sm:p-12 rounded-[32px] shadow-elegant mb-24 relative overflow-hidden text-center">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-clay-red">
            Real Gwinnett Human Voices
          </span>
          
          <div className="max-w-3xl mx-auto mt-6 min-h-[160px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-xl sm:text-2xl font-serif italic text-sage-green leading-relaxed text-center">
                  "{testimonials[activeTestimonialIdx].quote}"
                </p>
                <div>
                  <strong className="text-sm font-display font-bold text-warm-charcoal block">
                    {testimonials[activeTestimonialIdx].name}
                  </strong>
                  <span className="text-xs uppercase tracking-wider text-warm-gray font-semibold font-mono">
                    {testimonials[activeTestimonialIdx].role} • {testimonials[activeTestimonialIdx].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                id={`testimonial-dot-${idx}`}
                key={idx}
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeTestimonialIdx === idx ? "w-8 bg-clay-red" : "w-2 bg-warm-canvas hover:bg-clay-light"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contact Form & FAQ Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Accordion (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-clay-red uppercase">
                Answering nerves
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-sage-green">
                Common Biblical & Practical Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = faqOpenIdx === idx;
                return (
                  <div
                    id={`faq-item-${idx}`}
                    key={idx}
                    className="border border-warm-canvas/60 rounded-2xl bg-warm-card overflow-hidden shadow-soft transition-all"
                  >
                    <button
                      id={`faq-toggle-btn-${idx}`}
                      onClick={() => setFaqOpenIdx(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-display font-bold text-sage-green text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:bg-warm-cream/35 transition-colors"
                    >
                      <span className="leading-tight">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-clay-red transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-content-${idx}`}
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 space-y-4 text-xs sm:text-sm text-warm-gray border-t border-warm-canvas/30 bg-warm-cream/15 font-sans leading-relaxed">
                            <p>{faq.answer}</p>
                            <div className="px-3.5 py-2.5 bg-sage-soft border border-sage-light/15 rounded-xl text-sage-light flex gap-2 items-start">
                              <span className="text-clay-red shrink-0 text-sm">🌻</span>
                              <p className="text-[11px] font-mono leading-tight">{faq.reducingFear}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simple Contact Form (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-3xl bg-warm-card border border-warm-canvas shadow-soft text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 h-20 w-20 bg-clay-light/5 rounded-full filter blur-xl" />

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.div
                    id="contact-form-wrapper"
                    key="write"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h4 className="text-xl font-display font-black text-sage-green">
                        Still have questions? Let's talk.
                      </h4>
                      <p className="text-xs text-warm-gray leading-relaxed font-sans">
                        Feel free to ask us anything. Whether, you want to coordinates, need rides, or want to understand what house church families look like, we respond as helpful neighbors.
                      </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
                      <div>
                        <label className="block text-xs font-mono font-bold text-sage-green uppercase tracking-wide mb-1">
                          My Name
                        </label>
                        <input
                          id="contact-name-input"
                          type="text"
                          required
                          value={fName}
                          onChange={(e) => setFName(e.target.value)}
                          placeholder="e.g., Benjamin Thompson"
                          className="w-full px-4 py-3 text-sm bg-warm-cream border border-warm-canvas/60 rounded-xl focus:outline-none focus:border-clay-red"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-sage-green uppercase tracking-wide mb-1">
                          Text Number or Email
                        </label>
                        <input
                          id="contact-info-input"
                          type="text"
                          required
                          value={fContact}
                          onChange={(e) => setFContact(e.target.value)}
                          placeholder="e.g., ben@example.com / (678) 555-4321"
                          className="w-full px-4 py-3 text-sm bg-warm-cream border border-warm-canvas/60 rounded-xl focus:outline-none focus:border-clay-red"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-sage-green uppercase tracking-wide mb-1">
                          My Note
                        </label>
                        <textarea
                          id="contact-message-input"
                          required
                          value={fMessage}
                          onChange={(e) => setFMessage(e.target.value)}
                          placeholder="e.g., Hey! We are moving to Duluth next month and have kids. Would love to know which house gathering would be closest..."
                          rows={3}
                          className="w-full px-4 py-3 text-sm bg-warm-cream border border-warm-canvas/60 rounded-xl focus:outline-none focus:border-clay-red resize-none"
                        />
                      </div>

                      <button
                        id="contact-submit-btn"
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-clay-red hover:bg-clay-dark text-warm-cream font-display font-bold text-sm transition-all shadow-soft cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    id="contact-success-wrapper"
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6 space-y-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-sage-green/10 flex items-center justify-center mx-auto text-sage-green">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xl font-display font-black text-sage-green">
                        Message Dispatched!
                      </h4>
                      <p className="text-xs text-warm-gray font-sans max-w-xs mx-auto">
                        Hi <strong className="text-clay-red">{fName}</strong>, we have received your question and will respond as human neighbors soon.
                      </p>
                    </div>

                    <div className="p-4 bg-sage-soft border border-sage-light/20 rounded-xl text-left text-xs text-sage-light font-mono space-y-2">
                      <p>✅ Standard response latency: Under 12 hours</p>
                      <p>✅ Direct friendly representative, absolutely no auto-spam systems.</p>
                    </div>

                    <button
                      id="contact-reset-btn"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFName("");
                        setFContact("");
                        setFMessage("");
                      }}
                      className="px-4 py-1.5 border border-warm-canvas text-xs font-mono text-warm-gray hover:text-clay-red rounded-lg mx-auto cursor-pointer block"
                    >
                      ← Send another message
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
