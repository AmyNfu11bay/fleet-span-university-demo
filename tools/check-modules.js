// Checks every module in modules/*.js before it is pushed.
// Run from the repository root:  node tools/check-modules.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = path.join(__dirname, '..', 'modules');
const ctx = { FSU_MODULES: [] };
vm.createContext(ctx);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
for (const f of files) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const errors = [];
const ids = new Set();
for (const f of files) if (!html.includes(`src="modules/${f}"`)) errors.push(`index.html does not load modules/${f}`);

for (const m of ctx.FSU_MODULES) {
  const where = `${m.id || '(no id)'} "${m.title || ''}"`;
  const err = msg => errors.push(`${where}: ${msg}`);
  if (!m.id || !/^[a-z0-9-]+$/.test(m.id)) err('id must be lowercase letters, numbers and dashes');
  if (ids.has(m.id)) err('duplicate id');
  ids.add(m.id);
  for (const k of ['title', 'tier', 'status']) if (!m[k]) err(`missing ${k}`);
  if (!Array.isArray(m.roles) || !m.roles.length) err('roles must list at least one job role');
  if (!['Published', 'Draft'].includes(m.status)) err('status must be Published or Draft');
  if (!Number.isInteger(m.days) || m.days < 1) err('days must be a whole number of days to complete');
  if (!Number.isInteger(m.version) || m.version < 1) err('version must be a whole number');
  const items = m.items || [];
  const steps = items.filter(i => i.type === 'step');
  const quiz = items.filter(i => i.type === 'quiz');
  const signoff = items.filter(i => i.type === 'signoff');
  if (!steps.length) err('needs at least one step');
  if (m.status === 'Published' && !m.sample) {
    if (quiz.length !== 5) err(`published modules need exactly 5 quiz questions (has ${quiz.length})`);
    if (signoff.length !== 1) err(`published modules need exactly 1 sign-off check (has ${signoff.length})`);
  }
  items.forEach((it, n) => {
    if (!['step', 'quiz', 'signoff'].includes(it.type)) err(`item ${n + 1} has unknown type "${it.type}"`);
    if (it.type !== 'quiz' && !it.text) err(`item ${n + 1} has no text`);
    if (it.type === 'quiz') {
      if (!it.q) err(`quiz item ${n + 1} has no question`);
      if (!Array.isArray(it.options) || it.options.length < 3 || it.options.length > 4) err(`quiz item ${n + 1} needs 3 or 4 options`);
      else if (!(Number.isInteger(it.answer) && it.answer >= 0 && it.answer < it.options.length)) err(`quiz item ${n + 1} answer index is out of range`);
      else if (new Set(it.options).size !== it.options.length) err(`quiz item ${n + 1} repeats an option`);
    }
    if (/\bverify\b/i.test(JSON.stringify(it)) || it.verify) err(`item ${n + 1} contains a "verify" flag or wording; use the guide's wording only`);
  });
  if (m.status === 'Published' && quiz.length === 5) {
    const counts = [0, 0, 0, 0];
    quiz.forEach(q => counts[q.answer]++);
    if (Math.max(...counts) === 5) err('every quiz answer is in the same position; vary where the right answer sits');
  }
}

if (errors.length) {
  console.error(`${errors.length} problem(s) found:\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`OK: ${ctx.FSU_MODULES.length} modules in ${files.length} track files.`);
