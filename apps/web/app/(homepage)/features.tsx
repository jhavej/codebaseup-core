import { ReactNode } from "react";
import {
  BarChart4,
  Chrome,
  Eye,
  FormInput,
  Landmark,
  Languages,
  Mail,
  Medal,
  Newspaper,
  ShieldCheck,
  UploadCloud,
  User2,
} from "lucide-react";

export enum FeatureCategory {
  Free = "free",
  Premium = "premium",
}

export interface IFeature {
  title: string;
  description: string;
  libraries: string[];
  category: FeatureCategory;
  tag?: string;
  icon?: ReactNode;
}

export const features: IFeature[] = [
  {
    title: "Monorepo",
    description:
      "Empowering solo makers and tech teams with seamless coding - best practices, one-click tests, zero duplicity, and library compatibility guaranteed.",
    tag: "saves 6hrs",
    libraries: ["Turborepo", "Typescript", "Prettier", "ESLint"],
    category: FeatureCategory.Free,
  },
  {
    title: "Next.js",
    description:
      "Dive into Next.js (v14+ App Router) like a pro, experiencing React Server Components, route interception, and more in action.",
    tag: "saves 4hrs",
    libraries: ["Next.js (v14+ App Router)"],
    category: FeatureCategory.Free,
  },
  {
    title: "Database",
    description:
      "Launch and share your cloud-based database swiftly and bid farewell to the 'It worked on my computer' headache.",
    tag: "saves 3hrs",
    libraries: ["PostgreSQL", "Prisma"],
    category: FeatureCategory.Free,
  },
  {
    title: "Authentication",
    description:
      "Choose from a wide array of popular authentication services, including Google and magic link authentication, to secure your application with ease.",
    tag: "saves 2hrs",
    libraries: ["Auth.js (NextAuth.js)"],
    category: FeatureCategory.Free,
  },
  {
    title: "Design system",
    description:
      "Use an open-source and optimized component library. No vendor lock-in — just copy, paste, and flavor with Tailwind CSS when needed.",
    tag: "saves 5hrs",
    libraries: ["Radix UI", "Tailwind", "shadcn/ui"],
    category: FeatureCategory.Free,
  },
  {
    icon: <Languages />,
    title: "Internationalization",
    description: "Transform your site into a multilingual masterpiece.",
    libraries: ["NextAuth.js"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <Newspaper />,
    title: "Blog",
    description: "Craft content with MDX syntax, manage it by a tool you love.",
    libraries: ["Contentlayer", "Notion.so"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <Mail />,
    title: "Emailing",
    description: "Reach humans instead of spam folders. Build emails at scale.",
    libraries: ["Resend", "React Emails"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <UploadCloud />,
    title: "File uploads",
    description: "Store user files secure and globally accessible.",
    libraries: ["AWS S3"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <Medal />,
    title: "SEO",
    description: "Rank your site at the top of search engine results.",
    libraries: ["Vercel metadata", "Vercel OG"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <BarChart4 />,
    title: "Site analytics",
    description:
      "Understand your audience, build funnels, and optimize for success.",
    libraries: ["Google tag manager", "Google Analytics GA4"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <Eye />,
    title: "Monitoring",
    description: "Sleep soundly with real-time monitoring.",
    libraries: ["Sentry"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <FormInput />,
    title: "Forms & Validations",
    description:
      "Use performant, flexible, and extensible forms with easy-to-use validation.",
    libraries: ["React Hook Form", "zod"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <Landmark />,
    tag: "Soon",
    title: "Payments",
    description:
      "Unlock the revenue potential with payment gateway integration.",
    libraries: ["Stripe"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <ShieldCheck />,
    tag: "Soon",
    title: "Testing",
    description: "Build a robust and error-free web applications.",
    libraries: ["Cypress"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <Chrome />,
    tag: "Soon",
    title: "Chrome extension",
    description:
      "Create custom browser solutions and enhance your browsing experience with ease.",
    libraries: ["Chrome"],
    category: FeatureCategory.Premium,
  },
  {
    icon: <User2 />,
    tag: "Soon",
    title: "Community support",
    description:
      "Need a helping hand or a fresh perspective? You'll never be alone on this journey.",
    libraries: ["Discord"],
    category: FeatureCategory.Premium,
  },
];
