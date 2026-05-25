export const CV_URL = "/Shaikh-Sameer-CV.pdf";

export const SITE = {
  name: "Shaikh Sameer",
  fullName: "Shaikh Sameer Shabbir",
  title: "Full Stack Engineer",
  subtitle: "Node.js — React.js/Next.js",
  tagline: "4+ years building scalable enterprise systems that just work.",
  location: "Pune, India",
  email: "samsk7774@gmail.com",
  phone: "+91-8379843464",
  github: "https://github.com/shaikhsameershabbir",
  linkedin: "https://linkedin.com/in/shaikh-sameer07",
} as const;

export const PROFESSIONAL_SUMMARY =
  "Full Stack Engineer with 4+ years of experience building scalable enterprise applications, SaaS products and backend systems using Node.js and React.js. Experienced in secure APIs, performance optimization, multi-tenant platforms and delivering production-grade software from architecture to deployment.";

export const EDUCATION = {
  degree: "Bachelor of Engineering — Computer Science",
  university: "Dr. Babasaheb Ambedkar Marathwada University",
  location: "Aurangabad, India",
  graduated: "2023",
} as const;

export const NAV_SECTIONS = [
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
] as const;

export const HERO_STATS = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "+", label: "Companies" },
  { value: 7, suffix: "+", label: "Projects" },
  { value: 6, suffix: "", label: "Engineers Led" },
] as const;

export const HERO_TECH = [
  "Node.js",
  "React.js",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
] as const;

export const TYPEWRITER_ROLES = [
  "Full Stack Engineer",
  "Node.js Engineer",
  "React.js Developer",
  "Next.js Developer",
] as const;

export const ABOUT_BULLETS = [
  "Architected backend services for enterprise SaaS and complex business workflows",
  "Improved API performance by 40% through query optimization and database indexing",
  "Led engineering team of 6 developers across technical design and delivery",
  "Built multi-tenant backend modules with JWT, RBAC and client data isolation",
] as const;

export const SKILLS = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL"],
    span: "col-span-1 row-span-1",
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "WebSockets",
    ],
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    span: "col-span-1 row-span-1",
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
    span: "col-span-1 row-span-1",
  },
  {
    category: "Tools",
    items: ["Prisma", "Knex.js", "Docker", "Git", "CI/CD"],
    span: "col-span-1 row-span-1",
  },
  {
    category: "Cloud",
    items: ["AWS", "DigitalOcean", "Cloudflare"],
    span: "col-span-1 row-span-1",
  },
  {
    category: "Engineering",
    items: [
      "System Design",
      "Multi-Tenant Architecture",
      "API Security",
    ],
    span: "col-span-1 row-span-1",
  },
] as const;

export const EXPERIENCES = [
  {
    title: "Senior Software Engineer",
    company: "Coreline IT Solutions",
    location: "Pune, India",
    duration: "Feb 2025 – Present",
    current: true,
    bullets: [
      "Architected backend services supporting enterprise SaaS applications and complex business workflows",
      "Developed modular REST APIs supporting scalable and high-volume application operations",
      "Built admin dashboards using React.js, Next.js and Tailwind CSS for workflow automation",
      "Improved API performance by 40% through query optimization and database indexing",
      "Led engineering team of 6 developers and contributed to technical design decisions",
      "Implemented JWT, RBAC and secure authentication systems for controlled user access",
      "Built CI/CD pipelines reducing deployment time by 60% and improving release reliability",
      "Developed multi-tenant backend modules supporting client data isolation and access controls",
    ],
    tags: [
      "Node.js",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "CI/CD",
      "JWT",
      "RBAC",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "ARA Global",
    location: "Pune, India",
    duration: "Feb 2023 – Jan 2025",
    current: false,
    bullets: [
      "Developed enterprise ERP platform supporting HR, payroll and reporting workflows",
      "Built React.js dashboards for operational management and internal business users",
      "Developed scalable backend APIs using Node.js supporting high-volume business workflows",
      "Refactored legacy backend code reducing system latency by 40%",
      "Built real-time modules using WebSockets supporting event-driven application updates",
      "Designed PostgreSQL and MongoDB schemas supporting scalable data management",
    ],
    tags: [
      "Node.js",
      "React.js",
      "PostgreSQL",
      "MongoDB",
      "WebSockets",
      "REST APIs",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Contract Remote",
    location: "Remote",
    duration: "Feb 2022 – Jan 2023",
    current: false,
    bullets: [
      "Delivered custom web applications and backend APIs for startup and small business clients",
      "Built React.js frontends and Node.js backend services for client-facing solutions",
      "Delivered admin dashboards, business websites and internal management tools",
      "Designed relational database schemas and implemented backend business logic",
      "Integrated authentication, payment workflows and third-party service APIs",
      "Managed end-to-end project delivery including development, deployment and client handoff",
    ],
    tags: ["Node.js", "React.js", "REST APIs", "MySQL", "PostgreSQL"],
  },
] as const;

export const PROJECTS = [
  {
    number: "01",
    title: "StudyPulse",
    category: "Online Learning SaaS Platform",
    description:
      "Scalable online learning platform supporting exams, academic workflows and student performance management.",
    highlights: [
      "Exam scheduling, question management and automated result generation",
      "Secure role-based access for students, faculty and administrators",
      "Subscription billing, payment workflows and institutional analytics dashboards",
    ],
    stack: ["Node.js", "React.js", "PostgreSQL", "REST APIs", "SaaS"],
  },
  {
    number: "02",
    title: "Indian Design Editing Platform",
    category: "Customizable Design & Template Platform",
    description:
      "Design editing platform for branded templates and digital asset generation with real-time editing workflows.",
    highlights: [
      "Template rendering, export modules and dynamic layer management",
      "Cloudflare asset storage and CDN delivery for optimized media performance",
    ],
    stack: ["React.js", "Node.js", "Cloudflare", "REST APIs"],
  },
  {
    number: "03",
    title: "POST EAT",
    category: "Food Delivery Platform",
    description:
      "Full-stack food delivery application supporting customers, restaurants and delivery partners.",
    highlights: [
      "Real-time order tracking via WebSockets for live status updates",
      "Order lifecycle services, menu modules and payment checkout workflows",
    ],
    stack: ["Node.js", "React.js", "MongoDB", "WebSockets", "REST APIs"],
  },
  {
    number: "04",
    title: "KT Guru",
    category: "Knowledge Transfer SaaS Platform",
    description:
      "SaaS platform supporting remote knowledge transfer sessions for consultants and clients.",
    highlights: [
      "Live collaboration features with secure session access controls",
      "Backend services supporting concurrent multi-user session activity",
    ],
    stack: ["Node.js", "React.js", "WebSockets", "SaaS"],
  },
  {
    number: "05",
    title: "Enterprise HRMS and Payroll System",
    category: "HR & Payroll Platform",
    description:
      "Employee management and payroll modules supporting HR operational workflows.",
    highlights: [
      "Attendance tracking, leave workflows and policy-based approvals",
      "Role-based access permissions and reporting dashboards for HR administration",
    ],
    stack: ["Node.js", "React.js", "PostgreSQL", "REST APIs"],
  },
  {
    number: "06",
    title: "Multi-Tenant SaaS Admin Platform",
    category: "Multi-Tenant SaaS Architecture",
    description:
      "Multi-tenant SaaS architecture supporting isolated environments for multiple clients.",
    highlights: [
      "Tenant-aware APIs, client workspace isolation and subscription management",
      "Scalable data models supporting tenant isolation and application growth",
    ],
    stack: ["Node.js", "PostgreSQL", "Multi-Tenant", "RBAC", "REST APIs"],
  },
  {
    number: "07",
    title: "Workflow Automation Platform",
    category: "Enterprise Workflow Automation",
    description:
      "Enterprise workflow automation platform supporting approvals, routing and task execution.",
    highlights: [
      "Configurable business process flows and rule-based approval chains",
      "Document and task lifecycle modules for end-to-end workflow management",
    ],
    stack: ["Node.js", "React.js", "REST APIs", "PostgreSQL"],
  },
] as const;

export const ARCHITECTURE_PILLARS = [
  {
    title: "Scalable Node.js",
    icon: "server",
    bullets: [
      "REST APIs · Express & NestJS · Modular Services · JWT Auth",
      "Query Optimization · WebSocket Event-Driven Updates",
    ],
    metric: "40% API performance improvement via indexing",
  },
  {
    title: "CI/CD & Deployment",
    icon: "workflow",
    bullets: [
      "Docker · Git · CI/CD · AWS · DigitalOcean · Cloudflare",
    ],
    metric: "60% faster deployments with automated release pipelines",
  },
  {
    title: "API Security",
    icon: "shield",
    bullets: [
      "JWT Authentication · RBAC · Secure Access Controls",
      "Server-side Validation · Controlled User Permissions",
    ],
    metric: null,
  },
  {
    title: "Multi-Tenant Architecture",
    icon: "zap",
    bullets: [
      "Tenant Isolation · Client Workspace Modules",
      "Subscription Management · Scalable Data Models",
    ],
    metric: null,
  },
] as const;

export const TERMINAL_LINES = [
  "$ sameer --init portfolio",
  "> Loading 4+ years of experience...",
  "> Importing: Node.js, React.js, Next.js...",
  "> Connecting: 3 companies, 7 projects...",
  "> Status: Available for opportunities ✓",
] as const;
