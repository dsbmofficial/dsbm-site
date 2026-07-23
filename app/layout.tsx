import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darkies Sampling Beat Mafia | Detroit Producer",
  description: "Detroit-inspired hip-hop and R&B production from Darkies Sampling Beat Mafia."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
