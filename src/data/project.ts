import ReferbbyImg from "../assets/images/Referbby.png";
import DistritoModaImg from "../assets/images/DistritoModa.jpg";
import AdbizeImg from "../assets/images/Adbize.png";

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

export const projects: Project[] = [
  {
    title: "Referbby",
    description:
      "Sistema de referencias con embajadores, tracking de comisiones y pagos con Stripe.",
    image: ReferbbyImg,
    tech: ["NestJS", "React", "TypeScript", "Stripe", "PostgreSQL", "TypeORM"],
    github: "https://github.com/cristiand001",
    live: "https://referby-front.vercel.app/",
    category: "fullstack",
    featured: true,
  },
  {
    title: "Desarrollemos MX (Adbize)",
    description:
      "Portal académico para universidad con gestión de cursos, calificaciones y roles diferenciados.",
    image: AdbizeImg,
    tech: ["React", "Node.js", "Supabase", "Socket.io", "PostgreSQL", "OpenAI"],
    github: "https://github.com/cristiand001",
    live: "https://desarrollemosmx.vercel.app/",
    category: "fullstack",
    featured: true,
  },
  {
    title: "Distrito Moda",
    description:
      "E-commerce mayorista con integración de APIs de logística y pagos.",
    image: DistritoModaImg,
    tech: ["Drupal", "PHP", "JavaScript", "MySQL", "MercadoPago API"],
    live: "https://distritomoda.com.ar",
    category: "fullstack",
    featured: true,
  },
  // {
  //   title: "Portfolio Personal",
  //   description:
  //     "Portfolio moderno con animaciones, tema oscuro y formulario de contacto funcional.",
  //   image: "../../public/images/Adbize.png",
  //   tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Formspree"],
  //   github: "https://github.com/cristiand001/portfolio",
  //   category: "frontend",
  // },
];
