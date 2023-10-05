import { Wrench } from "lucide-react";
import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui";
import { IFeature } from "./features";

interface Props {
  feature: IFeature;
}

export const Feature = ({ feature }: Props) => {
  const { title, description, tag, libraries, icon } = feature;
  return (
    <Card className="flex flex-col bg-accent text-muted-foreground text-xs h-full basis-full sm:basis-[calc(50%-(2rem*1/2))] md:basis-[calc(33%-(2rem*2/3))] lg:basis-[calc(25%-(2rem*3/4))]">
      <CardHeader>
        <CardTitle className="flex items-start justify-between text-foreground">
          <div>
            {!!icon && (
              <div className="h-6 w-6 flex mb-2 text-violet-400">{icon}</div>
            )}
            <span className="text-lg font-semibold">{title}</span>
          </div>
          {!!tag && (
            <Badge className="hidden lg:block" variant="secondary">
              {tag}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="grow">{description}</CardContent>
      <CardFooter className="flex gap-4">
        <Wrench className="h-4 w-4" />
        <div>{libraries.join(", ")}</div>
      </CardFooter>
    </Card>
  );
};
