import Link from "next/link";
import { Twitter } from "lucide-react";
import { buttonVariants } from "ui";
import { GitHub } from "ui/icons";
import { siteConfig } from "@/config/site";
import { Login } from "@/components/Navbar";
import MainNav from "./MainNav";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => (
  <header className="sticky top-0 z-40 w-full border-b bg-background">
    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <MainNav items={siteConfig.mainNav} />
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <GitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <ThemeToggle />
          <Login />
        </nav>
      </div>
    </div>
  </header>
);

export default Navbar;
