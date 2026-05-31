export const about = {
  greeting: "Hello, I'm",
  bio: "I build React, Node.js, and MongoDB applications across HealthTech, SportsTech, EdTech, and FinTech — 10+ SaaS platforms serving 2,000+ users in six countries.",
  stats: [
    { label: "SaaS platforms shipped", value: "10+" },
    { label: "Users served globally", value: "2K+" },
    { label: "API latency reduced", value: "45%" },
  ],
  services: [
    {
      title: "Full Stack Development",
      description:
        "End-to-end React, Next.js, and Node.js applications — from pixel-perfect UIs to robust REST/GraphQL APIs, with 95+ Lighthouse scores and 98+ accessibility.",
      tools: ["React", "Next.js", "Node.js", "Express", "TypeScript"],
    },
    {
      title: "FinTech & API Scaling",
      description:
        "Payment engines handling 50K+ concurrent transactions, JWT + RBAC auth, gRPC microservices with Protocol Buffers, and Redis caching for sub-50ms latency.",
      tools: ["gRPC", "Redis", "PostgreSQL", "Stripe", "JWT"],
    },
    {
      title: "Database Engineering",
      description:
        "Schema design across MongoDB and PostgreSQL, eliminating N+1 queries, cutting database load by 35%, and reducing page load times by 40% through query optimization.",
      tools: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Mongoose"],
    },
    {
      title: "DevOps & Cloud Infrastructure",
      description:
        "Containerized microservices with Docker, automated CI/CD pipelines, and multi-cloud deployments on AWS and Alibaba Cloud — compressing 2-hour deploys to 15 minutes.",
      tools: ["Docker", "AWS", "Alibaba Cloud", "Vercel", "CI/CD"],
    },
    {
      title: "AI & Integrations",
      description:
        "OpenAI-powered features, TensorFlow.js for client-side ML, real-time notifications, third-party API integrations, and multi-language support across 10+ locales.",
      tools: ["OpenAI", "TensorFlow.js", "Google Maps", "CDN", "SMS"],
    },
    {
      title: "Agile Delivery & Mentoring",
      description:
        "Sprint-driven development across 4+ concurrent projects with 95% on-time delivery. Code reviews, PR workflows, and mentoring junior engineers in open-source.",
      tools: ["Git", "GitHub", "Agile", "Code Reviews", "PRs"],
    },
  ],
} as const;
