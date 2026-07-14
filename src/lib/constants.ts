export const BRAND_NAME = "Pawcort";
export const BRAND_TAGLINE = "Loved. Included. Celebrated.";

export const INSTAGRAM_URL = "https://www.instagram.com/pawcort1/";
export const INSTAGRAM_HANDLE = "@pawcort1";

export const CONTACT_PHONE = "+1 (404) 502-6475";
export const CONTACT_EMAIL = "talya@pawcort.com";

export const WEDDING_PROMISES = [
  {
    id: "family",
    emoji: "💛",
    title: "Part of the Family",
    quote: "My pet is an important member of our family.",
    promise: "Your pet joins the ceremony — as ring bearer, honoured guest, or by your side when you say \"I do.\"",
  },
  {
    id: "peace",
    emoji: "🕊️",
    title: "Peace of Mind",
    quote: "I don't want extra stress on my wedding day.",
    promise: "We handle walks, crowd moments, and quiet breaks so you stay fully present from vows to reception.",
  },
  {
    id: "celebration",
    emoji: "🥂",
    title: "Joy for Everyone",
    quote: "Our venue allows pets during the wedding.",
    promise: "Whether on-site or nearby, every guest — furry ones included — enjoys a calm, memorable celebration.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  Company: [
    { label: "About Us", href: "/" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Reviews", href: "/reviews" },
  ],
  Support: [
    { label: "Book Appointment", href: "/book" },
    { label: "Contact Us", href: "/contact" },
    { label: "Emergency Support", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms & Conditions", href: "/contact" },
    { label: "Refund Policy", href: "/contact" },
  ],
};

export const STATS = [
  { value: 500, suffix: "+", label: "Happy Pets" },
  { value: 150, suffix: "+", label: "Verified Sitters" },
  { value: 4.9, suffix: "★", label: "Average Rating" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export const SERVICES = [
  {
    emoji: "💒",
    title: "Wedding Pet Concierge",
    description: "From ceremony to reception — your pet joins the celebration with a dedicated sitter who handles every detail.",
    badge: "Most Popular",
    badgeColor: "bg-[#F0EAE0] text-[#5C7260]",
    highlight: true,
    price: "From $95/hr",
  },
  {
    emoji: "🎉",
    title: "Event Pet Sitting",
    description: "Birthday parties, anniversaries, festivals — your pet is in great hands while you celebrate.",
    badge: null,
    badgeColor: "",
    highlight: false,
    price: "From $75/hr",
  },
  {
    emoji: "🏠",
    title: "Home Pet Sitting",
    description: "Your pet stays in their own home with a dedicated sitter while you're away.",
    badge: null,
    badgeColor: "",
    highlight: false,
    price: "From $85/hr",
  },
  {
    emoji: "🌙",
    title: "Overnight Care",
    description: "Travel with peace of mind. Our sitters stay with your pet through the night.",
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-600",
    highlight: false,
    price: "From $225/night",
  },
  {
    emoji: "❤️",
    title: "Senior Pet Care",
    description: "Gentle care for older pets with medical needs, medications, and mobility support.",
    badge: null,
    badgeColor: "",
    highlight: false,
    price: "From $105/hr",
  },
  {
    emoji: "🐾",
    title: "Puppy Care",
    description: "Extra attention for puppies — frequent feeding, playtime, and socialization.",
    badge: "New",
    badgeColor: "bg-green-100 text-green-600",
    highlight: false,
    price: "From $85/hr",
  },
];

export const PRICING = [
  { service: "Wedding Pet Sitting", duration: "4–8 hours", price: "$95/hr", note: "Venue or home" },
  { service: "Event Pet Sitting", duration: "2–6 hours", price: "$75/hr", note: "Any event type" },
  { service: "Home Pet Sitting", duration: "Hourly", price: "$85/hr", note: "At your home" },
  { service: "Overnight Care", duration: "12+ hours", price: "$225/night", note: "Live-in sitter" },
  { service: "Senior Pet Care", duration: "Hourly", price: "$105/hr", note: "Medical support" },
  { service: "Puppy Care", duration: "Hourly", price: "$85/hr", note: "Extra playtime" },
];

export const FEATURED_TESTIMONIAL = {
  quote: "Bruno walked down the aisle with us — and I didn't worry once. Pawcort made our family complete on the most important day of our lives.",
  author: "Priya Sharma",
  role: "Wedding at The Estate at Piedmont, Atlanta",
  pet: "Bruno — Golden Retriever",
  emoji: "🐶",
  rating: 5,
};

export const HOME_STORY = {
  eyebrow: "Our Story",
  title: "Because Your Pet Belongs in",
  titleHighlight: "Your Wedding Story",
  intro:
    "Your pet isn't a guest list afterthought — they're family. Pawcort was created so couples can include their companions in the ceremony without carrying the stress of managing them on the biggest day of their lives.",
  chapters: [
    {
      chapter: "01",
      headline: "Family Means Everyone",
      body:
        "You've dreamed of this day for years. Your dog has been by your side through it all — and leaving them out feels wrong. You want them there when you say 'I do,' not waiting at home wondering where you went.",
      pullQuote: "He's been with us since the first date. He had to be part of our wedding.",
      color: "#5C4033",
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=640&h=480&fit=crop&q=80",
      imageAlt: "Dog waiting patiently at home before a family event",
    },
    {
      chapter: "02",
      headline: "Zero Stress on Your Big Day",
      body:
        "Your Pawcort concierge handles walks, water breaks, crowd management, and quiet moments — so you can focus on your vows, your guests, and soaking in every second without a single glance at your phone.",
      pullQuote: "I didn't check my phone once during the ceremony. That had never happened before.",
      color: "#7A5C4D",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=640&h=480&fit=crop&q=80",
      imageAlt: "Pet sitter caring for a happy dog on the couch",
    },
    {
      chapter: "03",
      headline: "A Celebration for Everyone",
      body:
        "Whether your venue welcomes pets or you need a nearby care space — every guest, furry or not, enjoys the day. Your pet is calm, cared for, and part of the memories you'll cherish forever.",
      pullQuote: "Our guests still talk about Bruno in his little bow tie. Best wedding decision ever.",
      color: "#C9952E",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=640&h=480&fit=crop&q=80",
      imageAlt: "Couple celebrating their wedding while their pet is cared for",
    },
  ],
};

export const HOME_PROMISE = {
  eyebrow: "The Pawcort Promise",
  title: "Loved. Included. Celebrated — On Your Wedding Day",
  body:
    "Verified wedding pet concierges. Live updates throughout the day. On-call emergency support. We carry the responsibility so you can be fully present — with your pet right beside you.",
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Choose Your Event Date",
    description:
      "Select the date, time, and duration of your event. We're available for weddings, parties, travel, and more.",
    color: "#FF6B35",
    bg: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=640&h=400&fit=crop&q=80",
    imageAlt: "Calendar and wedding planning for a special event",
  },
  {
    step: 2,
    title: "Tell Us About Your Pet",
    description:
      "Share your pet's name, breed, age, and any special needs. The more we know, the better we can care!",
    color: "#4A90D9",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=640&h=400&fit=crop&q=80",
    imageAlt: "Golden retriever — sharing your pet's details with Pawcort",
  },
  {
    step: 3,
    title: "Get Matched with a Sitter",
    description:
      "We'll connect you with a verified, experienced sitter near your venue or home — perfectly matched for your pet.",
    color: "#48BB78",
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=640&h=400&fit=crop&q=80",
    imageAlt: "Verified pet sitter playing with dogs outdoors",
  },
  {
    step: 4,
    title: "Relax & Enjoy Your Event",
    description:
      "Celebrate stress-free! Your sitter sends live photos and updates so you always know your pet is happy.",
    color: "#9B59B6",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=640&h=400&fit=crop&q=80",
    imageAlt: "Couple toasting and enjoying their celebration worry-free",
  },
];

export const HOME_MOMENTS = [
  {
    emoji: "💒",
    title: "Ceremony & Aisle Walks",
    story: "Ring bearer, flower pup, or honoured guest — your concierge ensures a picture-perfect, stress-free moment.",
  },
  {
    emoji: "🎊",
    title: "Reception & Celebrations",
    story: "Crowds, music, and long evenings handled with care. Your pet stays comfortable while guests celebrate.",
  },
  {
    emoji: "🏡",
    title: "Venue or Home Care",
    story: "Pet-friendly venue or not — we adapt. On-site concierge or nearby calm space, tailored to your day.",
  },
];

/** Replace src with your own files in /public/videos/ when ready */
export const VIDEOS = [
  {
    id: "home-story",
    title: "See Pawcort in Action",
    description:
      "Watch how we bring pets into wedding celebrations — calm, cared for, and part of the family story.",
    duration: "0:21",
    category: "Brand Story",
    emoji: "🎬",
    src: "/videos/home-hero.mp4",
    poster: "",
  },
  {
    id: "how-it-works",
    title: "How Booking Works",
    description:
      "From choosing your date to meeting your wedding pet concierge — see the full Pawcort experience in under 2 minutes.",
    duration: "1:22",
    category: "Explainer",
    emoji: "📋",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "",
  },
  {
    id: "bruno-wedding",
    title: "Bruno's Wedding Day",
    description:
      "Priya booked a sitter for her Udaipur wedding. See Bruno's day — walks, cuddles, and hourly updates while she danced.",
    duration: "0:15",
    category: "Customer Story",
    emoji: "💒",
    src: "/videos/bruno-wedding.mp4",
    poster: "",
  },
] as const;

export const HOME_VIDEO = VIDEOS[0];
export const HOW_IT_WORKS_VIDEO = VIDEOS[1];
export const REVIEWS_VIDEO = VIDEOS[2];
