export type Experience = {
  role: string;
  company: string;
  period: string;
  duration?: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
};

export type Certification = {
  title: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "Trynocode Pvt. Ltd.",
    period: "Sept 2024 – Present",
    duration: "19 months",
    highlights: [
      "Launched 10+ SaaS platforms serving 2,000+ users across UK, Australia, Dubai, Singapore, Mongolia, and Hong Kong",
      "Scaled FinTech payment engine handling 50,000+ concurrent transactions; reduced API latency 45% via Redis caching",
      "Shipped React + Next.js UIs with 95+ Lighthouse performance and 98+ accessibility scores",
      "Cut database load 35% and page load times 40% through MongoDB & PostgreSQL schema optimization",
      "Compressed deployment from 2 hrs to 15 min with Docker & CI/CD, enabling 5+ releases/week",
    ],
  },
  {
    role: "Open Source Engineer",
    company: "GirlScript Summer of Code",
    period: "Oct 2024 – Nov 2024",
    highlights: [
      "Deployed 5 features and patched 15 bugs across JavaScript/React/Node.js codebases",
      "Reviewed 10+ PRs and mentored 3 junior contributors; enhanced documentation by 25%",
      "Streamlined Git workflows, accelerating delivery timelines 30%",
    ],
  },
  {
    role: "Frontend Engineer (Intern)",
    company: "Victory Point",
    period: "Aug 2023 – Oct 2023",
    duration: "3 months",
    highlights: [
      "Built responsive React components with CSS3 and Flexbox; delivered feature-complete UI",
      "Reduced page load times 40% through code-splitting and lazy loading",
      "Collaborated with 10+ engineers via GitHub branches and PR reviews",
    ],
  },
];

export const education: Education = {
  degree: "B.Tech Computer Science & Engineering",
  institution: "Dr. A.P.J. Abdul Kalam Technical University, Ghaziabad",
  year: "2024",
};

export const certifications: Certification[] = [
  {
    title: "FlutterFlow Certified Developer",
    description: "Low-code development and rapid prototyping",
  },
  {
    title:" Anthropic Claude Code in Action",
    description: "Certified in using Claude Code for development and problem solving",
  },
  {
    title: "Protocol Buffers & gRPC",
    description: "Microservice communication for ultra-low-latency financial systems",
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS (EC2, S3, Lambda, RDS) and Alibaba Cloud multi-cloud deployments",
  },
  {
    title: "AI Agent Platforms",
    description: "Cursor, Claude Code, AntiGravity, Altan — agentic AI workflows",
  },
];
