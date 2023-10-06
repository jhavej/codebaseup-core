import { CallToAction } from "./CallToAction";
import { FeatureList } from "./FeatureList";
import { Hero } from "./Hero";
import { ThankYou } from "./ThankYou";

export const Homepage = () => {
  return (
    <div className="container flex flex-col gap-20 my-20">
      <Hero />
      <CallToAction />
      <ThankYou />
      <FeatureList />
    </div>
  );
};
