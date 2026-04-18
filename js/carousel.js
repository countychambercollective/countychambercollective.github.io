// Progressive enhancement for any <ul data-carousel> inside a .carousel-container.
// Injects prev/next buttons, wires keyboard + click navigation, and keeps
// the disabled state of each button in sync with scroll position.
(function () {
  'use strict';

  function createButton(direction) {
    var label = direction === 'prev' ? 'Previous slide' : 'Next slide';
    var glyph = direction === 'prev' ? '\u2039' : '\u203A';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'carousel-btn carousel-btn--' + direction;
    btn.setAttribute('aria-label', label);
    btn.innerHTML = '<span aria-hidden="true">' + glyph + '</span>';
    return btn;
  }

  function initCarousel(carousel) {
    var container = carousel.closest('.carousel-container');
    if (!container) return;

    var prev = createButton('prev');
    var next = createButton('next');
    container.appendChild(prev);
    container.appendChild(next);

    function slideWidth() {
      var firstSlide = carousel.querySelector(':scope > li');
      // Fall back to viewport-aware default if no slides yet.
      return firstSlide ? firstSlide.getBoundingClientRect().width + parseFloat(getComputedStyle(carousel).columnGap || 0)
                        : carousel.clientWidth * 0.9;
    }

    function scrollByOne(direction) {
      var distance = slideWidth() * (direction === 'next' ? 1 : -1);
      carousel.scrollBy({ left: distance, behavior: 'smooth' });
    }

    function updateButtons() {
      var epsilon = 2; // guard against sub-pixel rounding
      prev.disabled = carousel.scrollLeft <= epsilon;
      next.disabled = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - epsilon;
    }

    prev.addEventListener('click', function () { scrollByOne('prev'); });
    next.addEventListener('click', function () { scrollByOne('next'); });

    carousel.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons, { passive: true });

    // Make the carousel focusable so arrow keys work once focused.
    if (!carousel.hasAttribute('tabindex')) carousel.setAttribute('tabindex', '0');

    carousel.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'ArrowLeft':  e.preventDefault(); scrollByOne('prev'); break;
        case 'ArrowRight': e.preventDefault(); scrollByOne('next'); break;
        case 'Home':       e.preventDefault(); carousel.scrollTo({ left: 0, behavior: 'smooth' }); break;
        case 'End':        e.preventDefault(); carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' }); break;
      }
    });

    updateButtons();
  }

  function init() {
    document.querySelectorAll('[data-carousel]').forEach(initCarousel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
