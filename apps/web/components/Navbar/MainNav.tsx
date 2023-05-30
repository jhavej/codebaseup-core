import Link from "next/link";
import { Boxes } from "lucide-react";
import { cn } from "ui/lib/utils";
import { siteConfig } from "@/config/site";

interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
}

const MainNav = ({ items }: MainNavProps) => (
  <div className="flex gap-6 md:gap-10">
    <Link href="/" className="hidden items-center space-x-2 md:flex">
      <Boxes className="h-6 w-6" />
      <span className="hidden font-bold sm:inline-block">
        {siteConfig.name}
      </span>
    </Link>
    {items?.length ? (
      <nav className="hidden gap-6 md:flex">
        {items?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            )
        )}
      </nav>
    ) : null}
  </div>
);

export default MainNav;
