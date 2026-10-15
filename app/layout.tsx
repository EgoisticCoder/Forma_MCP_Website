import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "FORMA PRODUCT — Browser tools for a better feedback loop",
  description: "FORMA brings together browser inspection, a visual UI/UX audit model, and coding agents.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
