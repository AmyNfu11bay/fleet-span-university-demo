# Modules

Each file here is one track: `all-employees.js` (modules every employee takes, listed first) and one file per role (`tech.js`, `service-advisor.js`, `parts.js`, `service-manager.js`). A file adds its modules with `FSU_MODULES.push({...}, {...});`. `index.html` loads every track file with a `<script src="modules/<track>.js">` tag, so a new track file also needs a new tag.

Run `node tools/check-modules.js` from the repository root before every push.

## Module format

```js
{
  "id": "t2",                       // unique, lowercase; Tech uses t1, t2, …
  "title": "Diagnose button on the SO",
  "roles": ["Tech"],                // job roles this module is for
  "allEmployees": true,             // optional: a module every role takes (lives in all-employees.js)
  "tier": "Module 2",               // order within the track
  "status": "Published",            // or "Draft" (drafts can't be assigned)
  "version": 2,                     // bump when the content changes
  "days": 14,                       // default days to complete
  "soCount": 5,                     // SO numbers the employee hand-keys for the trainer: the count in the sign-off check; 0 = no SO box (e.g. before they've worked an SO)
  "level": "Basic",                // Basic, Advanced or Master; finishing every module in a level earns its achievement badge and unlocks the next
  "why": "…",                       // the guide's "Why it matters", word for word
  "before": ["…"],                  // the guide's "Before you start" bullets
  "doneRight": "…",                 // the guide's "Done right looks like"
  "wrong": ["…"],                   // the guide's "If something goes wrong" bullets
  "sources": [{ "title": "…", "url": "https://help.fullbay.com/…" }],  // optional: Help Center articles a module was written from
  "items": [
    { "type": "step", "text": "Click **Diagnosed** on the Action Item. …" },
    { "type": "quiz", "q": "…?", "options": ["…", "…", "…", "…"], "answer": 1 },
    { "type": "signoff", "text": "You complete Diagnose on 5 SOs with no corrections." }
  ]
}
```

- Steps, "why", "before", "done right", "wrong" and the sign-off text are copied **exactly** from the approved step-by-step guide. `**double asterisks**` mark words the guide shows in bold (buttons, tabs, fields).
- A published module has exactly 5 quiz questions (one miss still passes at 80%) and at most 1 sign-off check (only when the guide has one; without it, passing the quiz completes the module). Quiz questions are written only from the guide's own content, and `answer` is the 0-based position of the right option.
- The SO number box, dropdown quiz, attempt limits and in-person training path are built into the app, so modules don't repeat them.
