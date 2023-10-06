import Link from "next/link";
import { Triangle } from "lucide-react";
import { Button } from "ui";

export const CallToAction = () => {
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <Link
        className="flex justify-center"
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjhavej%2Fcodebaseup"
      >
        <Button size="lg">
          <Triangle className="mr-2 h-4 w-4" />
          Deploy to Vercel
        </Button>
      </Link>
      <Link
        className="flex justify-center"
        href="https://github.com/jhavej/codebaseup/issues"
      >
        <Button size="lg" variant="outline">
          Report bug
        </Button>
      </Link>
    </div>
  );
};
