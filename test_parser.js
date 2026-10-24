const fs = require('fs');
const html = fs.readFileSync('C:/Users/tanis/.gemini/antigravity/scratch/edxso-claude-automation/interactive_app.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/);
const js = scriptMatch[1];

// Mock basic DOM functions
global.window = {};
global.document = {
  getElementById: (id) => ({
    value: '',
    innerText: '',
    textContent: '',
    innerHTML: '',
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {}
  }),
  createElement: () => ({
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {},
    innerHTML: '',
    className: ''
  })
};

eval(js);

const customNotes = `FOUNDERS SYNC - Mon 15 Dec 2026
Present: Founder 1, Ops Intern

* DPS RK Puram pilot: Principal Sharma wants trial for Class 9 Physics before 20 Jan.
* Hardware vendor Alpha Tech invoice Rs 95,000 due 5 Jan. No payment approver set.
* Check teacher training feedback from Gurugram branch. No date set.`;

const parsed = parseNotesText(customNotes, '2026-12-15');
console.log('Successfully parsed items count:', parsed.length);
console.log('Sample parsed item 1:', JSON.stringify(parsed[0], null, 2));
console.log('Sample parsed item 2:', JSON.stringify(parsed[1], null, 2));
