/* ===================================================
   BAGEL & CO. — Main JavaScript
   =================================================== */

// Navigation scroll class
const nav = document.getElementById('site-nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
};
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll reveal with IntersectionObserver
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Mobile menu toggle logic
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

/**
 * メニューを開閉する共通関数
 * .is-animating を付与してtransitionを有効化し、
 * アニメーション完了後に自動で除去する（リサイズ時のフラッシュ防止）
 */
function toggleMenu(forceClose = false) {
  // 既に実行中のアニメーションをクリア
  navLinks.classList.remove('is-animating');

  // 次のフレームで is-animating を付与（即時除去を防ぐため）
  requestAnimationFrame(() => {
    navLinks.classList.add('is-animating');

    const isActive = forceClose ? false : menuToggle.classList.toggle('is-active');
    if (forceClose) {
      menuToggle.classList.remove('is-active');
      navLinks.classList.remove('is-active');
    } else {
      navLinks.classList.toggle('is-active');
    }
    menuToggle.setAttribute('aria-expanded', String(isActive));
    document.body.style.overflow = isActive ? 'hidden' : '';

    // transitionend 後に is-animating を除去
    const onTransitionEnd = () => {
      navLinks.classList.remove('is-animating');
      navLinks.removeEventListener('transitionend', onTransitionEnd);
    };
    navLinks.addEventListener('transitionend', onTransitionEnd);
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => toggleMenu());

  // Automatically close menu when clicking any link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });
}
