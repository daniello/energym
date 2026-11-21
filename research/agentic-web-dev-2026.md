# Agentic web development setup — state of the art (Nov 2026)

Research note. Sources checked 21 Nov 2026. Primary sources are linked at the
bottom; version numbers and benchmark figures are date-stamped because this
space moves weekly.

## Short answer

For a coding agent doing web development:

1. **Primary: Playwright CLI + skills**, not Playwright MCP. Microsoft's own
   docs now say coding agents should prefer the CLI because it is more
   token-efficient than loading MCP tool schemas and accessibility trees on
   every turn.
2. **Secondary: Chrome DevTools MCP (or its CLI)** for the things Playwright is
   weak at — console errors, network waterfalls, performance traces, Lighthouse
   and Lighthouse-style audits, memory leaks.
3. **Do not start with Puppeteer MCP.** The reference
   `@modelcontextprotocol/server-puppeteer` is archived. Puppeteer now lives
   underneath `chrome-devtools-mcp`.
4. **For production browser agents at scale** (not day-to-day coding):
   Stagehand v4 / Browserbase, browser-use 1.0, or agent-browser. These are
   agent frameworks/SDKs, not dev-loop tools.

The direction of travel is away from "one MCP tool per click" and towards
**CLI + skills** or **code mode**: the agent writes one script that performs a
whole flow instead of making 20 sequential tool calls.

## Landscape

| Tool | Layer | Best at | Main limit |
| --- | --- | --- | --- |
| **Playwright CLI** (`@playwright/cli`) + skills | Dev-loop CLI | Token-efficient driving, snapshots, screenshots, network, storage, tracing, multi-browser | Shell-shaped; not a persistent MCP server |
| **Playwright MCP** (`@playwright/mcp`) | MCP server | Persistent exploratory loops, self-healing tests, long autonomous runs | Tool-schema and a11y-tree token cost; 20+ tools in context |
| **Chrome DevTools MCP** (`chrome-devtools-mcp`) | MCP server + CLI | Console, network, performance traces, insights, Lighthouse, heap snapshots | Chrome/Chrome-for-Testing only; debugging-first, not cross-browser testing |
| **Puppeteer MCP** | Archived MCP server | Nothing current | Archived; replaced by Chrome DevTools MCP |
| **Stagehand v4** (`@browserbasehq/stagehand`) | Agent SDK (TS/Python/Go) | Code-mode `run`, `act`/`observe`/`extract`, self-healing, cheap snapshots | You own the agent loop; Browserbase for cloud scale |
| **Browserbase MCP / `browse` CLI** | Hosted MCP / CLI | Agents without local browser install; contexts, proxies, recordings | Commercial; cloud session data |
| **browser-use 1.0** | Python agent library + CLI | Open-ended "do this task" automation, persistent REPL over CDP | Owns the loop; re-plans every run; Python-centric |
| **agent-browser** (Vercel Labs) | Native Rust CLI + skills | Very small token footprint, one command per step, refs, diffing, React/perf inspection | CLI-first; younger project |

## What changed (why "MCP vs MCP" is the wrong framing)

- Microsoft's Playwright MCP README explicitly recommends **CLI + skills for
  coding agents**, and keeps MCP for "specialized agentic loops that benefit
  from persistent state, rich introspection, and iterative reasoning over page
  structure" (exploratory automation, self-healing tests, long autonomous
  workflows).
- Playwright now ships `playwright-cli`, a dedicated coding-agent interface
  with installable skills (`playwright-cli install --skills`), named sessions,
  `snapshot`, `screenshot`, `requests`, `route`, `state-save/load`, `console`,
  `eval`, tracing and video.
- Chrome DevTools MCP now also ships a CLI (`chrome-devtools`) and its own
  skills, and a `--slim` mode that exposes fewer tools. It is built on
  Puppeteer and is the maintained replacement for Puppeteer MCP.
- The MCP steering group's `servers` repo lists Puppeteer under **Archived**
  (moved to `servers-archived`). Treat any tutorial that starts with
  `@modelcontextprotocol/server-puppeteer` as outdated.
- Stagehand v4 moved its runtime into a browser extension, added
  `browser.disconnect()` / reattach and code-mode `run`, and reports large
  token and latency improvements over Playwright-style per-action calls.
- LangChain's Deep Agents team benchmarked seven browser toolsets and picked
  Stagehand-based tools for their managed agents; their write-up is the clearest
  public statement of the "code mode beats native tool calls" pattern.

## Recommended setup for this repo

Tier 1 — always available:

- `npm i -g @playwright/cli@latest`
- `playwright-cli install --skills -g` (or `--skills=agents` for
  `~/.agents/skills`, which is where this OpenCode setup already looks)
- Use it for: opening the local dev server, taking snapshots/screenshots,
  filling forms, checking responsive breakpoints, asserting flows, recording
  traces.

Tier 2 — only when debugging rendering, performance or network:

- `npx chrome-devtools-mcp@latest` as an MCP server, or
  `npm i -g chrome-devtools-mcp@latest` and use the `chrome-devtools` CLI.
- Enable `--slim` if it is left on all the time.
- Use it for: console errors, failed requests, LCP/INP/CLS traces, Lighthouse,
  memory leaks, "why is this page slow".

Tier 3 — only for persistent autonomous browser work:

- Playwright MCP (`npx @playwright/mcp@latest`) if we need a long-lived,
  stateful exploratory loop that reasons over page structure turn by turn.
- Do not run Playwright MCP and Chrome DevTools MCP in the same workspace. Two
  browser servers means 40–50 tool descriptions competing for attention and
  context.

Tier 4 — product/production automation, not the dev loop:

- Stagehand v4 + Browserbase for repeatable business workflows at scale.
- browser-use 1.0 for open-ended Python task automation.
- agent-browser when the cheapest possible token footprint matters.

## Practical rules

- Prefer one script over many tool calls. A Playwright script that navigates,
  fills, clicks and asserts in one run is cheaper and more reliable than 15
  MCP calls.
- Take an accessibility snapshot, not a screenshot, when the job is "find and
  click". Use screenshots for visual/layout verification.
- Keep browser profiles separate from personal Chrome profiles. A persistent
  profile is credential-bearing data.
- Treat all browser MCP servers as **not** a security boundary. Use isolated
  profiles, allowlists, and human approval for destructive/financial actions.
- Cap snapshot output. Whole-page a11y snapshots can exceed 200k tokens on
  large pages.

## Sources

Primary:

- Playwright MCP README (MCP vs CLI, features, config):
  <https://github.com/microsoft/playwright-mcp>
- Playwright CLI for coding agents (install, commands, skills):
  <https://playwright.dev/docs/getting-started-cli>
- Chrome DevTools MCP README (CLI, skills, perf, Puppeteer-based):
  <https://github.com/ChromeDevTools/chrome-devtools-mcp>
- MCP reference servers, Archived section (Puppeteer):
  <https://github.com/modelcontextprotocol/servers>
- Stagehand README (v4 SDK, code mode, MCP):
  <https://github.com/browserbase/stagehand>
- agent-browser README (Rust CLI, skills, per-step commands):
  <https://github.com/vercel-labs/agent-browser>
- browser-use README (1.0, REPL + CDP):
  <https://github.com/browser-use/browser-use>

Secondary / vendor benchmarks (useful but not authoritative):

- LangChain, "How We Optimized Browser Use for Deep Agents" (Nov 2026):
  <https://www.langchain.com/blog/how-we-optimized-browser-use-for-deep-agents>
- Browserbase, "Introducing Stagehand v4" (Aug 2026):
  <https://www.browserbase.com/blog/stagehand-v4>
- Doccraft, Playwright MCP vs Chrome DevTools MCP vs agent-browser token
  comparison (Oct 2026):
  <https://doccraft.dev/blog/playwright-mcp-vs-devtools-mcp-vs-agent-browser>
- MCP.Directory, Chrome DevTools vs Playwright vs Puppeteer MCP (May 2026):
  <https://mcp.directory/blog/chrome-devtools-mcp-vs-playwright-mcp-2026>
