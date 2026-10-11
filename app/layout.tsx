import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "FORMA MCP",
  description: "A real browser for any MCP-compatible agent.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
