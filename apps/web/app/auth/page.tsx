"use client";

import { signIn } from "next-auth/react";
import { Button } from "ui";
import { Google } from "ui/icons";

const Login = () => (
  <Button
    onClick={() => {
      signIn("google");
    }}
  >
    <Google className="h-5 w-5 mr-2" />
    <p>Sign in with Google</p>
  </Button>
);

export default Login;
