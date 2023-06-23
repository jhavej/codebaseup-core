import Link from "next/link";
import { Twitter } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  buttonVariants,
} from "ui";
import { GitHub } from "ui/icons";

const ProfileLink = ({ url, icon, title }) => (
  <Link href={url} target="_blank" rel="noreferrer">
    <div
      className={buttonVariants({
        size: "sm",
        variant: "ghost",
      })}
    >
      {icon}
      <span className="sr-only">{title}</span>
    </div>
  </Link>
);

const Welcome = () => (
  <Card className="rounded-2xl shadow-xl">
    <CardContent className="flex gap-4 pt-6">
      <Avatar className="h-10 w-10">
        <AvatarImage src="/images/profile-photo.jpg" alt="Jakub Havej" />
        <AvatarFallback>JH</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <h3 className="text-sm font-semibold">Hi, I&apos;m Jakub!</h3>
        <p className="text-sm text-muted-foreground">
          It used to take me a long time to complete the initial project setup.
          It made business idea validations tedious and ineffective. These days
          are gone. Join me, and let&apos;s ship Javascript apps fast.
        </p>
        <div className="flex flex-row-reverse">
          <ProfileLink
            url="https://github.com/jhavej"
            icon={<GitHub className="h-5 w-5" />}
            title="GitHub"
          />
          <ProfileLink
            url="https://twitter.com/jakubhavej"
            icon={<Twitter className="h-5 w-5 fill-current" />}
            title="Twitter"
          />
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Welcome;
