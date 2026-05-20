export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  category: "frontend" | "backend" | "fullstack";
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

// ─── EXPERIENCIA (trabajos reales) ────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    title: "Desarrollador Full Stack",
    company: "Referbby",
    description:
      "Sistema de referencias con embajadores, tracking de comisiones y pagos con Stripe.",
    image: "/images/Referbby.png",
    tech: ["NestJS", "React", "TypeScript", "Stripe", "PostgreSQL", "TypeORM"],
    github: "https://github.com/cristiand001",
    live: "https://referby-front.vercel.app/",
    featured: true,
  },
  {
    title: "Desarrollador Full Stack",
    company: "Desarrollemos MX (Adbize)",
    description:
      "Portal académico para universidad con gestión de cursos, calificaciones y roles diferenciados.",
    image: "/images/Adbize.png",
    tech: ["React", "Node.js", "Supabase", "Socket.io", "PostgreSQL", "OpenAI"],
    github: "https://github.com/cristiand001",
    live: "https://desarrollemosmx.vercel.app/",
    featured: true,
  },
  {
    title: "Desarrollador Full Stack",
    company: "Distrito Moda",
    description:
      "E-commerce mayorista con integración de APIs de logística y pagos.",
    image: "/images/DistritoModa.jpg",
    tech: ["Drupal", "PHP", "JavaScript", "MySQL", "MercadoPago API"],
    live: "https://distritomoda.com.ar",
    featured: true,
  },
];

// ─── PROYECTOS (challenges / personales) ─────────────────────────────────────
export const projects: Project[] = [
  {
    title: "ML Analyzer",
    description:
      "Analizador de publicaciones de MercadoLibre con IA. Obtené recomendaciones de título, descripción, oportunidades y riesgos comerciales.",
    image: "/images/Analyzermeli.png",
    tech: ["Next.js", "TypeScript", "Supabase", "Groq AI", "OAuth2"],
    github: "https://github.com/cristiand001/Desafio-tecnico-capogrowth",
    live: "https://analizer-meli.vercel.app/",
    category: "fullstack",
    featured: true,
  },
  {
    title: "SyroxTech",
    description:
      "Panel de administración para e-commerce con gestión de productos, órdenes, categorías, dashboard con métricas y exportación CSV.",
    image: "/images/SyroxTech.jpg",
    tech: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Shadcn UI",
    ],
    github: "https://github.com/cristiand001/syroxtech_challenge",
    live: "https://syroxtech-challenge.vercel.app/",
    category: "fullstack",
    featured: true,
  },
];
