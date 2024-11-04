import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "../lib/Providers";

export const metadata: Metadata = {
  title: "TechMates",
  description: "Welcome to TechMates",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <main className="min-h-screen">
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
