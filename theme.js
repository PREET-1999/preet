// Apply saved theme immediately to avoid flash
(function () {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.dataset.theme = saved;
})();

// Wire up toggle button (only present on index.html, not coming-soon)
document.addEventListener('DOMContentLoaded', function () {
  const btn   = document.getElementById('themeToggle');
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  // Sync button state to current theme
  function syncBtn(t) {
    if (!btn) return;
    icon.textContent  = t === 'dark' ? '☀' : '◑';
    label.textContent = t === 'dark' ? 'light' : 'dark';
  }

  syncBtn(document.documentElement.dataset.theme);

  if (btn) {
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
      syncBtn(next);
    });
  }
});