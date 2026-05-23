import { useState } from "react";
import { Search, Calendar, Users2, MapPin, Baby, Sparkles, MessageCircle, Mail, AlertCircle, Heart, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Gathering } from "../types";

export default function Gatherings() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>("All");
  const [selectedDay, setSelectedDay] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [contactingHostId, setContactingHostId] = useState<string | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState<string | null>(null);
  const [contactName, setContactName] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const locations: Gathering[] = [
    {
      id: "gat-1",
      hostName: "Marcus & Leah Davis",
      region: "Lawrenceville",
      neighborhood: "Near Rhodes Jordan Park",
      dayTime: "Thursdays at 6:30 PM",
      schedule: "Weekly shared dinner followed by casual discussion & warm encouragement.",
      atmosphere: "Vibrant family feel, delicious home-cooked barbecue and southern food.",
      kidsWelcome: "Yes! Dedicated safe playroom, several children ages 3-10 attending.",
      size: "12-15 regulars",
      coordinates: { x: 50, y: 55 }
    },
    {
      id: "gat-2",
      hostName: "Jonathan & Chloe Kim",
      region: "Duluth",
      neighborhood: "Near Sugarloaf Mills Area",
      dayTime: "Sundays at 5:00 PM",
      schedule: "Weekend shared meal, open Bible reading, and gentle conversational prayer.",
      atmosphere: "Multi-generational, reflective, shared Korean-American dishes and cozy sofa discussions.",
      kidsWelcome: "Yes! Highchairs, crayons, and friendly teens who facilitate block play.",
      size: "10-14 regulars",
      coordinates: { x: 30, y: 40 }
    },
    {
      id: "gat-3",
      hostName: "Thomas & Sarah Bennett",
      region: "Suwanee",
      neighborhood: "Near Suwanee Town Center",
      dayTime: "Tuesdays at 6:45 PM",
      schedule: "Midweek pause, coffee/pastries, simple worship songs, and encouraging chats.",
      atmosphere: "Fireside discussions, artistic, peaceful environment, and organic local foods.",
      kidsWelcome: "Yes! Safe enclosed back porch and plenty of dynamic board games.",
      size: "8-12 regulars",
      coordinates: { x: 35, y: 20 }
    },
    {
      id: "gat-4",
      hostName: "Eli & Gabriela Santos",
      region: "Buford",
      neighborhood: "Near Mall of Georgia",
      dayTime: "Fridays at 7:00 PM",
      schedule: "Kick off the weekend with lively shared dinners, outdoor firepits, and storytelling.",
      atmosphere: "High-energy, lots of laughter, outdoor patio gatherings, and Latin-inspired shared plates.",
      kidsWelcome: "Absolutely! Enclosed backyard, trampoline, and youth-friendly mentors.",
      size: "14-18 regulars",
      coordinates: { x: 60, y: 15 }
    },
    {
      id: "gat-5",
      hostName: "David & Rebecca Thompson",
      region: "Snellville",
      neighborhood: "Near Brookwood School Area",
      dayTime: "Wednesdays at 6:30 PM",
      schedule: "Midweek family table, kid-integrated story learning, and supportive prayer loops.",
      atmosphere: "Cozy suburban home, comforting casseroles, and highly family-focused pacing.",
      kidsWelcome: "Extremely welcoming! Complete nursery setup and toddler-safe play zones.",
      size: "15-20 regulars",
      coordinates: { x: 65, y: 75 }
    },
    {
      id: "gat-6",
      hostName: "Samuel & Abigail Perez",
      region: "Lilburn",
      neighborhood: "Near Lilburn City Park",
      dayTime: "Saturdays at 10:30 AM",
      schedule: "Weekend morning brunch, shared prayer circles, and walking together in the neighborhood.",
      atmosphere: "Comforting morning brunch, eggs, pancakes, coffee, and very relaxed strolls.",
      kidsWelcome: "Yes! Very close to park playground. Extremely child friendly.",
      size: "7-11 regulars",
      coordinates: { x: 25, y: 70 }
    }
  ];

  const neighborhoodsList = ["All", ...Array.from(new Set(locations.map((loc) => loc.region)))];
  const daysList = ["All", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const filteredLocations = locations.filter((loc) => {
    const matchesNeighborhood = selectedNeighborhood === "All" || loc.region === selectedNeighborhood;
    const matchesDay = selectedDay === "All" || loc.dayTime.includes(selectedDay);
    const matchesSearch =
      searchQuery === "" ||
      loc.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.hostName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.schedule.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.neighborhood.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesNeighborhood && matchesDay && matchesSearch;
  });

  const handleRsvpSubmit = (gatheringId: string) => {
    if (!contactName || !contactInfo) return;
    setRsvpSuccess(gatheringId);
    setContactingHostId(null);
    setContactName("");
    setContactInfo("");
  };

  return (
    <section id="gatherings" className="py-24 bg-warm-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-clay-red uppercase block">
            House Directories
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-sage-green tracking-tight">
            Find an Open Table & Couch Near You
          </h2>
          <div className="h-1 w-20 bg-clay-red mx-auto rounded-full mt-4" />
          <p className="text-base sm:text-lg text-warm-gray mt-6">
            We meet in actual neighborhoods throughout Gwinnett County. Our gatherings are entirely free, fully centered around genuine relationships, and anyone is invited to join the meal.
          </p>
        </div>

        {/* Dashboard Control Panel representing vibrant choices */}
        <div className="p-6 rounded-3xl bg-warm-canvas/40 border border-warm-canvas border-dashed shadow-soft mb-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search query box */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-sage-light" />
              <input
                id="search-gatherings-input"
                type="text"
                placeholder="Search hosts, towns, food or vibe..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm bg-warm-card border border-warm-canvas/80 rounded-xl focus:outline-none focus:border-clay-red font-sans"
              />
            </div>

            {/* Neighborhood filter selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-sage-green uppercase tracking-wide">
                Town:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {neighborhoodsList.map((n) => (
                  <button
                    id={`filter-town-${n}`}
                    key={n}
                    onClick={() => setSelectedNeighborhood(n)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold cursor-pointer transition-all ${
                      selectedNeighborhood === n
                        ? "bg-sage-green text-warm-cream shadow-soft"
                        : "bg-warm-card text-warm-gray border border-warm-canvas/50 hover:bg-warm-cream"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Day filter selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-sage-green uppercase tracking-wide">
                Day:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <select
                  id="filter-day-select"
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="px-3 py-2 text-xs font-display font-bold rounded-lg bg-warm-card border border-warm-canvas/50 text-warm-gray focus:outline-none focus:border-clay-red cursor-pointer"
                >
                  {daysList.map((d) => (
                    <option key={d} value={d}>
                      {d === "All" ? "Any Day of the Week" : d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Directory Card Grid representing clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredLocations.map((loc) => (
              <motion.div
                id={`gathering-card-${loc.id}`}
                key={loc.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl bg-warm-card border border-warm-canvas shadow-soft hover:shadow-elegant flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual badge top right representing warmth atmosphere */}
                <div className="absolute top-0 right-0 h-48 w-48 bg-clay-light/5 rounded-full filter blur-2xl group-hover:bg-clay-light/10 transition-colors -z-10" />

                <div className="space-y-6">
                  {/* Host tag & neighborhood details */}
                  <div className="flex items-start justify-between gap-2 border-b border-warm-canvas/50 pb-4">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-clay-red bg-clay-light/10 px-2.5 py-0.5 rounded-md uppercase tracking-wide">
                        <MapPin className="w-3 h-3" />
                        {loc.region}
                      </span>
                      <h3 className="text-xl font-display font-bold text-sage-green pt-1 group-hover:text-clay-red transition-colors">
                        {loc.hostName}
                      </h3>
                      <p className="text-xs text-warm-gray font-sans font-medium italic">
                        {loc.neighborhood}
                      </p>
                    </div>
                    <div className="w-10 h-10 shrink-0 rounded-full bg-warm-cream flex items-center justify-center text-lg shadow-inner select-none">
                      🏡
                    </div>
                  </div>

                  {/* Operational meeting info */}
                  <div className="space-y-4 text-sm font-sans">
                    <div className="flex gap-2.5 items-start">
                      <Calendar className="w-4 h-4 text-sage-light mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-sage-green block font-medium">When we gather:</strong>
                        <span className="text-warm-gray text-xs">{loc.dayTime}</span>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <Users2 className="w-4 h-4 text-sage-light mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-sage-green block font-medium">What is on the schedule:</strong>
                        <span className="text-warm-gray text-xs block leading-relaxed">{loc.schedule}</span>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <Heart className="w-4 h-4 text-sage-light mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-sage-green block font-medium">Atmosphere & Food:</strong>
                        <span className="text-warm-gray text-xs block leading-relaxed">{loc.atmosphere}</span>
                      </div>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <Baby className="w-4 h-4 text-sage-light mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-sage-green block font-medium">What about kids?:</strong>
                        <span className="text-warm-gray text-xs block leading-relaxed">{loc.kidsWelcome}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="mt-8 pt-5 border-t border-warm-canvas/50 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-warm-gray font-semibold">
                    <span>Group Capacity:</span>
                    <span className="text-sage-green font-bold">{loc.size}</span>
                  </div>

                  {rsvpSuccess === loc.id ? (
                    <div className="p-3 bg-sage-soft border border-sage-light/30 rounded-xl text-sage-green text-xs font-mono font-medium flex items-center justify-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Host notified! We will text you.</span>
                    </div>
                  ) : contactingHostId === loc.id ? (
                    <div className="p-4 bg-warm-cream border border-clay-light/30 rounded-xl space-y-3 text-left">
                      <p className="text-xs font-mono font-bold text-sage-green uppercase tracking-wide">
                        Notify {loc.hostName}:
                      </p>
                      <input
                        id={`contact-host-name-${loc.id}`}
                        type="text"
                        placeholder="Your name"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-warm-card border border-warm-canvas rounded focus:outline-none"
                      />
                      <input
                        id={`contact-host-number-${loc.id}`}
                        type="text"
                        placeholder="Your text or email"
                        required
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-warm-card border border-warm-canvas rounded focus:outline-none"
                      />
                      <div className="flex gap-2">
                        <button
                          id={`rsvp-submit-btn-${loc.id}`}
                          onClick={() => handleRsvpSubmit(loc.id)}
                          className="px-3 py-1 bg-clay-red text-warm-cream text-xs rounded font-bold hover:bg-clay-dark transition-all cursor-pointer"
                        >
                          Send
                        </button>
                        <button
                          id={`rsvp-cancel-btn-${loc.id}`}
                          onClick={() => setContactingHostId(null)}
                          className="px-3 py-1 bg-warm-canvas text-warm-gray text-xs rounded hover:bg-warm-canvas/80 transition-all cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      id={`contact-host-btn-${loc.id}`}
                      onClick={() => {
                        setContactingHostId(loc.id);
                        setContactName("");
                        setContactInfo("");
                      }}
                      className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-sage-green hover:bg-sage-light text-warm-cream font-display font-bold text-xs transition-all shadow-soft cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Let Host Couple Know You're Visiting</span>
                    </button>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state represents filter results fallback */}
          {filteredLocations.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-12 text-center bg-warm-canvas/20 border border-dashed border-warm-canvas rounded-3xl space-y-4">
              <AlertCircle className="w-12 h-12 text-clay-red mx-auto" />
              <h3 className="text-lg font-display font-bold text-sage-green">
                No gatherings match your search.
              </h3>
              <p className="text-sm text-warm-gray max-w-md mx-auto">
                No worries! Adjust your neighborhood filters, or reach out to us directly. We can frequently arrange transportation, or let you know of new tables preparing to start!
              </p>
              <button
                id="reset-filters-btn"
                onClick={() => {
                  setSelectedNeighborhood("All");
                  setSelectedDay("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-clay-red text-warm-cream text-xs font-mono font-bold uppercase rounded-lg hover:bg-clay-dark cursor-pointer mt-2"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
