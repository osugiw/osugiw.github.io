document.addEventListener("DOMContentLoaded", () => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mobileMenu.classList.add("hidden"))
    );
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // Scroll-spy for nav active state + trace progress
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const traceProgress = document.getElementById("trace-progress");

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.nav-link[data-section="${id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spyObserver.observe(s));

  // Trace rail fill based on scroll progress
  function updateTraceProgress() {
    if (!traceProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    traceProgress.style.height = `${Math.min(100, Math.max(0, pct))}%`;
  }
  window.addEventListener("scroll", updateTraceProgress, { passive: true });
  updateTraceProgress();
});
