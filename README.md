# EDXSO Assignment 2: Build a Claude Automation
## Founder’s Office Intern Submission Package
**Candidate:** Abhi Pandey  
**Role:** Founder’s Office Intern  
**Submission Target:** [hr@edxso.com](mailto:hr@edxso.com)  
**Subject Line:** `Assignment 2 – Abhi Pandey`  
**Execution Context Date:** Friday, 23 October 2026 (Meeting: Thursday, 22 October 2026)  
**Public Repository:** [https://github.com/Abhi4621/Edxso-Platform](https://github.com/Abhi4621/Edxso-Platform)  
**Live Interactive Dashboard:** [https://edxso-ten.vercel.app/](https://edxso-ten.vercel.app/) (or local: `http://localhost:8000/`)

---

### Executive Summary

This repository contains the complete, production-grade automation workflow designed to transform messy, unstructured notes from EDXSO founder syncs into an interconnected, 4-part operational execution package:
1. **Action Tracker** (Tasks categorized into School, Vendor, Compliance, Investor, Internal with dynamic relative dates, priorities, statuses, and strict zero-guess guardrails for missing owners, dates, or amounts)
2. **Follow-up Drafts** (Ready-to-send messages dynamically synthesized for every external school partner and vendor partner, plus a targeted internal Slack note to founders connecting all open blockers and unassigned DRIs)
3. **Founder Brief** (A high-density 1-page executive summary readable in ~2 minutes covering Current Position, What is at Risk, Decisions Needed, What Ops is Doing This Week, Upcoming Deadlines, and Items Awaiting Clarification)
4. **Process Gaps & Practical Fixes** (Diagnosing operational meeting failures with practical, zero-cost startup solutions and designated owners)

---

### Key Highlights: True Dynamic Operational Pipeline

Unlike static websites or prototypes that only swap pre-baked text, this automation features a **fully dynamic operational engine**:
* **Upload or Paste Any Meeting Notes:** Whether you paste messy notes into the web dashboard or upload a `.txt` / `.md` file, the system dynamically parses the text and **automatically connects and updates all 4 deliverables simultaneously**.
* **Dynamic Follow-up Drafts for Every Stakeholder:**
  - Detects all school partners and drafts tailored emails addressing coordinators/principals regarding demo scheduling, pilot usage reports, and compliance certificates.
  - Detects all vendor partners and drafts tailored communications (e.g. PrintWorks quotation inquiries under strict budget caps, delivery notices for defective binding, content vendor invoice documentation requests).
  - Automatically synthesizes the Internal Slack note to founders listing the exact open bottlenecks and unassigned tasks with task IDs and target dates.
* **Dynamic Founder Executive Brief:** Synthesizes the active tasks into a crisp 1-page briefing note with real-time risk classification, pending founder approvals, operational plan, and chronologically sorted deadlines.
* **Dynamic Process Gap Evaluation:** Evaluates the active notes for operational anti-patterns (unassigned DRIs, vague deadlines, informal invoicing, compliance afterthoughts, paper lead lag) and generates practical fixes with suggested owners.
* **Strict Honesty & Single Intern Suggestion Guardrail:** Missing parameters are explicitly flagged (`Unassigned`, `TBD`, `Amount unstated`) and never invented. Across the tracker, exactly one routine operational chase (`ACT-003`) is suggested for the intern (`Unassigned (Suggested: Founder's Office Intern)`).

---

### Repository File Map

| File | Purpose / Contents |
|---|---|
| [`index.html`](./index.html) | **Live Interactive Web Application:** Standalone web tool with dynamic client-side engine, file upload / drag-and-drop support, scenario switcher, live draft cards, and CSV export. |
| [`interactive_app.html`](./interactive_app.html) | Local mirror of the web application. |
| [`edxso_engine.py`](./edxso_engine.py) | **Python CLI Engine:** Command-line automation that takes any raw notes file and outputs all 4 deliverables (`tracker.csv`, `tracker.md`, `followup_drafts.md`, `founder_brief.md`, `process_gaps.md`). |
| [`edxso_engine.js`](./edxso_engine.js) | **Node.js CLI Engine:** Standalone Node CLI offering the exact same 4-deliverable pipeline. |
| [`EDXSO_Operations_Tracker.xlsx`](./EDXSO_Operations_Tracker.xlsx) | **Excel Workbook:** 3 tabs (Action Tracker, Decisions Log, Follow-ups) with clean styling and verified formulas. |
| [`EDXSO_Operations_Weekly_Note.docx`](./EDXSO_Operations_Weekly_Note.docx) | **Executive Word Document:** 1-page operating note with official EDXSO logo, weekly cadence SOP, failure modes, and human guardrails. |
| [`ONE_PAGE_STRATEGY_NOTE.md`](./ONE_PAGE_STRATEGY_NOTE.md) | The 1-page operating strategy note covering EDXSO's weekly cadence, AI failure modes, human-only boundaries, and manual check disclosure. |
| [`PROMPT_SYSTEM_INSTRUCTIONS.md`](./PROMPT_SYSTEM_INSTRUCTIONS.md) | Reusable master system prompt and instructions for Claude Projects or Claude Chat with zero-guess guardrails. |
| [`SCENARIO_OUTPUTS.md`](./SCENARIO_OUTPUTS.md) | Complete outputs for the assigned 22 Oct 2026 Founders Sync across all required sections. |
| [`EXTRA_CREDIT_SECOND_RUN.md`](./EXTRA_CREDIT_SECOND_RUN.md) | Validation of prompt repeatability using a second realistic post-Diwali founders sync (12 Nov 2026). |
| [`tracker_export.csv`](./tracker_export.csv) | Clean CSV export of the Action Tracker formatted for Google Sheets / Microsoft Excel ingestion. |
| [`SUBMISSION_EMAIL_DRAFT.md`](./SUBMISSION_EMAIL_DRAFT.md) | Ready-to-send submission email addressed to `hr@edxso.com`. |
| [`Assignment_2_Abhi_Pandey_EDXSO.zip`](./Assignment_2_Abhi_Pandey_EDXSO.zip) | Complete submission ZIP archive ready to attach. |

---

### How to Run the Automation

#### 1. Interactive Web Dashboard
* **Online:** Visit [https://edxso-ten.vercel.app/](https://edxso-ten.vercel.app/)
* **Locally:** Run `node server.js` and open `http://localhost:8000/`
* Click **"Upload Notes File"** or paste raw notes into the panel, set the meeting date, and click **"Reprocess All 4 Outputs"**. Watch the Action Tracker, Follow-up Drafts, Founder Brief, and Process Gaps update dynamically in real time!

#### 2. Python CLI Engine
```bash
# Run baseline scenario (22 Oct 2026)
python edxso_engine.py --scenario 1 --out-dir ./output

# Run second scenario (12 Nov 2026)
python edxso_engine.py --scenario 2 --out-dir ./output

# Run on custom meeting notes file
python edxso_engine.py --notes-file custom_notes_test.txt --date 2026-12-16 --out-dir ./custom_output
```

#### 3. Node.js CLI Engine
```bash
# Run baseline scenario
node edxso_engine.js --scenario 1

# Run custom notes
node edxso_engine.js --notes-file custom_notes_test.txt --date 2026-12-16 --out-dir ./custom_output
```

---

### Tools Used & Manual Verification Disclosure

* **Tools Used:**
  * **Claude:** Used for unstructured text extraction and initial drafting.
  * **JavaScript (Node.js) & Python:** Used for building the real-time operational engine, CLI runners, CSV/Excel/Word generation, and local HTTP server.
  * **Git & GitHub:** Used for code version control and publishing to [`https://github.com/Abhi4621/Edxso-Platform`](https://github.com/Abhi4621/Edxso-Platform).

* **Manual Checks Actually Performed:**
  1. *Zero-Guess Audit:* Verified that every missing date is flagged `TBD` and unconfirmed owners are tagged `Unassigned`.
  2. *Single Intern Assignment Rule:* Ensured only the vendor quotation chase (`ACT-003`) suggests the Founder's Office Intern.
  3. *Calendar & Relative Math:* Cross-checked dates against reference execution dates and regional school context (Diwali break).
  4. *Human-in-the-Loop Boundaries:* Verified that payment authorizations, external email dispatches, and DPDP compliance sign-offs require human founder approval.
