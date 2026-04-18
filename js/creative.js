(function () {
  'use strict';

  const nav = document.getElementById('mainNav');
  const collapseTarget = document.getElementById('primary-nav');
  const toggle = document.querySelector('.navbar-toggle');

  function closeMenu() {
    if (!collapseTarget) return;
    collapseTarget.classList.remove('in');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.classList.add('collapsed');
  }

  toggle?.addEventListener('click', function () {
    const open = collapseTarget.classList.toggle('in');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.classList.toggle('collapsed', !open);
  });

  document.querySelectorAll('a.page-scroll').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = href === '#page-top' ? document.body : document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target === document.body ? 0 : target.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMenu();
    });
  });

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('affix', window.scrollY > 100);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const sections = ['about', 'services', 'portfolio', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  const navLinks = document.querySelectorAll('#primary-nav .nav > li');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = '#' + entry.target.id;
        navLinks.forEach(function (li) {
          const link = li.querySelector('a');
          li.classList.toggle('active', !!link && link.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }
})();
