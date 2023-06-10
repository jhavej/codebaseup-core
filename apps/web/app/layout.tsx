import { Metadata } from "next";
import { TailwindIndicator } from "ui";
import { fontSans } from "ui/lib/fonts";
import { cn } from "ui/lib/utils";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/app/components/Navbar";
import Providers from "./Providers";
import "ui/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <Providers>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
        </div>
        <TailwindIndicator />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
