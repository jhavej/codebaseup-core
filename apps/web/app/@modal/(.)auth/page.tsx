"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "ui";
import { Google } from "ui/icons";

const LoginDialog = () => {
  const [signInClicked, setSignInClicked] = useState(false);
  const router = useRouter();

  return (
    <Dialog
      defaultOpen
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          router.back();
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to updates</DialogTitle>
          <DialogDescription>
            <div className="py-4">
              Get early access to new feature updates. I also share my knowledge
              as a both software developer and solopreneur.
            </div>
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={async () => {
            setSignInClicked(true);
            await signIn("google");
          }}
          disabled={signInClicked}
        >
          <Google className="h-5 w-5 mr-2" />
          <p>Sign in with Google</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
