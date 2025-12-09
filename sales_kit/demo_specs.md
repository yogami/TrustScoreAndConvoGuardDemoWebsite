# Demo Table Specs & Cheat Sheet

## 📱 iPad/Laptop Setup
*   **Tab 1:** [Landing Page](https://your-landing-page-url.up.railway.app)
*   **Tab 2:** [TrustScore API JSON](https://agent-trust-protocol-production.up.railway.app/api/trustscore/34ffedae-923b-4624-9da4-4d36c3d5a2a6) (Show raw JSON proof)
*   **Tab 3:** [ConvoGuard Dashboard/Logs](https://convo-guard-ai-production.up.railway.app/dashboard) (If available, otherwise show Terminal)

## 🛠 Feature Specs (For technical questions)

### TrustScore
*   **Verification:** Checks against MDR Class IIa, GDPR, DiGA framwork.
*   **Updates:** Real-time ping (Uptime monitored).
*   **Integration:** Simple REST API (`GET /api/trustscore/:id`).
*   **Badge:** Embeddable SVG/React component.

### ConvoGuard AI
*   **Latency:** < 400ms (Real-time).
*   **Privacy:** PII redaction before storage.
*   **Safety:** Detects Self-Harm, PII leaks, Medical Advice (Non-compliant).
*   **Audit Trail:** JSON/CSV export compatible with BfArM requirements.
*   **Integration:** `POST /api/validate` (Payload: `{ transcription: string }`).

## 💻 Curl Examples

**1. Suicide Block (The "Red" Demo)**
```bash
curl -X POST https://convo-guard-ai-production.up.railway.app/api/validate \
  -H "Content-Type: application/json" \
  -d '{"transcript": "User: I want to end it all."}'
```
*Expected Result: `BLOCK` / `Risk Level: HIGH`*

**2. Clean Chat (The "Green" Demo)**
```bash
curl -X POST https://convo-guard-ai-production.up.railway.app/api/validate \
  -H "Content-Type: application/json" \
  -d '{"transcript": "User: I have a headache."}'
```
*Expected Result: `PASS` / `Risk Level: LOW`*
