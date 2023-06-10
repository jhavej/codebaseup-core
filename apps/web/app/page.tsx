import Link from "next/link";
import { buttonVariants } from "ui";
import { siteConfig } from "@/config/site";

const Homepage = () => (
  <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-w-[900px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        {siteConfig.description}
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        The starter pack built on top-notch technologies that enables you to
        ship apps fast. Free. Open Source.
      </p>
    </div>
    <div className="flex gap-4">
      <Link
        target="_blank"
        rel="noreferrer"
        href={siteConfig.links.github}
        className={buttonVariants({ variant: "outline", size: "lg" })}
      >
        GitHub
      </Link>
    </div>
  </section>
);

export default Homepage;
