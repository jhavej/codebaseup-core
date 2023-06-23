"use client";

import Link from "next/link";
import { BellRing, CheckCircle, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { Button } from "ui";

export const SubscriptionButton = () => {
  const { data: session } = useSession();

  if (session === undefined) {
    return (
      <Button className="w-full" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      </Button>
    );
  }

  return (
    <Link href={session ? "#" : "/auth"} className="w-full">
      <Button className="w-full" disabled={!!session}>
        {session ? (
          <>
            <CheckCircle className="mr-2 h-4 w-4" />
            <span>I have you on the list!</span>
          </>
        ) : (
          <>
            <BellRing className="mr-2 h-4 w-4" />
            <span>Subscribe to updates</span>
          </>
        )}
      </Button>
    </Link>
  );
};
