"use client";

import { SessionProvider } from "next-auth/react";
import { AnalyticsProvider } from "./AnalyticsProvider";
import { ThemeProvider } from "./ThemeProvider";

export const Providers = ({ children }: React.PropsWithChildren) => (
  <SessionProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </ThemeProvider>
  </SessionProvider>
);
