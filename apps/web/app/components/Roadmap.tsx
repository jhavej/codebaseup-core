import Link from "next/link";
import { CheckCircle2, Clock4, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  buttonVariants,
} from "ui";
import { SubscriptionButton } from "./SubscriptionButton";

interface Item {
  title: string;
  description: string;
  link?: string;
  isComplete: boolean;
}

const roadmapItems: Item[] = [
  {
    title: "Turborepo",
    description:
      "A high-performance build system for JavaScript and TypeScript codebases. Reusable project architecture.",
    link: "https://turbo.build/",
    isComplete: true,
  },
  {
    title: "Next.js",
    description: "The React Framework for the Web. With the App Router.",
    link: "https://nextjs.org/",
    isComplete: true,
  },
  {
    title: "Typescript",
    description:
      "A strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org/",
    isComplete: true,
  },
  {
    title: "NextAuth.js",
    description: "The authentication for Next.js.",
    link: "https://next-auth.js.org/",
    isComplete: true,
  },
  {
    title: "Prisma (database)",
    description: "Next-generation Node.js and TypeScript ORM.",
    link: "https://www.prisma.io/",
    isComplete: true,
  },
  {
    title: "Design system",
    description:
      "Beautifully designed components by @shadcn. Based on Radix & Tailwind CSS",
    link: "https://ui.shadcn.com/",
    isComplete: true,
  },
  {
    title: "ESLint & Prettier",
    description:
      "A code analysis tool and formatter for consistent style and error enforcement.",
    link: "https://eslint.org/",
    isComplete: true,
  },
  {
    title: "tRPC",
    description: "End-to-end typesafe APIs made easy.",
    link: "https://trpc.io/",
    isComplete: false,
  },
  {
    title: "File storage",
    description: "A tooling for uploading and storing files.",
    isComplete: false,
  },
  {
    title: "Internationalization",
    description: "Translations and related management.",
    isComplete: false,
  },
  {
    title: "Emailing",
    description: "Sending emails in-app.",
    isComplete: false,
  },
  {
    title: "Chrome extension",
    description: "A boilerplate for creating Chrome extensions using React.",
    isComplete: false,
  },
  {
    title: "Content management system",
    description: "A tooling for running a blog.",
    isComplete: false,
  },
  {
    title: "Analytics",
    description:
      "Collecting essential insights about how visitors are using your site.",
    isComplete: true,
  },
];

const RoadmapItem = ({
  item: { title, link, description },
}: {
  item: Item;
}) => (
  <li className="mb-6 last:mb-0 flex gap-3">
    <div className="flex-shrink">
      <div className="flex items-center gap-1 min-h-[24px]">
        <p className="text-sm font-medium leading-none">{title}</p>
        {link && (
          <Link href={link} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "xs",
                variant: "ghost",
              })}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">{title}</span>
            </div>
          </Link>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </li>
);

const Roadmap = () => (
  <Card className="flex flex-col bg-secondary text-secondary-foreground rounded-2xl shadow-xl md:max-h-[80vh]">
    <CardHeader>
      <CardTitle>Project roadmap</CardTitle>
      <CardDescription>
        I expand the starter pack gradually as my other projects grow and when I
        spot the reusability of a given feature. Suggestions are welcome.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex gap-6 min-h-0 overflow-hidden flex-shrink">
      <div className="basis-1/2 flex flex-col">
        <div className="flex gap-2 items-center">
          <CheckCircle2 className="flex-none" />
          <h4 className="text-sm font-medium leading-none">Completed</h4>
        </div>
        <Separator className="my-4" />
        <ul className="flex-shrink min-h-0 overflow-y-auto">
          {roadmapItems
            .filter(({ isComplete }) => !!isComplete)
            .map((item, index) => (
              <RoadmapItem key={index} item={item} />
            ))}
        </ul>
      </div>
      <div className="basis-1/2 flex flex-col">
        <div className="flex gap-2 items-center">
          <Clock4 className="flex-none" />
          <h4 className="text-sm font-medium leading-none">Coming soon</h4>
        </div>
        <Separator className="my-4" />
        <div className="flex-shrink min-h-0 overflow-y-auto">
          {roadmapItems
            .filter(({ isComplete }) => !isComplete)
            .map((item, index) => (
              <RoadmapItem key={index} item={item} />
            ))}
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <SubscriptionButton />
    </CardFooter>
  </Card>
);

export default Roadmap;
