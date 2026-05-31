export type Project = {
  title: string;
  category: string;
  region: string;
  description: string;
  highlights: string[];
  tags: string[];
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "FinTech Trading Platform",
    category: "FinTech",
    region: "Hong Kong",
    description:
      "High-throughput trading engine scaled for enterprise financial operations.",
    highlights: [
      "Scaled from 10K to 50,000 concurrent trades",
      "45% latency reduction via query optimization",
      "RBAC for traders, compliance & risk managers with audit logging",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "gRPC", "Microservices"],
    gradient: "from-[#1a1f2e] via-[#2c3548] to-[#6b7f9e]",
  },
  {
    title: "Real Estate Marketplace",
    category: "Real Estate",
    region: "Dubai",
    description:
      "Property marketplace with secure payment processing for international users.",
    highlights: [
      "5,000+ monthly users processing 200+ transactions",
      "PCI DSS Level 1 compliance with Stripe payments",
    ],
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-[#2d2a26] via-[#4a4035] to-[#b8956b]",
  },
  {
    title: "Harvard EdTech Portal",
    category: "EdTech",
    region: "London",
    description:
      "Learning platform for Harvard courses with grading, progress tracking, and certificates.",
    highlights: [
      "2,000+ students across 15 Harvard courses",
      "25% daily active users with CDN-optimized delivery",
    ],
    tags: ["React", "Node.js", "MongoDB", "JWT", "CDN"],
    gradient: "from-[#1f2a24] via-[#2f4538] to-[#7a9e8a]",
  },
  {
    title: "HealthTech Patient Portal",
    category: "HealthTech",
    region: "Ireland",
    description:
      "HIPAA-compliant portal for appointments, medical records, and telemedicine.",
    highlights: [
      "3,000+ patients with encrypted PII storage",
      "99.8% uptime with compliance logging",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "HIPAA", "Encryption"],
    gradient: "from-[#1e2a3a] via-[#3d5a73] to-[#7eb8da]",
  },
  {
    title: "Sports Facility Booking",
    category: "SportsTech",
    region: "Australia",
    description:
      "Coach and facility booking platform with calendar sync and automated confirmations.",
    highlights: [
      "200+ coaches, 5,000+ athletes, $500K+ annual bookings",
      "99.5% uptime with Stripe payments and calendar API integration",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Calendar API"],
    gradient: "from-[#1a2e1f] via-[#2d5038] to-[#6b9e7a]",
  },
  {
    title: "Real Estate Services",
    category: "Real Estate",
    region: "London",
    description:
      "Booking platform connecting cleaners, companies, and homeowners.",
    highlights: [
      "500+ monthly bookings with role-based dashboards",
      "RBAC for cleaners, company managers, and users",
    ],
    tags: ["React", "Node.js", "MongoDB", "RBAC", "Stripe"],
    gradient: "from-[#2a2420] via-[#4a3f35] to-[#a89070]",
  },
  {
    title: "AI Spiritual Learning",
    category: "AI / EdTech",
    region: "Global",
    description:
      "AI-powered meditation and spiritual learning platform with mood detection.",
    highlights: [
      "OpenAI for meditation guidance; TensorFlow.js mood detection",
      "50+ courses in 10+ languages with 98+ accessibility score",
    ],
    tags: ["React", "Node.js", "MongoDB", "OpenAI", "TensorFlow.js"],
    gradient: "from-[#2a1f3d] via-[#4a3560] to-[#9b7ec8]",
  },
  {
    title: "Laundry Logistics",
    category: "Logistics",
    region: "London",
    description:
      "Dry cleaning logistics with order tracking and route optimization.",
    highlights: [
      "1,500+ active customers across London",
      "35% faster deliveries with Google Maps route optimization",
    ],
    tags: ["React", "Node.js", "MongoDB", "Google Maps", "SMS"],
    gradient: "from-[#1f2a2e] via-[#3a5058] to-[#7aabbb]",
  },
  {
    title: "Cabin Booking Platform",
    category: "Hospitality",
    region: "Global",
    description: "Streamlined cabin booking with performance-optimized frontend.",
    highlights: [
      "20% faster bookings with React Query state management",
      "95+ Lighthouse performance, 98+ accessibility",
    ],
    tags: ["React", "React Query", "Node.js", "Styled Components"],
    gradient: "from-[#2e2a1f] via-[#504a35] to-[#b8a870]",
  },
  {
    title: "Accessibility Tool",
    category: "Accessibility",
    region: "Global",
    description:
      "Assistive technology tool for users with disabilities.",
    highlights: [
      "100+ users with voice, OCR, and system automation features",
      "Built with Python backend and JavaScript frontend",
    ],
    tags: ["Python", "JavaScript", "SQLite"],
    gradient: "from-[#1a2a2a] via-[#2d4545] to-[#6b9999]",
  },
];
