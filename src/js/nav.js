// Mobile nav toggle + ARIA
(function() {
  const burger = document.querySelector('.burger');
  if (!burger) return;
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'main-nav');
  const nav = document.querySelector('.nav-links');
  if (nav) nav.id = 'main-nav';

  burger.addEventListener('click', function() {
    const open = document.documentElement.classList.toggle('nav-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  document.querySelectorAll('.nav-links a, .nav-lang a').forEach(a => {
    a.addEventListener('click', () => {
      document.documentElement.classList.remove('nav-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.documentElement.classList.contains('nav-open')) {
      burger.click();
    }
  });
})();
