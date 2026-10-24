# EDXSO Assignment 2: Build a Claude Automation
## Founder’s Office Intern Submission Package
**Candidate:** Abhi Pandey  
**Role:** Founder’s Office Intern  
**Submission Target:** [hr@edxso.com](mailto:hr@edxso.com)  
**Subject Line:** `Assignment 2 – Abhi Pandey`  
**Execution Context Date:** Friday, 23 October 2026 (Meeting: Thursday, 22 October 2026)  
**Public Repository:** [https://github.com/abhipandey/EDXSo](https://github.com/abhipandey/EDXSo)  

---

### Executive Summary

This repository contains the complete, production-grade automation workflow designed to transform messy, unstructured notes from EDXSO founder syncs into rigorous, actionable operational outputs:
1. **Action Tracker** (9 items with strict `Unassigned` and `TBD` zero-guess guardrails for missing owners, dates, or amounts)
2. **Follow-up Drafts** (ready-to-send messages for Maple Heights School, PrintWorks vendor, and an internal founder decision memo with explicit contact placeholders)
3. **Founder Brief** (a high-density 1-page executive summary readable in ~2 minutes covering Red Flag blockers, Yellow Flag decisions, and Green Ops plan)
4. **Process Gaps & Practical Fixes** (diagnosing 7 operational failures with zero-cost, lightweight startup solutions)
5. **One-Page Weekly Operations Note** (SOP, failure modes, what must never be left to AI, and transparent manual check disclosure)

Additionally, this package includes **all extra credit deliverables**:
* **Extra Credit 1:** A full second run on a realistic post-Diwali meeting notes set (`EXTRA_CREDIT_SECOND_RUN.md`) demonstrating true repeatability and flagging unconfirmed proposals.
* **Extra Credit 2:** A 3-tab Excel workbook (`EDXSO_Operations_Tracker.xlsx`) and machine-readable CSV (`tracker_export.csv`).
* **Extra Credit 3:** A responsive, standalone interactive web application (`index.html` / `interactive_app.html`) with the official EDXSO logo, live client-side parser, and Vercel readiness.

---

### Repository File Map

| File | Purpose / Contents |
|---|---|
| [`index.html`](./index.html) | **Vercel Static Entry & Live Web Tool:** Standalone web app with client-side NLP parser, official EDXSO logo, inline editing, and CSV export. |
| [`EDXSO_Operations_Tracker.xlsx`](./EDXSO_Operations_Tracker.xlsx) | **Excel Workbook:** 3 tabs (Action Tracker, Decisions Log, Follow-ups) with clean styling and verified formulas. |
| [`EDXSO_Operations_Weekly_Note.docx`](./EDXSO_Operations_Weekly_Note.docx) | **Executive Word Document:** 1-page operating note with official EDXSO logo, SOP, failure modes, and human guardrails. |
| [`PROMPT_SYSTEM_INSTRUCTIONS.md`](./PROMPT_SYSTEM_INSTRUCTIONS.md) | Reusable master system prompt and instructions for Claude Projects or Claude Chat with XML tags and zero-guess guardrails. |
| [`SCENARIO_OUTPUTS.md`](./SCENARIO_OUTPUTS.md) | Complete outputs for the assigned 22 Oct 2026 Founders Sync across all required sections. |
| [`ONE_PAGE_STRATEGY_NOTE.md`](./ONE_PAGE_STRATEGY_NOTE.md) | The 1-page executive note covering EDXSO's weekly operating cadence, AI failure modes, human-only boundaries, and manual verification disclosure. |
| [`EXTRA_CREDIT_SECOND_RUN.md`](./EXTRA_CREDIT_SECOND_RUN.md) | Validation of prompt repeatability using a second realistic post-Diwali founders sync (12 Nov 2026), flagging unconfirmed proposals. |
| [`tracker_export.csv`](./tracker_export.csv) | Machine-readable, clean CSV export of the Action Tracker formatted for instant Google Sheets / Microsoft Excel ingestion. |
| [`edxso_engine.py`](./edxso_engine.py) | **Python CLI Engine:** Parses unstructured meeting notes, extracts entities/dates, flags missing owners, and exports CSV + Markdown + Founder Brief. |
| [`SUBMISSION_EMAIL_DRAFT.md`](./SUBMISSION_EMAIL_DRAFT.md) | Ready-to-send submission email addressed to `hr@edxso.com` adhering to the brief's guidelines. |
| [`Assignment_2_Abhi_Pandey_EDXSO.zip`](./Assignment_2_Abhi_Pandey_EDXSO.zip) | Complete submission ZIP archive ready to attach. |

---

### Tools Used & Manual Verification Disclosure

* **Tools Actually Used:**
  * **Claude:** Used for unstructured text extraction and initial drafting of communication drafts.
  * **Python 3.14:** Used for local script execution (`edxso_engine.py`), programmatic generation of the Excel tracker (`openpyxl`), Word document formatting (`docx`), and ZIP packaging (`zipfile`).
  * **Git & GitHub:** Used for publishing the public repository to [`https://github.com/abhipandey/EDXSo`](https://github.com/abhipandey/EDXSo).
  * **Standard Browser:** Used for running and verifying the local interactive dashboard at `http://localhost:8000/interactive_app.html`.

* **Manual Checks Actually Performed:**
  1. *Line-by-Line Fact Audit:* Cross-checked every task in the Action Tracker against the raw notes. Removed any invented contact emails, page counts, or payment terms.
  2. *Date Arithmetic Verification:* Manually verified calendar math: Thursday 22 Oct (meeting) $\rightarrow$ Friday 23 Oct (today) $\rightarrow$ Friday 30 Oct ("next Friday" for Founder 1 scan & Content invoice) $\rightarrow$ ~8 Nov (Diwali break begin).
  3. *Unassigned Owner Audit:* Confirmed that 7 of the 9 tasks had no explicit owner named in the meeting notes and ensured each was labeled `Unassigned` with suggestions clearly marked in parentheses.
  4. *Spreadsheet & Document Validation:* Opened and inspected `EDXSO_Operations_Tracker.xlsx` across all 3 tabs to verify formatting and data integrity.
