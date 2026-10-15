import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "FORMA MCP — Browser tools for MCP-compatible clients",
  description: "Connect a Playwright browser toolkit to MCP-compatible IDEs and AI clients.",
};

export default function Home() {
  return <ProductPage product="mcp" />;
}
