"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "ui";
import LoginDialog from "./LoginDialog";
import UserDropdown from "./UserDropdown";

const Login: React.FC = () => {
  const [isDialogActive, setIsDialogActive] = useState(false);
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <LoginDialog
          isActive={isDialogActive}
          setIsActive={setIsDialogActive}
        />
        <Button onClick={() => setIsDialogActive(true)}>Sign In</Button>
      </>
    );
  }

  if (session.user) {
    return <UserDropdown user={session.user} />;
  }

  return null;
};

export default Login;
