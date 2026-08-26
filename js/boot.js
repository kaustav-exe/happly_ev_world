// HAPPY EV WORLD — Splash & Boot Animation Lifecycle Controller

document.addEventListener('DOMContentLoaded', () => {
  const bootContainer = document.getElementById('boot-sequence');
  if (!bootContainer) return;

  try {
    // Check if boot animation was already shown in this session
    const alreadyBooted = sessionStorage.getItem('happy_ev_boot_shown');
    
    if (alreadyBooted) {
      bootContainer.remove();
      return;
    }

    // Render startup animation overlay
    bootContainer.innerHTML = `
      <div id="boot-overlay" class="fixed inset-0 z-[100] bg-[#111415] flex flex-col items-center justify-center overflow-hidden transition-all duration-1000">
        <!-- Background scanlines/noise -->
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style="background-image: linear-gradient(0deg, transparent 50%, #00ff41 50%); background-size: 100% 4px;"></div>
        
        <!-- Logo & Branding Container -->
        <div class="relative flex flex-col items-center px-4 text-center">
          <div id="boot-logo-text" class="text-[#00ff41] font-bold text-4xl md:text-6xl tracking-tighter opacity-0 translate-y-4 transition-all duration-700 ease-out uppercase">
            Happy EV World
          </div>
          <div id="boot-sub-text" class="text-white/40 font-medium text-xs md:text-sm tracking-[0.4em] mt-3 opacity-0 transition-all duration-700 delay-300 ease-out uppercase">
            Electric Mobility. Live Better.
          </div>
          
          <!-- Technical Progress Bar -->
          <div class="w-48 h-[2px] bg-white/10 mt-8 overflow-hidden rounded-full relative">
            <div id="boot-progress-bar" class="absolute inset-0 bg-[#00ff41] w-0 transition-all duration-[1200ms] ease-in-out"></div>
          </div>
        </div>
      </div>
    `;

    // Start Animation Timeline
    setTimeout(() => {
      const logo = document.getElementById('boot-logo-text');
      if (logo) {
        logo.classList.remove('opacity-0', 'translate-y-4');
        logo.classList.add('opacity-100', 'translate-y-0');
      }
    }, 100);

    setTimeout(() => {
      const sub = document.getElementById('boot-sub-text');
      if (sub) {
        sub.classList.remove('opacity-0');
        sub.classList.add('opacity-100');
      }
    }, 400);

    setTimeout(() => {
      const bar = document.getElementById('boot-progress-bar');
      if (bar) {
        bar.style.width = '100%';
      }
    }, 600);

    // Transition to main site after ~2.0 seconds
    setTimeout(() => {
      const overlay = document.getElementById('boot-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transform = 'scale(1.03)';
        
        setTimeout(() => {
          if (bootContainer && bootContainer.parentNode) {
            bootContainer.remove();
          }
          try { sessionStorage.setItem('happy_ev_boot_shown', 'true'); } catch (e) {}
        }, 800);
      }
    }, 2000);

    // Emergency fail-safe cleanup after 2.6 seconds
    setTimeout(() => {
      if (bootContainer && bootContainer.parentNode) {
        bootContainer.remove();
      }
    }, 2600);

  } catch (err) {
    if (bootContainer && bootContainer.parentNode) {
      bootContainer.remove();
    }
  }
});

