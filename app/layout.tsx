import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  icons: { icon: "/dirt-sampling-emblem.png", apple: "/dirt-sampling-emblem.png" },
  title: "Dirt Sampling Beat Mafia | Detroit Producer",
  description: "Detroit-inspired hip-hop and R&B production from Dirt Sampling Beat Mafia."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
