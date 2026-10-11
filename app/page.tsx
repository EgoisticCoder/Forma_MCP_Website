import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "FORMA MCP — Browser tools for every MCP client",
  description: "Meet FORMA MCP: a Playwright browser server for UI/UX audits, accessibility, responsive inspection, and measured page evidence.",
};

export default function Home() {
  return <ProductPage product="mcp" />;
}
