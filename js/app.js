const KEY = 'poli-maint-log';
const entryDate = document.getElementById('entry-date');
const machineName = document.getElementById('machine-name');
const maintType = document.getElementById('maint-type');
const voltageVal = document.getElementById('voltage-val');
const entryNotes = document.getElementById('entry-notes');
const addBtn = document.getElementById('add-btn');
const exportBtn = document.getElementById('export-btn');
const clearBtn = document.getElementById('clear-btn');
const logBody = document.getElementById('log-body');
const logTable = document.getElementById('log-table');
const emptyState = document.getElementById('empty-state');
const logCount = document.getElementById('log-count');

entryDate.value = new Date().toISOString().slice(0, 10);

function load() { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
function save(e) { localStorage.setItem(KEY, JSON.stringify(e)); }
function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function render() {
  const entries = load();
  logCount.textContent = entries.length ? `${entries.length} entr${entries.length === 1 ? 'y' : 'ies'}` : '';
  if (!entries.length) { emptyState.style.display = ''; logTable.style.display = 'none'; return; }
  emptyState.style.display = 'none';
  logTable.style.display = '';
  logBody.innerHTML = [...entries].reverse().map((e, i) => {
    const idx = entries.length - 1 - i;
    return `<tr>
      <td>${escHtml(e.date)}</td>
      <td>${escHtml(e.machine)}</td>
      <td>${escHtml(e.type)}</td>
      <td>${e.voltage !== '' ? escHtml(e.voltage) + ' V' : '—'}</td>
      <td class="notes-cell">${escHtml(e.notes || '—')}</td>
      <td><button class="del-btn" data-idx="${idx}" title="Delete">×</button></td>
    </tr>`;
  }).join('');
}

addBtn.addEventListener('click', () => {
  const date = entryDate.value.trim();
  const machine = machineName.value.trim();
  const type = maintType.value;
  if (!date || !machine || !type) { alert('Please fill in Date, Machine, and Maintenance Type.'); return; }
  const entries = load();
  entries.push({ date, machine, type, voltage: voltageVal.value.trim(), notes: entryNotes.value.trim() });
  save(entries);
  maintType.value = '';
  voltageVal.value = '';
  entryNotes.value = '';
  render();
});

logBody.addEventListener('click', (e) => {
  const btn = e.target.closest('.del-btn');
  if (!btn) return;
  if (!confirm('Delete this entry?')) return;
  const idx = parseInt(btn.dataset.idx, 10);
  const entries = load();
  entries.splice(idx, 1);
  save(entries);
  render();
});

exportBtn.addEventListener('click', () => {
  const entries = load();
  if (!entries.length) { alert('No entries to export.'); return; }
  const header = 'Date,Machine,Type,Voltage (V),Notes';
  const rows = entries.map(e =>
    [e.date, e.machine, e.type, e.voltage, e.notes]
      .map(v => `"${String(v).replace(/"/g, '""')}"`)
      .join(',')
  );
  const csv = [header, ...rows].join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  a.download = 'machine-maintenance-log.csv';
  a.click();
});

clearBtn.addEventListener('click', () => {
  if (!confirm('Clear all log entries? This cannot be undone.')) return;
  localStorage.removeItem(KEY);
  render();
});

render();
