import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { Avatar, AvatarImage, Button, Card, CardContent } from "ui";

export const ThankYou = () => {
  return (
    <Card className="max-w-[600px] mx-auto rounded-none border-none shadow-none">
      <CardContent className="bg-gradient-to-b from-violet-400 via-fuchsia-300 via-60% to-transparent to-90% p-[10px]">
        <div className="flex flex-col bg-card">
          <div className="m-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Thank you!
            </h2>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              I have no doubt that you&apos;re about to embark on an incredible
              journey of innovation and creativity with this codebase. Whether
              you&apos;re a solo creator or part of a team, this codebase is
              your canvas, waiting for your unique ideas to come to life.
              I&apos;m here to support you every step of the way. If you ever
              need assistance, have questions, or want to share your amazing
              creations, please don&apos;t hesitate to reach out. Your success
              is my success, and I can&apos;t wait to see what extraordinary
              things you&apos;ll build. Thank you for being a part of the
              CodebaseUp community. Here&apos;s to a future filled with
              groundbreaking projects and endless possibilities.
            </h3>
            <div className="flex gap-4 items-center">
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/9072750?v=4"
                  alt="@jakubhavej"
                />
              </Avatar>
              <div className="text-sm">
                <p className="font-semibold">Jakub Havej</p>
                <p className="text-muted-foreground">Creator of CodebaseUp</p>
              </div>
              <div className="flex gap-4">
                <Link href="https://twitter.com/jakubhavej" target="_blank">
                  <Button size="icon" variant="ghost">
                    <Twitter />
                  </Button>
                </Link>
                <Link
                  href="https://github.com/jhavej/codebaseup-core"
                  target="_blank"
                >
                  <Button size="icon" variant="ghost">
                    <Github />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
