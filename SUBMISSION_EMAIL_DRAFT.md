# SUBMISSION_EMAIL_DRAFT.md
## Email Submission to EDXSO Hiring Team

**To:** hr@edxso.com  
**Subject:** Assignment 2 – Abhi Pandey  
**Attachments:** `Assignment_2_Abhi_Pandey_EDXSO.zip`  
**Public Repository Link:** https://github.com/Abhi4621/Edxso-Platform  
**Live Interactive Dashboard:** https://edxso-ten.vercel.app/ (or local: `http://localhost:8000/`)  

---

Dear EDXSO Hiring Team & Founders,

Please find attached my submission for **Assignment 2 (Build a Claude Automation)** for the **Founder’s Office Intern** role.

The submission is based on the notes from the Founders Sync of Thursday, 22 October 2026, using Friday, 23 October 2026 as the execution date.

### Summary of Submitted Deliverables:
1. **Action Tracker (`EDXSO_Operations_Tracker.xlsx` & `tracker_export.csv`):** A structured operational tracker across 5 categories (School, Vendor, Compliance, Investor, Internal) with explicit flags for missing details, relative date math, and recommended priorities. Unassigned owners and missing dates are marked strictly as `Unassigned` and `TBD` to ensure zero guessing. Only one routine chase (`ACT-003`) is suggested for the intern (`Unassigned (Suggested: Founder's Office Intern)`).
2. **Dynamic Follow-Up Message Drafts:** Ready-to-review tailored emails for every external party identified in the notes (Ms. Kapoor at Maple Heights School, PrintWorks quotation request under the ₹40,000 budget cap with zero invented specs, and the Content Vendor invoice documentation request), plus an internal Slack note to founders connecting all open blockers, unassigned DRIs, and pending decisions with task IDs and deadlines. Contact details use honest placeholders (`[Verified school contact email]`) to avoid fabricating addresses.
3. **Founder Brief:** A one-page executive summary designed to be read in two minutes, organized into 6 clear sections: Current Position, What is at Risk (Red Flags), Decisions Needed (Yellow Flags), What Ops is Doing This Week (Green Plan), Upcoming Hard Deadlines, and Items Awaiting Clarification.
4. **Process Gaps & Practical Fixes:** A breakdown of operational gaps observed in the meeting notes (unassigned DRIs, vague deadlines, unstated invoice amounts, compliance afterthoughts, and lingering paper leads) along with practical, low-overhead fixes and designated owners for an early-stage startup.
5. **One-Page Weekly Operating Note (`EDXSO_Operations_Weekly_Note.docx` / `ONE_PAGE_STRATEGY_NOTE.md`):** A practical guide explaining how this workflow runs every week at EDXSO, common AI failure modes, manual verification steps, and consequential areas that must remain human-owned (financial disbursements, DPDP legal compliance, student data privacy).
6. **Reusable Master Prompt (`PROMPT_SYSTEM_INSTRUCTIONS.md`):** A copy-ready prompt that any team member can use to process future meeting notes with the same consistency and accuracy guardrails.
7. **Second-Scenario Test (`EXTRA_CREDIT_SECOND_RUN.md`):** A test run on a fictional post-Diwali meeting to demonstrate that the workflow reliably flags missing information, defect batches, and unconfirmed proposals across different weeks.
8. **Live Web App & Open-Source Engine:** 
   - Interactive web application with real-time text parsing, file upload / drag-and-drop, and dynamic multi-draft generation deployed at https://edxso-ten.vercel.app/ and running locally at `http://localhost:8000/`.
   - Dual CLI engines (`edxso_engine.py` and `edxso_engine.js`) that take any meeting notes file and automatically produce all 4 deliverables.
   - Public repository: https://github.com/Abhi4621/Edxso-Platform

### Disclosed Tools & Manual Checks:
* **Tools Used:** Claude for unstructured text extraction and initial drafting; Python 3.14 & Node.js for CLI engines, spreadsheet/document generation, and local HTTP server; Git for version control.
* **Manual Checks Performed:** Verified every task and date line-by-line against the meeting notes; checked relative date math by hand; verified that unassigned owners are strictly flagged without fabrication; confirmed that no contact details or print specs were invented.

### Attached Files in ZIP (`Assignment_2_Abhi_Pandey_EDXSO.zip`):
* `EDXSO_Operations_Tracker.xlsx` — 3-tab workbook (Action Tracker, Decisions Log, Follow-ups).
* `EDXSO_Operations_Weekly_Note.docx` — Formatted one-page operating note with the official EDXSO logo.
* `index.html` & `interactive_app.html` — Interactive web application.
* `edxso_engine.py` & `edxso_engine.js` — Dual CLI engines.
* `README.md` & Markdown documentation files.

I enjoyed working on this assignment and look forward to discussing how I can support operations and execution velocity in the Founder's Office at EDXSO.

Warm regards,  

**Abhi Pandey**  
Applicant — Founder’s Office Intern  
New Delhi, India | abhipandey4631@gmail.com | +91 98XXX XXXXX  
GitHub: [https://github.com/Abhi4621/Edxso-Platform](https://github.com/Abhi4621/Edxso-Platform)
