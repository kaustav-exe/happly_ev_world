// HAPPY EV WORLD — Main Application Controller & Motion System

document.addEventListener('DOMContentLoaded', () => {
  initNavbarMotion();
  initHeroParallax();
  initSectionFolding();
  initImageMasks();
  initMobileMenu();
  highlightActiveNav();
  initScrollReveals();
  initContactForm();
  renderProducts();
});

// Floating Transparent Navbar Scroll & Load Animation
function initNavbarMotion() {
  const navbar = document.querySelector('nav');
  if (!navbar) return;

  navbar.classList.add('floating-navbar');

  const logo = navbar.querySelector('a');
  const links = navbar.querySelectorAll('.hidden.md\\:flex a');
  const cta = navbar.querySelector('.hidden.md\\:block a');

  if (logo) {
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-10px)';
    logo.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      logo.style.opacity = '1';
      logo.style.transform = 'translateY(0)';
    }, 150);
  }

  links.forEach((link, idx) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(-10px)';
    link.style.transition = `opacity 0.5s ease ${0.2 + idx * 0.08}s, transform 0.5s ease ${0.2 + idx * 0.08}s`;
    setTimeout(() => {
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    }, 200 + idx * 80);
  });

  if (cta) {
    cta.style.opacity = '0';
    cta.style.transform = 'translateY(-10px)';
    cta.style.transition = 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s';
    setTimeout(() => {
      cta.style.opacity = '1';
      cta.style.transform = 'translateY(0)';
    }, 600);
  }

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Hero Subtle Mouse & Scroll Parallax
function initHeroParallax() {
  const heroSection = document.querySelector('section.relative.min-h-screen, section.relative.h-screen');
  if (!heroSection) return;

  const heroBg = heroSection.querySelector('.bg-cover');
  const heroContent = heroSection.querySelector('.relative.z-10');

  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX = (clientX / innerWidth - 0.5) * 15;
    mouseY = (clientY / innerHeight - 0.5) * 15;
  }, { passive: true });

  const animateParallax = () => {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    if (heroBg) {
      heroBg.style.transform = `scale(1.02) translate3d(${currentX * -0.6}px, ${currentY * -0.6}px, 0)`;
    }
    if (heroContent) {
      heroContent.style.transform = `translate3d(${currentX * 0.4}px, ${currentY * 0.4}px, 0)`;
    }

    requestAnimationFrame(animateParallax);
  };

  animateParallax();
}

// 3D Magazine Page-Folding Section Transitions
function initSectionFolding() {
  const sections = document.querySelectorAll('section.section-fold');
  if (sections.length === 0) return;

  // On mobile screens, disable opacity masking so content is never blank
  const isMobile = window.innerWidth < 768;

  const foldObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting || isMobile) {
        entry.target.classList.add('fold-active');
        entry.target.classList.remove('fold-hidden');
      }
    });
  }, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' });

  sections.forEach((section) => {
    if (isMobile) {
      section.classList.add('fold-active');
      section.classList.remove('fold-hidden');
    } else {
      section.classList.add('fold-hidden');
      foldObserver.observe(section);
    }
  });
}

// Clip-Path Image Mask Reveals
function initImageMasks() {
  const maskImages = document.querySelectorAll('.mask-reveal');
  if (maskImages.length === 0) return;

  const maskObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('mask-active');
      }
    });
  }, { threshold: 0.05, rootMargin: '50px 0px 50px 0px' });

  maskImages.forEach(img => maskObserver.observe(img));
}

// Mobile Hamburger Menu Drawer Handler
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    document.body.style.overflow = '';
  };

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  const navLinks = mobileMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Active Route Nav Link Highlighter
function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();

  const navLinks = document.querySelectorAll('nav a, #mobile-menu a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.toLowerCase();

    const isHome = (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/happy_ev_world/')) && (cleanHref === '/' || cleanHref === '/index.html');
    const isExactMatch = cleanHref !== '/' && currentPath.includes(cleanHref.replace('.html', ''));

    if (isHome || isExactMatch) {
      if (!link.classList.contains('btn-primary')) {
        link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-primary', 'pb-1');
        link.classList.remove('text-on-surface-variant');
      }
    }
  });
}

// Scroll Reveal Animations
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 40;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible || window.innerWidth < 768) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();
}

// Contact / Test Ride Booking Form Handler
function initContactForm() {
  const form = document.getElementById('test-ride-form');
  if (!form) return;

  const feedbackContainer = document.getElementById('form-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerText : 'SEND ENQUIRY';

    const nameInput = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');

    if (nameInput && !nameInput.value.trim()) {
      alert('Please enter your full name.');
      nameInput.focus();
      return;
    }

    if (phoneInput && !phoneInput.value.trim()) {
      alert('Please enter your mobile phone number.');
      phoneInput.focus();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'SENDING...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      }

      form.reset();

      if (feedbackContainer) {
        feedbackContainer.innerHTML = `
          <div class="p-6 bg-[#00ff41]/10 border border-[#00ff41] rounded-lg text-center mt-4">
            <span class="material-symbols-outlined text-[#00ff41] text-4xl mb-2">check_circle</span>
            <h4 class="text-[#00ff41] font-bold text-xl mb-1">Test Ride Inquiry Received!</h4>
            <p class="text-on-surface-variant text-sm">Thank you! Our Happy EV World Sodepur team will contact you shortly to confirm your schedule.</p>
          </div>
        `;
      } else {
        alert('Thank you! Your test ride enquiry has been received. Our team will contact you shortly.');
      }
    }, 1000);
  });
}

// Render Products Catalogue Dynamically into Grids
function renderProducts() {
  const catalogueContainer = document.getElementById('products-grid');
  if (!catalogueContainer || typeof PRODUCTS === 'undefined') return;

  catalogueContainer.innerHTML = PRODUCTS.map(product => `
    <div class="surface-graphite outline-thin group cursor-pointer overflow-hidden flex flex-col justify-between rounded transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 opacity-100">
      <div class="w-full h-[220px] md:h-[260px] relative overflow-hidden bg-surface-container-lowest">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             src="${product.image}" 
             alt="${product.name}"
             loading="lazy" />
        <div class="absolute top-4 left-4 font-label-caps text-[10px] md:text-xs border border-white/20 px-3 py-1 bg-black/60 backdrop-blur-sm text-on-background uppercase tracking-wider">
          ${product.badge}
        </div>
      </div>
      <div class="p-5 md:p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 class="font-headline-md text-xl md:text-2xl font-bold text-on-background mb-2 tracking-tight">${product.name}</h3>
          <p class="font-body-md text-sm text-on-surface-variant mb-6 line-clamp-2">${product.description}</p>
        </div>
        <div class="flex flex-col gap-4 mt-auto">
          <div class="flex justify-between border-t border-white/10 pt-4">
            <div>
              <span class="block font-label-caps text-[10px] text-on-surface-variant mb-1">RANGE</span>
              <span class="font-mono-technical text-sm font-semibold text-on-background">${product.range}</span>
            </div>
            <div>
              <span class="block font-label-caps text-[10px] text-on-surface-variant mb-1">TOP SPEED</span>
              <span class="font-mono-technical text-sm font-semibold text-on-background">${product.speed}</span>
            </div>
            ${product.battery ? `
            <div>
              <span class="block font-label-caps text-[10px] text-on-surface-variant mb-1">BATTERY</span>
              <span class="font-mono-technical text-sm font-semibold text-on-background">${product.battery}</span>
            </div>` : ''}
          </div>
          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="/contact" class="btn-primary font-body-md text-xs font-semibold px-4 py-3 text-center rounded flex-1 uppercase tracking-wider">
              Book Test Ride <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a href="/contact" class="btn-secondary font-body-md text-xs text-center py-3 px-4 rounded uppercase tracking-wider">
              Inquire
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}
