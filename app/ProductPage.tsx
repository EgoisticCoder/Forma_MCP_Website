"use client";

import { useState } from "react";

type Product = "cli" | "mcp";

const content = {
  cli: {
    index: "01 / THE WORKSPACE",
    eyebrow: "A VISUAL CODING AGENT FOR YOUR TERMINAL",
    title: <>Your agent<br />can <i>see</i> what<br />it ships.</>,
    intro: "A thoughtful terminal agent with a real browser, a permissioned toolbelt, and a specialist eye for interface quality. Inspect the page. Make the change. See the difference.",
    install: "npm install --global @forma-ai/forma",
    cta: "Install the CLI",
    href: "https://www.npmjs.com/package/@forma-ai/forma",
    image: "/forma-mascot-mono-amber.svg",
    label: "FORMA / INTERACTIVE AGENT",
    stat: "YOUR MODEL · YOUR WORKSPACE · YOUR APPROVAL",
    bullets: [
      ["The full loop", "Move from browser evidence to a code change, then compare the visual result."],
      ["A browser with boundaries", "Inspect pages in isolated Chromium. Approve browser actions and file edits as you go."],
      ["Your way of working", "Use a compatible hosted model or local Ollama. Change providers, credentials, tools, and themes in session."],
      ["A terminal that feels considered", "Live streamed replies, command suggestions, progress feedback, and an expressive mascot."],
    ],
    steps: ["Install FORMA", "Connect the audit endpoint and your coding model", "Open a project and ask for a browser-backed fix"],
    code: "$ forma\n› Inspect this page at mobile width and fix the crowded navigation.\n\n◆ browser_open  · permission granted\n◆ axe_scan      · 2 serious findings\n◆ edit_file     · waiting for approval\n◆ visual_diff   · ready to compare",
    other: "Meet the MCP server",
    otherHref: "https://github.com/EgoisticCoder/Forma_MCP",
    repo: "https://github.com/EgoisticCoder/Forma_CLI",
    repoName: "GitHub repository",
  },
  mcp: {
    index: "02 / THE CONNECTION",
    eyebrow: "A BROWSER TOOLKIT FOR ANY MCP CLIENT",
    title: <>Give your<br />agent a <i>real</i><br />browser.</>,
    intro: "A portable Playwright MCP server for interface inspection. Plug it into an IDE or AI client, then let your agent read the page, measure what matters, and act only with your approval.",
    install: "npx -y @forma-ai/forma-mcp",
    cta: "View on npm",
    href: "https://www.npmjs.com/package/@forma-ai/forma-mcp",
    image: "",
    label: "FORMA MCP / TOOL CONNECTION",
    stat: "STDIO TRANSPORT · OPEN CLIENT ECOSYSTEM",
    bullets: [
      ["One browser, many clients", "Use the standard MCP stdio transport with MCP-compatible IDEs and chat agents."],
      ["Evidence from the live page", "Read DOM structure, console and network events, accessibility, contrast, layout, and performance."],
      ["Interact when you say so", "Scroll, hover, click, type, resize, and capture states through host-controlled consent."],
      ["Honest measurements", "Automated scans surface signals; human review remains essential for usability and accessibility."],
    ],
    steps: ["Add the MCP server to your client", "Set FORMA_URL and FORMA_TOKEN", "Ask your agent to inspect a page"],
    code: "{\n  \"command\": \"npx\",\n  \"args\": [\"-y\", \"@forma-ai/forma-mcp\"],\n  \"env\": {\n    \"FORMA_URL\": \"https://your-kaggle-tunnel\",\n    \"FORMA_TOKEN\": \"your-token\"\n  }\n}",
    other: "Meet the terminal agent",
    otherHref: "https://github.com/EgoisticCoder/Forma_CLI",
    repo: "https://github.com/EgoisticCoder/Forma_MCP",
    repoName: "GitHub repository",
  },
};

export default function ProductPage({ product }: { product: Product }) {
  const item = content[product];
  const [copied, setCopied] = useState(false);

  async function copyInstall() {
    await navigator.clipboard?.writeText(item.install);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return <main className={`product-page product-${product}`}>
    <nav className="product-nav">
      <a className="product-brand" href="/">FORMA<span>®</span></a>
      <div className="product-nav-links"><a href={item.repo}>SOURCE CODE ↗</a><a href={item.otherHref}>{item.other.toUpperCase()} ↗</a></div>
      <a className="nav-pill" href={item.href}>{item.cta}<span>↗</span></a>
    </nav>

    <section className="product-hero">
      <div className="product-hero-copy">
        <div className="product-eyebrow"><span />{item.eyebrow}</div>
        <div className="product-index">{item.index}</div>
        <h1>{item.title}</h1>
        <p>{item.intro}</p>
        <div className="product-actions"><a className="primary-pill" href={item.href}>{item.cta}<span>↗</span></a><a className="quiet-link" href={item.repo}>Explore the source <span>↗</span></a></div>
        <div className="product-micro">OPEN SOURCE <b>·</b> LOCAL FIRST <b>·</b> HUMAN IN CONTROL</div>
      </div>
      <div className="product-visual">
        <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
        <div className="visual-caption"><span>{item.label}</span><span>FIG. 0{product === "cli" ? "1" : "2"}</span></div>
        {product === "cli" && <div className="mascot-plate"><img src={item.image} alt="FORMA mascot"/><span>YOUR EYES<br/>ON THE INTERFACE</span></div>}
        <div className="terminal-window">
          <div className="terminal-top"><span className="term-dots"><i/><i/><i/></span><span>{product === "cli" ? "forma — workspace" : "mcp client — browser tools"}</span><span>•••</span></div>
          <pre>{item.code}</pre>
          <div className="terminal-bottom"><span className="terminal-light"/>{item.stat}</div>
        </div>
        <div className="visual-foot">A BETTER FEEDBACK LOOP, MADE TANGIBLE</div>
      </div>
    </section>

    <section className="product-proof"><span>LOOK</span><b>→</b><span>MEASURE</span><b>→</b><span>MAKE</span><b>→</b><span>VERIFY</span><small>THE FORMA LOOP</small></section>

    <section className="product-features">
      <div className="features-heading"><div className="product-index">BUILT FOR THE MOMENT AFTER “IT WORKS”</div><h2>Good software<br/>should <i>feel</i> right.</h2></div>
      <div className="feature-list">{item.bullets.map(([title, description], index) => <article className="feature-row" key={title}><span className="feature-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="feature-arrow">↗</span></article>)}</div>
    </section>

    <section className="product-setup">
      <div className="setup-left"><div className="product-index">A SMALL SETUP. A BIGGER PICTURE.</div><h2>Start with<br/><i>one command.</i></h2><p>Bring the model and workflow that already work for you. FORMA adds the missing browser feedback loop.</p><button className="copy-command" onClick={copyInstall}><code>{item.install}</code><span>{copied ? "COPIED ✓" : "COPY ↗"}</span></button><a className="quiet-link setup-repo" href={item.repo}>{item.repoName} <span>↗</span></a></div>
      <div className="setup-steps">{item.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><p>{step}</p></div>)}<a href={item.otherHref}>{item.other}<span>↗</span></a></div>
    </section>

    <footer className="product-footer"><a className="product-brand" href="/">FORMA<span>®</span></a><span>SEE WHAT YOUR CODE SHIPS.</span><a href={item.repo}>{item.repoName} ↗</a><span>© 2026 FORMA</span></footer>
  </main>;
}
