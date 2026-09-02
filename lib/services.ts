import type { ComponentType } from "react";
import {
  IconChat,
  IconCloud,
  IconCube,
  IconDesign,
  IconDesktop,
  IconFilm,
  IconGlobe,
  IconLayers,
  IconLayout,
  IconMail,
  IconMobile,
  IconPalette,
  IconPin,
  IconRobot,
  IconRocket,
  IconShield,
  IconSpider,
  IconTerminal,
  IconWeb,
} from "@/components/Icons";

export type Service = {
  slug: string;
  title: string;
  body: string;
  tags: string[];
  icon: ComponentType<{ className?: string }>;
  tone: string;
};

/**
 * The full, professional service catalog shown on /services.
 * Kept separate from the five-tile homepage summary (app/page.tsx)
 * so the homepage stays a fast overview and this page is the
 * authoritative, detailed breakdown.
 */
export const SERVICES: Service[] = [
  {
    slug: "web-apps",
    title: "Web Apps",
    body: "Scalable web applications using modern frameworks, built for performance and growth.",
    tags: ["React", "Next.js", "Node.js"],
    icon: IconWeb,
    tone: "from-cyan-500/25 to-blue-600/10 text-cyan-300 border-cyan-400/20 hover:border-cyan-300/45",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    body: "Native and cross-platform mobile solutions with premium UX across every device.",
    tags: ["React Native", "iOS", "Android"],
    icon: IconMobile,
    tone: "from-emerald-500/25 to-cyan-500/10 text-emerald-300 border-emerald-400/20 hover:border-emerald-300/45",
  },
  {
    slug: "web-designing",
    title: "Web Designing",
    body: "Modern, intuitive, and responsive UI/UX designs that convert and captivate.",
    tags: ["Figma", "UI/UX"],
    icon: IconLayout,
    tone: "from-violet-500/25 to-cyan-500/10 text-violet-300 border-violet-400/20 hover:border-violet-300/45",
  },
  {
    slug: "logo-designing",
    title: "Logo Designing",
    body: "Unique brand identities and creative logos that make you instantly recognizable.",
    tags: ["Illustrator", "Photoshop"],
    icon: IconPalette,
    tone: "from-rose-500/25 to-violet-500/10 text-rose-300 border-rose-400/20 hover:border-rose-300/45",
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    body: "Stunning visual assets for digital and print that elevate your brand presence.",
    tags: ["Photoshop", "Canva"],
    icon: IconDesign,
    tone: "from-amber-500/25 to-orange-500/10 text-amber-300 border-amber-400/20 hover:border-amber-300/45",
  },
  {
    slug: "3d-animations",
    title: "3D Animations",
    body: "Immersive 3D models and motion graphics that bring ideas to life.",
    tags: ["Blender", "Maya"],
    icon: IconCube,
    tone: "from-cyan-500/25 to-violet-500/10 text-cyan-300 border-cyan-400/20 hover:border-cyan-300/45",
  },
  {
    slug: "video-graphics",
    title: "Video Graphics",
    body: "Engaging video content and visual effects that command attention.",
    tags: ["After Effects", "Premiere"],
    icon: IconFilm,
    tone: "from-orange-500/25 to-rose-500/10 text-orange-300 border-orange-400/20 hover:border-orange-300/45",
  },
  {
    slug: "desktop-software",
    title: "Desktop Software",
    body: "Powerful desktop applications for business productivity and automation.",
    tags: ["Python", "Electron"],
    icon: IconDesktop,
    tone: "from-amber-500/25 to-orange-500/10 text-amber-300 border-amber-400/20 hover:border-amber-300/45",
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    body: "Intelligent AI assistants and conversational automation for your business.",
    tags: ["Python", "LangChain", "OpenAI"],
    icon: IconChat,
    tone: "from-violet-500/25 to-fuchsia-500/10 text-violet-300 border-violet-400/20 hover:border-violet-300/45",
  },
  {
    slug: "automation-scrapers",
    title: "Automation & Scrapers",
    body: "High-throughput data extraction infrastructure that handles thousands of concurrent jobs with zero degradation, built to scale without re-engineering.",
    tags: ["Python", "Playwright", "Scrapy", "Celery"],
    icon: IconSpider,
    tone: "from-emerald-500/25 to-teal-500/10 text-emerald-300 border-emerald-400/20 hover:border-emerald-300/45",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing Tools",
    body: "Fast, intuitive campaign platforms with bulletproof deliverability, smart segmentation, and actionable analytics at every step.",
    tags: ["Node.js", "SendGrid", "Analytics"],
    icon: IconMail,
    tone: "from-cyan-500/25 to-blue-600/10 text-cyan-300 border-cyan-400/20 hover:border-cyan-300/45",
  },
  {
    slug: "form-services",
    title: "Form Services",
    body: "Bulletproof form submission pipelines: high volume, real-time processing, and clean integrations. Zero-downtime architecture built for enterprise scale.",
    tags: ["Node.js", "Webhooks", "Queues"],
    icon: IconRobot,
    tone: "from-blue-500/25 to-cyan-500/10 text-blue-300 border-blue-400/20 hover:border-blue-300/45",
  },
];

export type TechCategory = {
  title: string;
  body: string;
  tags: string[];
  icon: ComponentType<{ className?: string }>;
  tone: string;
};

/**
 * "What service provides what" — the engineering stack grouped
 * by discipline, so visitors can see exactly what powers each
 * layer of a delivered product.
 */
export const TECH_STACK: TechCategory[] = [
  {
    title: "AI Engineering",
    body: "LLM applications, agentic workflows, RAG pipelines, and AI research systems.",
    tags: ["LLMs", "RAG", "Agentic AI", "LangChain", "LangGraph"],
    icon: IconRobot,
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    title: "Backend & API Engineering",
    body: "Designing APIs and backend services that power intelligent applications.",
    tags: ["FastAPI", "Node.js", "Express", "REST APIs", "Auth"],
    icon: IconTerminal,
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    title: "Full-Stack Development",
    body: "Connecting AI and backend intelligence with modern user experiences.",
    tags: ["React", "Next.js", "React Native", "TypeScript"],
    icon: IconLayers,
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
  {
    title: "Data, DB & Cloud",
    body: "Structured, geospatial, and vector data across cloud-ready infrastructure.",
    tags: ["PostgreSQL", "PostGIS", "Supabase", "Firebase", "Vector DB"],
    icon: IconCloud,
    tone: "from-amber-500/30 to-orange-500/10 text-amber-300 border-amber-400/20",
  },
  {
    title: "Dev Tools & Infra",
    body: "Version control, containers, and reproducible development environments.",
    tags: ["Git", "GitHub", "Docker", "Jupyter"],
    icon: IconCube,
    tone: "from-rose-500/30 to-violet-500/10 text-rose-300 border-rose-400/20",
  },
  {
    title: "Maps & Location",
    body: "Mapping, geospatial search, and location-based product features.",
    tags: ["Mapbox", "OpenStreetMap", "Socket.IO"],
    icon: IconPin,
    tone: "from-cyan-500/30 to-emerald-500/10 text-cyan-300 border-cyan-400/20",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  tone: string;
};

/** The detailed, agile-style delivery process shown on /services. */
export const PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    body: "We kick off with in-depth workshops to understand your vision, business goals, and user needs to create a solid strategic foundation.",
    tone: "from-cyan-500/30 to-blue-600/10 text-cyan-300 border-cyan-400/20",
  },
  {
    number: "02",
    title: "UI/UX Design",
    body: "Our team crafts intuitive interfaces and creates interactive prototypes to ensure an exceptional user experience before development begins.",
    tone: "from-violet-500/30 to-cyan-500/10 text-violet-300 border-violet-400/20",
  },
  {
    number: "03",
    title: "Agile Development",
    body: "Following agile methodologies, our developers build your application in iterative sprints, ensuring clean, scalable, and secure code.",
    tone: "from-amber-500/30 to-orange-500/10 text-amber-300 border-amber-400/20",
  },
  {
    number: "04",
    title: "Quality Assurance",
    body: "Rigorous automated and manual testing is embedded in our process to ensure your application is bug-free, performant, and secure.",
    tone: "from-emerald-500/30 to-cyan-500/10 text-emerald-300 border-emerald-400/20",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    body: "We handle the entire deployment process, ensuring a smooth and seamless launch on robust cloud infrastructure with close monitoring.",
    tone: "from-rose-500/30 to-orange-500/10 text-rose-300 border-rose-400/20",
  },
  {
    number: "06",
    title: "Evolve & Grow",
    body: "Our partnership extends beyond launch. We provide ongoing support and analyze user data to help you evolve and succeed.",
    tone: "from-cyan-500/30 to-violet-500/10 text-cyan-300 border-cyan-400/20",
  },
];

export type Pillar = {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
};

/** Positioning strip used near the top of /services. */
export const DELIVERY_PILLARS: Pillar[] = [
  {
    title: "Global Delivery",
    body: "Distributed engineering teams working across time zones to ensure continuous development velocity and round-the-clock support.",
    icon: IconGlobe,
  },
  {
    title: "Digital Innovation",
    body: "Combining creativity, technology, and strategy to craft impactful digital experiences that stand out in competitive markets.",
    icon: IconRocket,
  },
  {
    title: "Modern Tech Stack",
    body: "Built using scalable frameworks, cloud infrastructure, and modern development practices to ensure future-ready solutions.",
    icon: IconLayers,
  },
];

export type Foundation = {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
};

/** Enterprise-grade engineering guarantees, drawn from Form Services. */
export const ENGINEERING_FOUNDATIONS: Foundation[] = [
  {
    title: "Scalable Architecture",
    body: "Systems designed to grow seamlessly with your business needs.",
    icon: IconLayers,
  },
  {
    title: "Security First",
    body: "Enterprise-grade security protocols implemented at every layer.",
    icon: IconShield,
  },
  {
    title: "High Performance",
    body: "Optimized code and infrastructure for lightning-fast experiences.",
    icon: IconRocket,
  },
];
