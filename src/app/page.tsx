'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, CircleDot, Code2, FileCheck2, FileText, GitBranch, Menu, Radar, ShieldCheck, ShieldAlert, Terminal, X, Zap, Sun, Moon } from 'lucide-react';

const repo = 'https://github.com/devloperdevesh/Faultline';
const lifecycle = [
  { n: '01', title: 'Discover', desc: 'Collect security findings from connected scanners.', icon: Radar },
  { n: '02', title: 'Prioritize', desc: 'Give reviewers a clearer view of severity and urgency.', icon: ShieldAlert },
  { n: '03', title: 'Remediate', desc: 'Prepare changes that developers can inspect and review.', icon: Code2 },
  { n: '04', title: 'Verify', desc: 'Check proposed changes against the original finding.', icon: ShieldCheck },
  { n: '05', title: 'Preserve evidence', desc: 'Keep outcomes and supporting reports traceable.', icon: FileCheck2 },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [labStep, setLabStep] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const steps = [
    { title: 'Finding received', text: 'A security finding enters the workflow.', state: 'SIGNAL CAPTURED' },
    { title: 'Review the context', text: 'A developer reviews severity, location, and impact.', state: 'REVIEW REQUIRED' },
    { title: 'Proposed fix', text: 'A candidate change is presented for inspection.', state: 'PROPOSAL ONLY' },
    { title: 'Verify the result', text: 'Tests and evidence would be checked before closure.', state: 'VERIFICATION PENDING' },
  ];
  return <main className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
    <div className="frame">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Faultline home"><Image src="/logo.png" alt="Faultline logo" width={44} height={44} priority /><span>FAULTLINE</span></a>
        <nav className={menuOpen ? 'navlinks open' : 'navlinks'}>
          <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a><a href="#workflow" onClick={() => setMenuOpen(false)}>How it works</a><a href="#architecture" onClick={() => setMenuOpen(false)}>Architecture</a><a href="#developers" onClick={() => setMenuOpen(false)}>Docs</a>
        </nav>
        <div className="nav-actions"><button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>{theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}<span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button><a className="nav-cta" href={repo} target="_blank" rel="noreferrer">Explore the project <ArrowRight size={16}/></a></div>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="beam"/>
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> OPEN-SOURCE SECURITY REMEDIATION</div>
          <h1>FROM FINDINGS<br/>TO VERIFIED<br/><span>FIXES.</span></h1>
          <p className="hero-lede">Turn vulnerability findings into reviewable remediation, verification, and auditable evidence.</p>
          <div className="hero-actions"><a className="button primary" href="#platform">Explore Faultline <ArrowRight size={18}/></a><a className="button secondary" href={repo} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={17}/></a></div>
          <div className="micro-flow"><span>DISCOVER</span><i/> <span>PRIORITIZE</span><i/> <span>REMEDIATE</span><i/> <span>VERIFY</span></div>
        </div>
        <div className="dashboard-wrap" aria-label="Conceptual Faultline remediation workflow dashboard">
          <div className="dashboard">
            <div className="dash-head"><div className="dash-brand"><Image src="/logo.png" alt="" width={28} height={28}/><span>REMEDIATION CONTROL LOOP</span></div><span className="status"><i/> DESIGN IN PROGRESS</span></div>
            <div className="pipeline">{[{label:'FINDING',icon:Radar},{label:'REVIEW',icon:FileText},{label:'FIX',icon:Code2},{label:'VERIFY',icon:Check},{label:'EVIDENCE',icon:ShieldCheck}].map((item,i)=>{const Icon=item.icon;return <div className="pipe-item" key={item.label}><div className="pipe-icon"><Icon size={22}/></div><b>{item.label}</b>{i<4&&<span className="pipe-arrow">âŸ¶</span>}</div>})}</div>
            <div className="dash-panels">
              <div className="dash-panel finding-panel"><div className="panel-title"><i/> FINDING DETAILS</div><div className="detail-row"><span>ID</span><b>CVE-XXXX-XXXXX</b></div><div className="detail-row"><span>SEVERITY</span><b className="severity">REVIEW</b></div><div className="detail-row"><span>PACKAGE</span><b>dependency</b></div><div className="detail-row"><span>STATUS</span><b>Unverified</b></div></div>
              <div className="dash-panel diff-panel"><div className="panel-title"><i className="red-dot"/> REVIEW &amp; FIX</div><div className="diff-tabs"><span>Diff preview</span><span>Context</span></div><div className="code-lines"><div><em>âˆ’</em><span className="code-red"/></div><div><em>âˆ’</em><span className="code-red short"/></div><div><em>+</em><span className="code-green"/></div><div><em>+</em><span className="code-green short"/></div></div><div className="file-name"><FileText size={12}/> proposed-change.diff</div></div>
              <div className="dash-panel verify-panel"><div className="panel-title"><i/> VERIFICATION</div><div className="pending"><ShieldCheck size={17}/><span>Not yet verified</span></div><ul><li><CircleDot size={12}/> Review proposed fix</li><li><CircleDot size={12}/> Run security tests</li><li><CircleDot size={12}/> Preserve evidence</li></ul><div className="progress-label"><span>IMPLEMENTATION</span><span>IN PROGRESS</span></div><div className="progress"><span/></div></div>
            </div>
            <div className="dash-foot"><span><CircleDot size={11}/> CONCEPTUAL PRODUCT VISUALIZATION</span><span>NO LIVE SCANNER CONNECTED</span></div>
          </div>
          <div className="glow-point"/>
        </div>
        <div className="hero-footer"><span>OPEN SOURCE <b>/</b> PYTHON <b>/</b> SECURITY WORKFLOWS</span><span className="footer-mark">FL<span>_</span></span></div>
      </section>
    </div>

    <section className="trust-strip"><span>BUILT FOR SECURITY WORKFLOWS</span><div><b>OPEN SOURCE</b><i/> <b>REVIEWABLE CHANGES</b><i/> <b>VERIFIABLE OUTCOMES</b><i/> <b>AUDITABLE EVIDENCE</b></div></section>

    <section className="section problem-section" id="platform"><div className="section-kicker">THE PROBLEM <span>01 / 05</span></div><div className="problem-grid"><h2>Finding a vulnerability<br/><span>is only the beginning.</span></h2><div className="section-intro"><p>Security findings are only the starting point. The harder challenge is turning them into reviewable changes with verifiable outcomes and traceable evidence.</p><p className="muted">Faultline is being built to connect the security remediation lifecycle in one clear workflow.</p></div></div><div className="problem-cards"><article><span className="card-number">01</span><ShieldAlert/><h3>Scattered findings</h3><p>Security issues can arrive from different tools and in inconsistent formats.</p></article><article><span className="card-number">02</span><GitBranch/><h3>Unreviewed changes</h3><p>Suggested remediation must remain understandable and reviewable by developers.</p></article><article><span className="card-number">03</span><FileCheck2/><h3>Missing evidence</h3><p>A proposed fix is not proof. Verification results need to be recorded and traceable.</p></article></div></section>

    <section className="section workflow-section" id="workflow"><div className="section-kicker">THE REMEDIATION LIFECYCLE <span>02 / 05</span></div><div className="section-heading"><h2>From signal to<br/><span>proof of outcome.</span></h2><p>A deliberate workflow designed to keep developers in controlâ€”from the first finding to verification evidence.</p></div><div className="lifecycle">{lifecycle.map((item)=>{const Icon=item.icon;return <article key={item.n} className="life-card"><div className="life-top"><span>{item.n}</span><Icon size={22}/></div><h3>{item.title}</h3><p>{item.desc}</p><div className="life-line"/></article>})}</div><p className="note"><Zap size={15}/> Intended product workflow. Integrations and capabilities are being implemented and validated incrementally.</p></section>

    <section className="architecture-section" id="architecture"><div className="section section-architecture"><div className="section-kicker">SYSTEM DESIGN <span>03 / 05</span></div><div className="architecture-grid"><div><h2>Make remediation<br/><span>observable by design.</span></h2><p>Faultline aims to connect vulnerability context, reviewable code changes, verification checks, and evidence in a workflow that developers can inspect.</p><a className="text-link" href={`${repo}/blob/main/ARCHITECTURE.md`} target="_blank" rel="noreferrer">Read the architecture <ArrowUpRight size={16}/></a></div><div className="architecture-visual"><div className="arch-top"><span>FAULTLINE / WORKFLOW MAP</span><span className="live-label"><i/> DESIGN VIEW</span></div><div className="arch-node source"><Radar/><span>FINDING SOURCE</span><small>Scanner output</small></div><div className="arch-connector">â†“</div><div className="arch-node main-node"><Image src="/logo.png" alt="" width={36} height={36}/><div><b>FAULTLINE</b><small>Remediation workflow</small></div><span className="node-tag">CORE</span></div><div className="arch-branches"><div><Code2/><b>REVIEW</b><small>Proposed change</small></div><div><ShieldCheck/><b>VERIFY</b><small>Test results</small></div><div><FileCheck2/><b>EVIDENCE</b><small>Traceable report</small></div></div><div className="arch-bottom"><span>IMPLEMENTATION STATUS</span><span>ACTIVE DEVELOPMENT</span></div></div></div></div></section>

    <section className="section lab-section" id="demo"><div className="section-kicker">INTERACTIVE WALKTHROUGH <span>04 / 05</span></div><div className="lab-grid"><div><div className="lab-badge"><span/> FAILURE-TO-FIX FLOW</div><h2>See the workflow.<br/><span>Step by step.</span></h2><p>This small interactive walkthrough demonstrates the intended product journey. It is a local concept demoâ€”not a live scanner, automated fix, or verification service.</p><div className="lab-controls"><button className="button secondary" onClick={()=>setLabStep((labStep+steps.length-1)%steps.length)}>Previous</button><button className="button primary" onClick={()=>setLabStep((labStep+1)%steps.length)}>Next step <ArrowRight size={16}/></button></div></div><div className="lab-console"><div className="console-head"><div><span className="console-dot red"/><span className="console-dot yellow"/><span className="console-dot green"/></div><span>FAULTLINE / WALKTHROUGH</span><Terminal size={15}/></div><div className="console-body"><div className="console-progress">{steps.map((s,i)=><button key={s.title} className={i===labStep?'active':i<labStep?'complete':''} onClick={()=>setLabStep(i)} aria-label={`Go to step ${i+1}`}><span>{i<labStep?<Check size={13}/>:`0${i+1}`}</span></button>)}</div><div className="console-step">STEP 0{labStep+1} <span> / CONCEPTUAL</span></div><h3>{steps[labStep].title}</h3><p>{steps[labStep].text}</p><div className="console-status"><span><CircleDot size={14}/>{steps[labStep].state}</span><span>DEMO ONLY</span></div><div className="console-code"><span>workflow.stage</span><b> = </b><em>&quot;{['finding','review','proposed_fix','verification'][labStep]}&quot;</em><br/><span>workflow.production</span><b> = </b><strong>false</strong></div></div></div></div></section>

    <section className="evidence-section"><div className="section evidence-inner"><div><div className="section-kicker">ENGINEERING TRANSPARENCY <span>05 / 05</span></div><h2>Measure what matters.<br/><span>Publish what is proven.</span></h2><p>We will publish performance and verification claims only when reproducible measurements are available. No invented detection rates, savings, or production guarantees.</p></div><div className="evidence-list"><div><span>01</span><b>Test coverage &amp; reproducibility</b><em>Publish when validated</em></div><div><span>02</span><b>Verification success rate</b><em>Benchmark pending</em></div><div><span>03</span><b>Remediation workflow latency</b><em>Benchmark pending</em></div><div><span>04</span><b>Evidence traceability</b><em>Implementation in progress</em></div></div></div></section>

    <section className="section developer-section" id="developers"><div className="section-kicker">FOR DEVELOPERS <span>GET STARTED</span></div><div className="developer-card"><div><div className="developer-icon"><Terminal/></div><h2>Inspect the code.<br/><span>Help shape the workflow.</span></h2><p>Faultline is open source and under active development. Explore the repository, inspect the current implementation, and follow progress as capabilities are validated.</p><div className="hero-actions"><a className="button primary" href={repo} target="_blank" rel="noreferrer">Explore repository <ArrowRight size={17}/></a><a className="button secondary" href={`${repo}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noreferrer">Contributing guide <ArrowUpRight size={16}/></a></div></div><div className="terminal-card"><div className="terminal-title"><span><i/> TERMINAL</span><span>LOCAL SETUP</span></div><pre><code><span className="term-comment"># Clone the repository</span>{'\n'}git clone https://github.com/devloperdevesh/Faultline.git{'\n'}cd Faultline{'\n\n'}<span className="term-comment"># Create a virtual environment</span>{'\n'}python -m venv .venv{'\n'}<span className="term-comment"># Install backend dependencies</span>{'\n'}python -m pip install -r backend/requirements.txt</code></pre><div className="terminal-foot"><span><CircleDot size={12}/> SETUP MAY EVOLVE</span><a href={repo} target="_blank" rel="noreferrer">View current instructions <ArrowUpRight size={13}/></a></div></div></div></section>

    <section className="final-cta"><div className="cta-orbit"/><div className="section-kicker">OPEN SOURCE / ACTIVE DEVELOPMENT</div><h2>Make remediation<br/><span>reviewable. Verifiable.</span></h2><p>Explore the project and help build a clearer path from security findings to verified fixes.</p><div className="hero-actions centered"><a className="button primary" href={repo} target="_blank" rel="noreferrer">Explore Faultline <ArrowRight size={17}/></a><a className="button secondary" href={`${repo}/issues`} target="_blank" rel="noreferrer">View open issues <ArrowUpRight size={16}/></a></div></section>

    <footer className="footer"><a className="brand" href="#top"><Image src="/logo.png" alt="Faultline logo" width={34} height={34}/><span>FAULTLINE</span></a><p>From findings to verified fixes.</p><div className="footer-links"><a href="#platform">Platform</a><a href="#workflow">Workflow</a><a href="#architecture">Architecture</a><a href={repo} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></div><span className="copyright">Â© 2026 Faultline Â· Open-source security remediation</span></footer>
    <div className="disclaimer">Product workflow and dashboard illustrations are conceptual. Features are available only when implemented and validated in the public repository.</div>
  </main>;
}

