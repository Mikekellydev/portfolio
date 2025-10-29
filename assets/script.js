(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if(stored === 'light') root.classList.add('light');

  function setIcon(){
    if (!toggle) return;
    toggle.textContent = root.classList.contains('light') ? '🌙' : '☀️';
  }
  setIcon();

  if (toggle) {
    toggle.addEventListener('click', () => {
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
      setIcon();
    });
  }

  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
