import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
 // adjust path if needed

// ─── Sample Data (replace with API call later) ────────────────────────────────
const SAMPLE_UPDATES = [
  {
    _id: "1",
    category: "visa",
    title: "Thailand Visa on Arrival Extended to 60 Days",
    description:
      "Good news for travelers! Thailand has officially extended its Visa on Arrival duration from 30 to 60 days. Bangladeshi passport holders can now enjoy an extended stay without requiring a pre-approval. This change is effective immediately.",
    date: "2026-04-24",
    tags: ["Thailand", "VoA"],
    featured: true,
    isActive: true,
  },
  {
    _id: "2",
    category: "package",
    title: "Eid Special: Maldives 5N/6D Package at 20% Off",
    description:
      "Celebrate Eid with your loved ones in the Maldives. Our exclusive Eid package includes round-trip air tickets, resort stay, and daily breakfast. Limited seats available — book now to secure your spot.",
    date: "2026-04-22",
    tags: ["Maldives", "Eid Offer"],
    featured: false,
    isActive: true,
  },
  {
    _id: "3",
    category: "ticket",
    title: "Biman Bangladesh Launches New Dubai Direct Route",
    description:
      "Biman Bangladesh Airlines has officially launched direct flights to Dubai starting May 15. Fares start from BDT 45,000 (return). We are now accepting bookings — contact us for the best available rates.",
    date: "2026-04-20",
    tags: ["Biman", "Dubai"],
    featured: false,
    isActive: true,
  },
  {
    _id: "4",
    category: "visa",
    title: "Malaysia e-Visa Processing Now Faster — 3 Business Days",
    description:
      "Malaysia Immigration has updated its e-Visa processing timeline. Applications are now being processed within 3 working days instead of the previous 7–10 days. Apply early through our office to avoid last-minute delays.",
    date: "2026-04-18",
    tags: ["Malaysia", "e-Visa"],
    featured: false,
    isActive: true,
  },
  {
    _id: "5",
    category: "package",
    title: "Summer Europe Group Tour — July Departure Confirmed",
    description:
      "Our 12-day Summer Europe Group Tour departing July 10 is now confirmed. The itinerary covers Paris, Amsterdam, Zurich, and Rome. A BDT 50,000 advance secures your seat. Contact us for full itinerary and pricing.",
    date: "2026-04-15",
    tags: ["Europe", "Group Tour"],
    featured: false,
    isActive: true,
  },
  {
    _id: "6",
    category: "ticket",
    title: "Air Arabia Flash Sale: Dhaka–Sharjah from BDT 32,000",
    description:
      "Air Arabia is running a limited-time flash sale on Dhaka to Sharjah routes. Fares are valid for travel between June–August 2026. Book through World Holidays to get an extra 5% discount on top of the sale price.",
    date: "2026-04-12",
    tags: ["Air Arabia", "Flash Sale"],
    featured: false,
    isActive: true,
  },
  {
    _id: "7",
    category: "general",
    title: "World Holidays Office Now Open on Saturdays",
    description:
      "To better serve our clients, we are now open every Saturday from 10 AM to 4 PM. Visit us at our Dhaka office or call our helpline for visa consultations, package inquiries, and ticket bookings.",
    date: "2026-04-10",
    tags: ["Office", "Notice"],
    featured: false,
    isActive: true,
  },
  {
    _id: "8",
    category: "visa",
    title: "Singapore Tourist Visa: New Documents Required from May 1",
    description:
      "Singapore's ICA has updated the required documents for Bangladeshi tourist visa applicants. A bank statement of minimum 6 months and a confirmed return ticket are now mandatory from May 1, 2026.",
    date: "2026-04-08",
    tags: ["Singapore", "Requirements"],
    featured: false,
    isActive: true,
  },
];

// ─── Config ───────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { key: "all",     label: "All Updates", dotColor: "bg-gray-400" },
  { key: "visa",    label: "Visa",        dotColor: "bg-blue-500" },
  { key: "package", label: "Packages",    dotColor: "bg-emerald-500" },
  { key: "ticket",  label: "Tickets",     dotColor: "bg-amber-500" },
  { key: "general", label: "General",     dotColor: "bg-pink-500" },
];

const CATEGORY_CONFIG = {
  visa: {
    badge:  "bg-blue-50 text-blue-700",
    accent: "bg-blue-500",
  },
  package: {
    badge:  "bg-emerald-50 text-emerald-700",
    accent: "bg-emerald-500",
  },
  ticket: {
    badge:  "bg-amber-50 text-amber-700",
    accent: "bg-amber-400",
  },
  general: {
    badge:  "bg-pink-50 text-pink-700",
    accent: "bg-pink-500",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getCategoryLabel(key) {
  return CATEGORIES.find((c) => c.key === key)?.label || key;
}

// ─── Filter Bar ───────────────────────────────────────────────────────────────
function FilterBar({ active, onChange }) {
  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
          <span className="text-xs text-gray-400 font-medium whitespace-nowrap mr-1 font-nunito">
            Filter by:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => onChange(cat.key)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-nunito
                whitespace-nowrap border transition-all duration-150 outline-none
                ${
                  active === cat.key
                    ? "bg-slate-900 text-white border-slate-900 font-semibold"
                    : "bg-transparent text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
            >
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0
                  ${active === cat.key ? "bg-white" : cat.dotColor}`}
              />
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-3 mt-8 mb-3">
      <span className="text-sm font-semibold text-gray-400 font-playfair whitespace-nowrap uppercase tracking-wide">
        {children}
      </span>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

// ─── Update Card ──────────────────────────────────────────────────────────────
function UpdateCard({ update, index }) {
  const config = CATEGORY_CONFIG[update.category] || CATEGORY_CONFIG.general;

  return (
    <div
      className={`bg-white rounded-xl border flex gap-3.5 p-5 cursor-pointer
        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md animate-fadeUp
        ${
          update.featured
            ? "border-emerald-200 bg-gradient-to-br from-emerald-50/40 to-white"
            : "border-gray-100 hover:border-gray-200"
        }`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Left accent bar */}
      <div className={`w-0.5 rounded-full flex-shrink-0 self-stretch ${config.accent}`} />

      <div className="flex-1 min-w-0">

        {/* Featured label */}
        {update.featured && (
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600 font-nunito">
              Featured update
            </span>
          </div>
        )}

        {/* Badge + Date */}
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full font-nunito ${config.badge}`}>
            {getCategoryLabel(update.category)}
          </span>
          <span className="text-xs text-gray-400 ml-auto font-nunito">
            {formatDate(update.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-playfair text-[17px] font-semibold text-gray-900 leading-snug mb-1.5">
          {update.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed font-nunito">
          {update.description}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <span className="text-xs font-bold text-orange-500 font-nunito cursor-pointer
            flex items-center gap-1 hover:gap-2 transition-all duration-150">
            Read more →
          </span>
          <div className="flex gap-1.5 flex-wrap">
            {update.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-lg font-nunito"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Skeleton Loader ──────────────────────────────────────────────────────────
function SkeletonLoader() {
  return (
    <div className="mt-8 flex flex-col gap-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-100 p-5 flex gap-3.5"
        >
          <div className="w-0.5 rounded-full bg-gray-100 animate-pulse" />
          <div className="flex-1 space-y-2.5">
            <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
            <div className="h-5 w-3/4 bg-gray-100 rounded animate-pulse" />
            <div className="h-3.5 w-full bg-gray-100 rounded animate-pulse" />
            <div className="h-3.5 w-5/6 bg-gray-100 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────
function EmptyState({ filter }) {
  return (
    <div className="text-center py-24">
      <div className="text-5xl opacity-20 mb-4">📭</div>
      <p className="text-base text-gray-400 font-nunito">
        No {filter === "all" ? "" : filter} updates available right now.
      </p>
      <p className="text-sm text-gray-300 mt-1.5 font-nunito">
        Check back soon for the latest travel news.
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LatestTravelUpdate() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5);
  const [updates, setUpdates]           = useState([]);
  const [loading, setLoading]           = useState(true);

  // TODO: swap this with your real API call:
  // useEffect(() => {
  //   fetch("/api/updates")
  //     .then(r => r.json())
  //     .then(data => { setUpdates(data.filter(u => u.isActive)); setLoading(false); });
  // }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setUpdates(SAMPLE_UPDATES.filter((u) => u.isActive));
      setLoading(false);
    }, 700);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    activeFilter === "all"
      ? updates
      : updates.filter((u) => u.category === activeFilter);

  const featured       = filtered.filter((u) => u.featured);
  const regular        = filtered.filter((u) => !u.featured);
  const visibleRegular = regular.slice(0, visibleCount);
  const hasMore        = visibleRegular.length < regular.length;

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setVisibleCount(5);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">

      {/* ── Page Header ── */}
      <PageHeader
        heading="World Holidays"
        paragraph={
          <>
            Latest Travel{" "}
            <span className="text-orange-500">Updates</span>
            {" "}& Announcements
          </>
        }
        bgImage="/assets/images/updates-hero.jpg"
      />

      {/* ── Sticky Filter Bar ── */}
      <FilterBar active={activeFilter} onChange={handleFilterChange} />

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {loading ? (
          <SkeletonLoader />
        ) : filtered.length === 0 ? (
          <EmptyState filter={activeFilter} />
        ) : (
          <>
            {featured.length > 0 && (
              <>
                <SectionTitle>Featured</SectionTitle>
                <div className="flex flex-col gap-2.5">
                  {featured.map((u, i) => (
                    <UpdateCard key={u._id} update={u} index={i} />
                  ))}
                </div>
              </>
            )}

            {visibleRegular.length > 0 && (
              <>
                <SectionTitle>
                  {featured.length > 0 ? "More updates" : "All updates"}
                </SectionTitle>
                <div className="flex flex-col gap-2.5">
                  {visibleRegular.map((u, i) => (
                    <UpdateCard key={u._id} update={u} index={i} />
                  ))}
                </div>
              </>
            )}

            {hasMore && (
              <button
                onClick={() => setVisibleCount((c) => c + 4)}
                className="w-full mt-4 py-3 text-sm text-gray-400 font-nunito
                  border border-gray-200 rounded-lg bg-transparent
                  hover:bg-gray-100 hover:text-gray-600 transition-all duration-150"
              >
                Load more updates
              </button>
            )}
          </>
        )}
      </div>

      {/* Fade-up animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.35s ease both; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
