"use client";

import { Dispatch, SetStateAction, useState } from "react";
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

interface DialogProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const LoginDialog: React.FC<DialogProps> = ({ isActive, setIsActive }) => {
  const [signInClicked, setSignInClicked] = useState(false);
  return (
    <Dialog open={isActive} onOpenChange={setIsActive}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          <DialogDescription>
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={async () => {
            setSignInClicked(true);
            await signIn("google");
            setIsActive(false);
          }}
          disabled={signInClicked}
        >
          <Google className="h-5 w-5" />
          <p>Sign in with Google</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
