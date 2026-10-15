type Product = "cli" | "mcp";

const products = {
  cli: {
    name: "FORMA CLI",
    eyebrow: "A VISUAL CODING AGENT FOR YOUR TERMINAL",
    title: <>YOUR TERMINAL<br/>CAN <em>SEE</em> THE PAGE.</>,
    intro: "Pair a coding model you choose with a permissioned browser and FORMA’s screenshot-trained UI/UX auditor. Inspect a page, make a change, and review the result in one workflow.",
    install: "npm install --global @forma-ai/forma",
    command: "forma audit https://your-site.example",
    npm: "https://www.npmjs.com/package/@forma-ai/forma",
    repo: "https://github.com/EgoisticCoder/Forma_CLI",
    other: "https://forma-mcp-website.vercel.app/",
    otherLabel: "FORMA MCP WEBSITE",
    stage: "TERMINAL CODING AGENT",
    features: [
      ["Browser-backed workflow", "Open pages in an isolated Playwright browser, inspect evidence, and review the visual result after a change."],
      ["Inspect real page signals", "Collect screenshots, DOM details, console and network events, accessibility findings, and responsive measurements."],
      ["Keep permissions in your hands", "Approve browser interactions, file edits, and shell commands. FORMA does not use your everyday browser profile."],
      ["Choose your coding model", "Connect a compatible hosted provider or local Ollama model and configure FORMA to fit your workflow."],
    ],
    sample: ["$ forma audit https://your-site.example", "> Browser inspection starts after approval", "> Screenshot and page evidence are collected", "> FORMA returns a preliminary visual audit", "> Review findings and decide what to change"],
  },
  mcp: {
    name: "FORMA MCP",
    eyebrow: "BROWSER TOOLS FOR MCP-COMPATIBLE CLIENTS",
    title: <>GIVE YOUR AGENT<br/>A <em>REAL</em> BROWSER.</>,
    intro: "Connect a Playwright browser toolkit to MCP-compatible IDEs and AI clients. Inspect page structure and browser signals, then interact with the page through your host’s permission flow.",
    install: "npx -y @forma-ai/forma-mcp",
    command: "FORMA_URL + FORMA_TOKEN",
    npm: "https://www.npmjs.com/package/@forma-ai/forma-mcp",
    repo: "https://github.com/EgoisticCoder/Forma_MCP",
    other: "https://forma-cli-website.vercel.app/",
    otherLabel: "FORMA CLI WEBSITE",
    stage: "MODEL CONTEXT PROTOCOL",
    features: [
      ["Portable MCP connection", "Use the standard local stdio server with MCP-compatible tools, IDEs, and chat clients."],
      ["Inspect the page", "Capture screenshots and read DOM structure, headings, links, console errors, network failures, and accessibility signals."],
      ["Interact with permission", "Navigate, scroll, resize, hover, click, and type through the consent flow provided by the connected host."],
      ["Use the visual auditor", "Send page screenshots and measured context to a configured FORMA endpoint for a structured UI/UX review."],
    ],
    sample: ["{", '  "command": "npx",', '  "args": ["-y", "@forma-ai/forma-mcp"],', '  "env": {', '    "FORMA_URL": "your-endpoint",', '    "FORMA_TOKEN": "your-token"', "  }", "}"],
  },
} as const;

export default function ProductPage({ product }: { product: Product }) {
  const item = products[product];
  return <>
    <div className="ambient-backdrop" aria-hidden="true"><div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/><div className="ambient-grid"/></div>
    <div className="film-grain" aria-hidden="true"/>
    <a href="#main-content" className="skip-link">SKIP TO CONTENT [ENTER]</a>
    <header className="nav-wrapper"><nav className="navbar-pill glass-pill" aria-label="Primary navigation"><a href="#top" className="nav-logo"><span>INFR</span><span className="zero-badge" aria-hidden="true"/></a><ul className="nav-links"><li><a href="#features" className="nav-link"><span className="roll-text"><span className="roll-text-inner">Capabilities</span></span></a></li><li><a href="#setup" className="nav-link"><span className="roll-text"><span className="roll-text-inner">Get started</span></span></a></li><li><a href={item.repo} className="nav-link" target="_blank" rel="noreferrer"><span className="roll-text"><span className="roll-text-inner">Source</span></span></a></li></ul><div className="nav-actions"><a className="btn btn-primary btn-sm" href={item.npm} target="_blank" rel="noreferrer"><span className="btn-circle"/><span className="btn-content"><span className="roll-text"><span className="roll-text-inner">VIEW ON NPM ↗</span></span></span></a></div></nav></header>
    <main id="main-content">
      <section className="hero container" id="top">
        <div className="hero-top-bar"><div className="announcement-pill glass-pill"><span className="pulse-beacon" aria-hidden="true"/><span>INFRA LABS // {item.stage}</span></div><span className="mono-label">FORMA // OPEN SOURCE TOOLING</span></div>
        <div className="hero-headline-wrap"><h1 className="hero-giant-title"><span className="split-mask"><span className="split-line hero-anim-line">{item.title}</span></span></h1></div>
        <div className="hero-sub-row"><p className="hero-lead">{item.intro}</p><div className="hero-cta-group"><a className="btn btn-primary" href={item.npm} target="_blank" rel="noreferrer"><span className="btn-circle"/><span className="btn-content"><span className="roll-text"><span className="roll-text-inner">GET THE PACKAGE ↗</span></span></span></a><a className="btn btn-secondary" href={item.repo} target="_blank" rel="noreferrer"><span className="btn-content"><span className="roll-text"><span className="roll-text-inner">SOURCE CODE ↗</span></span></span></a></div></div>
        <div className="ide-stage"><div className="ide-frame glass-card"><div className="ide-header"><span className="mono-label" style={{color:"var(--text)"}}>{item.name} // EXAMPLE</span><span className="mono-label">ILLUSTRATIVE WORKFLOW</span></div><div className="ide-body"><div className="ide-code-pane">{item.sample.map((line, index) => <div className="code-row" key={index}><span className="code-ln">{String(index + 1).padStart(2, "0")}</span><span>{line}</span></div>)}</div><div className="ide-cli-pane"><div><div className="mono-label" style={{color:"var(--text)",borderBottom:"1px solid var(--line)",paddingBottom:10,marginBottom:14}}>QUICK START</div><div>{item.install}</div><div style={{marginTop:14}}>{item.command}</div></div><div className="mono-label" style={{borderTop:"1px solid var(--line)",paddingTop:14,marginTop:16}}>USE ONLY WITH SERVICES YOU CONFIGURE</div></div></div></div></div>
      </section>
      <div className="marquee-strip" aria-label="FORMA workflow"><div className="marquee-track"><span className="highlight">OPEN PAGE</span><span>—</span><span>COLLECT EVIDENCE</span><span>—</span><span>REVIEW</span><span>—</span><span>MAKE A CHANGE</span><span>—</span><span>VERIFY</span><span>—</span><span className="highlight">OPEN PAGE</span><span>—</span><span>COLLECT EVIDENCE</span><span>—</span><span>REVIEW</span><span>—</span><span>MAKE A CHANGE</span><span>—</span><span>VERIFY</span><span>—</span></div></div>
      <section className="section-pad container" id="features"><div className="section-meta"><span className="section-marker"><span className="zero-dot"/> [01 // CAPABILITIES]</span><span className="mono-label">{item.name}</span></div><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:20,marginBottom:"clamp(2.5rem,5vw,4rem)"}}><h2 className="display-title">SEE THE PAGE.<br/>UNDERSTAND IT.</h2><p className="mono-label" style={{maxWidth:"38ch"}}>A browser workflow with measured evidence and user-controlled actions.</p></div><div className="bento-grid">{item.features.map(([title, description], index) => <article key={title} className={`bento-card glass-card ${index % 2 === 0 ? "bento-span-7" : "bento-span-5"}`}><div className="bento-top"><span className="mono-label">0{index + 1} // {item.name}</span><span className="bento-glyph">CAPABILITY</span></div><div className="bento-visual"><div>{title}</div><div style={{color:"var(--text)",marginTop:6}}>{description}</div></div><div><h3 className="bento-title">{title}</h3><p className="bento-desc">{description}</p></div></article>)}</div></section>
      <section className="section-pad container" id="setup"><div className="section-meta"><span className="section-marker"><span className="zero-dot"/> [02 // GET STARTED]</span><span className="mono-label">INSTALL FROM NPM</span></div><div className="feature-split-row"><div><div className="mono-label" style={{marginBottom:12}}>PACKAGE</div><h2 className="display-title" style={{fontSize:"clamp(2rem,4vw,3.4rem)",marginBottom:18}}>{item.install}</h2><p className="bento-desc">Read the package documentation before configuring endpoint credentials or allowing browser actions.</p></div><div className="glass-card" style={{padding:28}}><div className="mono-label" style={{color:"var(--text)",borderBottom:"1px solid var(--line)",paddingBottom:16,marginBottom:18}}>PROJECT LINKS</div><p className="bento-desc"><a href={item.npm} target="_blank" rel="noreferrer">NPM PACKAGE ↗</a></p><p className="bento-desc"><a href={item.repo} target="_blank" rel="noreferrer">GITHUB SOURCE ↗</a></p><p className="bento-desc"><a href={item.other} target="_blank" rel="noreferrer">{item.otherLabel} ↗</a></p></div></div></section>
      <section className="section-pad inverted-section"><div className="container"><div className="section-meta"><span className="section-marker"><span className="zero-dot"/> [03 // SCOPE]</span><span>INFRA LABS // FORMA</span></div><h2 className="display-title">A REVIEW AID.<br/>A HUMAN DECIDES.</h2><p className="bento-desc" style={{maxWidth:"65ch",marginTop:24}}>The FORMA visual model generates preliminary audit findings from screenshots and optional browser context. Automated tools and model outputs can be incomplete or wrong. Review findings and use appropriate accessibility and usability checks.</p></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-minimal-bar"><a href={item.repo} target="_blank" rel="noreferrer" className="mono-label">{item.name} // GITHUB ↗</a><div style={{display:"flex",gap:20,fontFamily:"var(--font-mono)",fontSize:".74rem"}}><a href={item.npm} target="_blank" rel="noreferrer">NPM ↗</a><a href={item.other} target="_blank" rel="noreferrer">{item.otherLabel} ↗</a></div></div><div className="footer-wordmark" aria-label="FORMA"><span>F</span><span>O</span><span>R</span><span>M</span><span>A</span></div><div className="footer-bottom"><span>INFRA LABS // FORMA</span><span>© 2026</span></div></div></footer>
  </>;
}
