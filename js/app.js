// ============================================================
// HAPPY EV WORLD — Main Application Controller & Motion System
// v2.0 — Premium Production Polish
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  injectWhatsAppFAB();
  initNavbarMotion();
  initHeroVideo();
  initHeroParallax();
  initHeroSequence();
  initSectionFolding();
  initImageMasks();
  initMobileMenu();
  highlightActiveNav();
  initScrollReveals();
  initContactForm();
  renderProducts();
  initImageLazyLoad();
  initCounterAnimation();
  initProductFilterStagger();
});

// ─────────────────────────────────────────────────────────────
// WhatsApp Floating Action Button — Inject site-wide
// ─────────────────────────────────────────────────────────────
function injectWhatsAppFAB() {
  if (document.getElementById('whatsapp-fab')) return;

  const fab = document.createElement('a');
  fab.id = 'whatsapp-fab';
  fab.href = 'https://wa.me/918961824113?text=Hi%20Happy%20EV%20World%2C%20I%20am%20interested%20in%20booking%20a%20test%20ride.';
  fab.target = '_blank';
  fab.rel = 'noopener noreferrer';
  fab.setAttribute('aria-label', 'Chat with us on WhatsApp');
  fab.setAttribute('title', 'Chat on WhatsApp');

  // WhatsApp SVG icon
  fab.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>`;

  document.body.appendChild(fab);

  // Delay appearance for 2s after page load
  fab.style.opacity = '0';
  fab.style.transform = 'scale(0.7)';
  fab.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)';
  setTimeout(() => {
    fab.style.opacity = '1';
    fab.style.transform = 'scale(1)';
  }, 2000);
}

// ─────────────────────────────────────────────────────────────
// Floating Transparent Navbar Scroll & Load Animation
// ─────────────────────────────────────────────────────────────
function initNavbarMotion() {
  const navbar = document.querySelector('nav');
  if (!navbar) return;

  navbar.classList.add('floating-navbar');

  // Entrance animation elements
  const logo = navbar.querySelector('a.brand-logo');
  const links = navbar.querySelectorAll('.hidden.md\\:flex a');
  const cta = navbar.querySelector('.hidden.md\\:block a');

  if (logo) {
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-12px)';
    logo.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      logo.style.opacity = '1';
      logo.style.transform = 'translateY(0)';
    }, 200);
  }

  links.forEach((link, idx) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(-10px)';
    link.style.transition = `opacity 0.5s ease ${0.25 + idx * 0.07}s, transform 0.5s ease ${0.25 + idx * 0.07}s`;
    setTimeout(() => {
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    }, 250 + idx * 70);
  });

  if (cta) {
    cta.style.opacity = '0';
    cta.style.transform = 'translateY(-10px)';
    cta.style.transition = 'opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s';
    setTimeout(() => {
      cta.style.opacity = '1';
      cta.style.transform = 'translateY(0)';
    }, 650);
  }

  const handleScroll = () => {
    navbar.classList.toggle('nav-scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ─────────────────────────────────────────────────────────────
// Hero Cinematic Entrance Sequence (Homepage)
// ─────────────────────────────────────────────────────────────
function initHeroSequence() {
  const heroSection = document.querySelector('section.hero-section');
  if (!heroSection) return;

  const label = heroSection.querySelector('.hero-label');
  const h1    = heroSection.querySelector('h1');
  const sub   = heroSection.querySelector('.hero-subtitle');
  const ctas  = heroSection.querySelectorAll('.hero-cta a');
  const scroll = heroSection.querySelector('.scroll-indicator');

  const timeline = [
    [label,  400, 'translateY(20px)'],
    [h1,     600, 'translateY(24px)'],
    [sub,    800, 'translateY(20px)'],
  ];

  timeline.forEach(([el, delay, startTransform]) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = startTransform;
    el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, delay);
  });

  ctas.forEach((cta, idx) => {
    const delay = 1000 + idx * 100;
    cta.style.opacity = '0';
    cta.style.transform = 'translateY(16px)';
    cta.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    setTimeout(() => {
      cta.style.opacity = '1';
      cta.style.transform = 'translateY(0)';
    }, delay);
  });

  if (scroll) {
    scroll.style.opacity = '0';
    setTimeout(() => {
      scroll.style.transition = 'opacity 0.8s ease';
      scroll.style.opacity = '1';
    }, 1600);
  }
}

// ─────────────────────────────────────────────────────────────
// Hero Video Background Controller & Autoplay Handler
// ─────────────────────────────────────────────────────────────
function initHeroVideo() {
  const video = document.querySelector('.hero-bg-video');
  const container = document.querySelector('.hero-bg-container');
  if (!video || !container) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    container.classList.add('video-failed');
    video.pause();
    return;
  }

  // Attempt autoplay safely
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // If autoplay is blocked by browser policy / low-power mode, fallback to static image
      container.classList.add('video-failed');
    });
  }
}

// ─────────────────────────────────────────────────────────────
// Hero Subtle Mouse Parallax
// ─────────────────────────────────────────────────────────────
function initHeroParallax() {
  const heroSection = document.querySelector('section.hero-section, section.relative.min-h-screen');
  if (!heroSection) return;

  const heroBg = heroSection.querySelector('.hero-bg-container, .hero-bg-image, .bg-cover');
  const heroContent = heroSection.querySelector('.relative.z-10');

  // Skip on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 12;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 12;
    if (!ticking) {
      requestAnimationFrame(animateParallax);
      ticking = true;
    }
  }, { passive: true });

  const animateParallax = () => {
    ticking = false;
    currentX += (mouseX - currentX) * 0.04;
    currentY += (mouseY - currentY) * 0.04;

    if (heroBg) {
      heroBg.style.transform = `scale(1.03) translate3d(${currentX * -0.4}px, ${currentY * -0.4}px, 0)`;
    }
    if (heroContent) {
      heroContent.style.transform = `translate3d(${currentX * 0.25}px, ${currentY * 0.25}px, 0)`;
    }
    requestAnimationFrame(animateParallax);
  };

  animateParallax();
}

// ─────────────────────────────────────────────────────────────
// 3D Section Folding Transitions
// ─────────────────────────────────────────────────────────────
function initSectionFolding() {
  const sections = document.querySelectorAll('section.section-fold');
  if (!sections.length) return;

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    sections.forEach(s => {
      s.classList.remove('fold-hidden');
      s.classList.add('fold-active');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fold-active');
        entry.target.classList.remove('fold-hidden');
      }
    });
  }, { threshold: 0.01, rootMargin: '80px 0px 80px 0px' });

  sections.forEach(s => {
    s.classList.add('fold-hidden');
    observer.observe(s);
  });
}

// ─────────────────────────────────────────────────────────────
// Clip-Path Image Mask Reveals
// ─────────────────────────────────────────────────────────────
function initImageMasks() {
  const masks = document.querySelectorAll('.mask-reveal');
  if (!masks.length) return;

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    masks.forEach(m => m.classList.add('mask-active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('mask-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' });

  masks.forEach(m => observer.observe(m));
}

// ─────────────────────────────────────────────────────────────
// Mobile Hamburger Menu Drawer
// ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const menuBtn  = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu     = document.getElementById('mobile-menu');
  if (!menu) return;

  const open = () => {
    menu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    menu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    document.body.style.overflow = 'hidden';
    closeBtn && closeBtn.focus();
  };

  const close = () => {
    menu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    menu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    document.body.style.overflow = '';
    menuBtn && menuBtn.focus();
  };

  menuBtn && menuBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(l => l.addEventListener('click', close));

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('opacity-0')) close();
  });
}

// ─────────────────────────────────────────────────────────────
// Active Route Nav Highlighter
// ─────────────────────────────────────────────────────────────
function highlightActiveNav() {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');

  const desktopLinks = document.querySelectorAll('nav .hidden.md\\:flex a');
  const mobileLinks  = document.querySelectorAll('#mobile-menu .flex-col a');

  const allLinks = [...desktopLinks, ...mobileLinks];

  allLinks.forEach(link => {
    if (link.classList.contains('brand-logo') || link.classList.contains('btn-primary')) return;
    const href = (link.getAttribute('href') || '').toLowerCase().replace(/\/$/, '').replace('.html', '');
    const linkPath = href === '' ? '/' : href;

    const isHome = (path === '' || path === '/index') && (linkPath === '/' || linkPath === '');
    const isMatch = linkPath !== '/' && linkPath !== '' && path.includes(linkPath);

    if (isHome || isMatch) {
      link.classList.add('nav-active', 'text-[#00ff41]', 'font-bold');
      // Remove the old hardcoded underline border and let CSS handle it via ::after
      link.classList.remove('border-b-2', 'border-primary', 'pb-1');
    }
  });
}

// ─────────────────────────────────────────────────────────────
// Scroll Reveal — Supports stagger delay classes
// ─────────────────────────────────────────────────────────────
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const isMobile = window.innerWidth < 768;
  const threshold = isMobile ? 60 : 80;

  const activate = (el) => el.classList.add('active');

  if (isMobile) {
    // On mobile, activate all immediately — no scroll gating
    reveals.forEach(activate);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: `0px 0px -${threshold}px 0px`,
    threshold: 0.01
  });

  reveals.forEach(el => observer.observe(el));
}

// ─────────────────────────────────────────────────────────────
// Counter Animation — for statistics sections
// ─────────────────────────────────────────────────────────────
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = prefix + value.toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ─────────────────────────────────────────────────────────────
// Image Lazy Load — Fade-in on loaded
// ─────────────────────────────────────────────────────────────
function initImageLazyLoad() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    }
  });
}

// ─────────────────────────────────────────────────────────────
// Product Filter Stagger (electric-scooters page)
// ─────────────────────────────────────────────────────────────
function initProductFilterStagger() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  // Add stagger classes to cards as they render
  const staggerCards = () => {
    const cards = grid.querySelectorAll('.product-card');
    cards.forEach((card, idx) => {
      card.style.transitionDelay = `${(idx % 4) * 0.06}s`;
    });
  };

  // Use MutationObserver to detect when renderProducts() finishes
  const observer = new MutationObserver(() => {
    staggerCards();
    observer.disconnect();
  });
  observer.observe(grid, { childList: true });
}

// ─────────────────────────────────────────────────────────────
// Contact / Test Ride Booking Form Handler
// ─────────────────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('test-ride-form');
  if (!form) return;

  const feedbackContainer = document.getElementById('form-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const nameInput = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');

    if (nameInput && !nameInput.value.trim()) {
      showFieldError(nameInput, 'Please enter your full name.');
      return;
    }
    if (phoneInput && !phoneInput.value.trim()) {
      showFieldError(phoneInput, 'Please enter your phone number.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'SENDING... <span class="material-symbols-outlined text-sm">hourglass_top</span>';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'SEND ENQUIRY <span class="material-symbols-outlined text-sm">arrow_forward</span>';
      }
      form.reset();

      if (feedbackContainer) {
        feedbackContainer.innerHTML = `
          <div class="p-6 bg-[#00ff41]/10 border border-[#00ff41]/40 rounded text-center mt-6">
            <span class="material-symbols-outlined text-[#00ff41] text-4xl block mb-2">check_circle</span>
            <h4 class="text-[#00ff41] font-bold text-lg mb-1 uppercase tracking-wide">Enquiry Received!</h4>
            <p class="text-on-surface-variant text-sm">Thank you! Our Happy EV World Sodepur team will contact you within 24 hours to confirm your test ride.</p>
          </div>
        `;
      }
    }, 1000);
  });
}

function showFieldError(input, message) {
  input.focus();
  const parent = input.parentElement;
  let err = parent.querySelector('.field-error');
  if (!err) {
    err = document.createElement('span');
    err.className = 'field-error text-red-400 text-xs block mt-1';
    parent.appendChild(err);
  }
  err.textContent = message;
  input.addEventListener('input', () => err.remove(), { once: true });
}

// ─────────────────────────────────────────────────────────────
// Render Products Catalogue Dynamically
// ─────────────────────────────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  grid.innerHTML = PRODUCTS.map((p, idx) => `
    <article
      class="product-card surface-graphite outline-thin flex flex-col overflow-hidden rounded"
      style="transition-delay: ${(idx % 4) * 0.07}s"
      aria-label="${p.name} electric scooter">
      <div class="relative overflow-hidden" style="height:220px; background:#0c0e10;">
        <img
          class="card-image w-full h-full object-cover"
          src="${p.image}"
          alt="${p.name} electric scooter at Happy EV World Sodepur"
          loading="lazy"
          width="400"
          height="220" />
        <div class="absolute top-3 left-3">
          <span class="text-[10px] font-bold border border-white/20 px-2.5 py-0.5 bg-black/65 backdrop-blur-sm text-white uppercase tracking-wider">${p.badge}</span>
        </div>
      </div>
      <div class="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 class="text-lg font-extrabold text-white mb-1 tracking-tight uppercase leading-tight">${p.name}</h3>
          <p class="text-xs text-on-surface-variant mb-4 leading-relaxed line-clamp-2">${p.description}</p>
        </div>
        <div class="flex flex-col gap-4 mt-auto">
          <div class="grid grid-cols-3 border-t border-white/10 pt-3 gap-1">
            <div>
              <span class="block text-[9px] text-on-surface-variant font-bold tracking-wider uppercase mb-0.5">Range</span>
              <span class="text-xs font-bold text-white">${p.range}</span>
            </div>
            <div>
              <span class="block text-[9px] text-on-surface-variant font-bold tracking-wider uppercase mb-0.5">Speed</span>
              <span class="text-xs font-bold text-white">${p.speed}</span>
            </div>
            ${p.battery ? `<div>
              <span class="block text-[9px] text-on-surface-variant font-bold tracking-wider uppercase mb-0.5">Battery</span>
              <span class="text-xs font-bold text-white">${p.battery}</span>
            </div>` : '<div></div>'}
          </div>
          <div class="flex gap-2">
            <a href="/contact"
               class="btn-primary flex-1 text-[10px] font-bold py-2.5 text-center uppercase tracking-wider rounded"
               aria-label="Book test ride for ${p.name}">
              Book Test Ride <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
            <a href="https://wa.me/918961824113?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(p.name)}"
               target="_blank"
               rel="noopener"
               class="btn-whatsapp text-[10px] font-bold py-2.5 px-3 rounded uppercase tracking-wider"
               aria-label="WhatsApp enquiry for ${p.name}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Trigger lazy load for newly inserted images
  initImageLazyLoad();
}
