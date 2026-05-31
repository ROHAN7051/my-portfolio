export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "gRPC",
      "JWT",
      "Mongoose",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Alibaba Cloud",
      "Docker",
      "CI/CD",
      "Vercel",
      "Netlify",
      "Railway",
    ],
  },
  {
    category: "AI & Tools",
    items: [
      "Cursor",
      "Claude Code",
      "Agentic AI",
      "VS Code",
      "Postman",
      "Git",
      "GitHub",
    ],
  },
];
