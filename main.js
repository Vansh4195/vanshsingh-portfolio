// Subtle scroll-reveal + sticky-nav border. No dependencies, no bloat.
(function () {
  'use strict';

  // current year in footer
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // add a border to the top bar once the page scrolls
  var topbar = document.querySelector('.topbar');
  if (topbar) {
    var onScroll = function () {
      topbar.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // reveal section content as it enters the viewport
  if (!reduce && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.section .container > *, .reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }
})();
