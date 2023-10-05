import Link from "next/link";
import { Lock } from "lucide-react";
import { Button } from "ui";
import { Feature } from "./Feature";
import { FeatureCategory, features } from "./features";

export const FeatureList = () => {
  return (
    <div>
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-lg md:text-xl uppercase tracking-widest md:tracking-[0.4rem] text-violet-400">
          150+ hours saved
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Modular design puts you in control
        </h2>
        <p className="text-muted-foreground">
          Not every project requires every feature. That&apos;s why the codebase
          is modular and customizable. Enjoy the flexibility to choose what fits
          your project.
        </p>
      </div>
      <div className="flex flex-col gap-20">
        <div>
          <h3 className="text-xl font-semibold mb-8">Core features</h3>
          <div className="flex flex-wrap gap-8">
            {features
              .filter(({ category }) => category === FeatureCategory.Free)
              .map((feature) => (
                <Feature key={feature.title} feature={feature} />
              ))}
          </div>
        </div>

        <div>
          <h3 className="flex gap-4 text-xl font-semibold mb-2">
            Premium features
            <Lock className="h-6 w-6" />
          </h3>
          <p className="text-muted-foreground text-sm mb-8">
            You can get far with free core features. The premium features take
            it up a notch by providing functionalities to key use cases of every
            modern app. It saves you{" "}
            <span className="font-semibold text-foreground">
              more than 150 hours of setup hassle.
            </span>
          </p>
          <Link href="https://www.codebaseup.com/pricing">
            <Button className="mb-8">Upgrade CodebaseUp</Button>
          </Link>
          <div className="flex flex-wrap gap-8">
            {features
              .filter(({ category }) => category === FeatureCategory.Premium)
              .map((feature) => (
                <Feature key={feature.title} feature={feature} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
