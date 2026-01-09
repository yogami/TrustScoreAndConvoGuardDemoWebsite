## 🛑 ARCHITECTURAL ANCHOR
This project is part of the **Berlin AI Automation Studio**. 
It is governed by the global rules in **[berlin-ai-infra](https://github.com/yogami/berlin-ai-infra)**.

**Setup for new laptops:**
1. Clone this repo.
2. Run `./bootstrap-infra.sh` to link to the global Master Brain.

---

# Trust Score & ConvoGuard Demo Website

> Interactive demo website showcasing the AgentOps Trust Scorecard and ConvoGuard compliance features.

## 🎯 What This Does

This is a demonstration frontend for two core Berlin AI products:
- **Trust Scorecard**: Visual dashboard showing AI agent reputation, compliance badges, and trust metrics
- **ConvoGuard Demo**: Interactive API test console for the compliance guardrails service

## 📡 Pages

| Route | Description |
| :--- | :--- |
| `/` | Landing page with product overview |
| `/trustscore` | Interactive Trust Score dashboard |
| `/convoguard` | ConvoGuard API demo console |
| `/combined` | Side-by-side comparison view |

## 🏗️ Architecture

```
src/
├── app/
│   ├── page.tsx           # Landing page
│   ├── trustscore/        # Trust Score demo
│   ├── convoguard/        # ConvoGuard demo
│   └── combined/          # Combined view
├── components/
│   ├── TrustScoreCard.tsx
│   ├── ComplianceBadge.tsx
│   └── ApiTestConsole.tsx
└── lib/
    └── api-client.ts      # Backend integration
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

## 🔗 Dependencies

| Service | Purpose | Production URL |
| :--- | :--- | :--- |
| ConvoGuard AI | Compliance validation API | `https://convo-guard-ai-production.up.railway.app` |
| Agent Trust Protocol | Trust score data | `https://agent-trust-protocol-production.up.railway.app` |

## 📊 Status

- **Deployment**: Railway
- **Production URL**: `https://trust-score-demo-production.up.railway.app`
- **Purpose**: Demo/Marketing (not a production service)

## 🎨 Design

The demo uses the Berlin AI brand colors and follows the enterprise aesthetic established in the main product suite.

## 📜 License

MIT
