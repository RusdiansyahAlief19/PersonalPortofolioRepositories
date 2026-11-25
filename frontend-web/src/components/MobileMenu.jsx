import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { gsap, useGSAP, prefersReducedMotion } from '../motion/gsap';
import { getLenis, scrollToElement } from '../motion/useSmoothScroll';

// Navigation for screens below md, where the navbar links are hidden.
// The toggle sits inside the navbar; the panel and backdrop are portalled to <body>
// so they are not positioned relative to the navbar (which has a transform).
// Keyboard: aria-expanded on the toggle, Esc closes, Tab is kept inside toggle + panel.
export default function MobileMenu({ links, activeId }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const close = (restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  };

  // Lock page scroll while open (Lenis when active, otherwise native overflow).
  useEffect(() => {
    if (!open) return undefined;
    const lenis = getLenis();
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    if (lenis) lenis.stop();
    else html.style.overflow = 'hidden';
    return () => {
      if (lenis) lenis.start();
      else html.style.overflow = previousOverflow;
    };
  }, [open]);

  // Focus the first link on open, trap Tab, close on Esc and when the viewport reaches md.
  useEffect(() => {
    if (!open) return undefined;
    const focusables = () => [toggleRef.current, ...panelRef.current.querySelectorAll('a')];
    focusables()[1]?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusables();
      const index = items.indexOf(document.activeElement);
      const next = event.shiftKey
        ? (index <= 0 ? items.length - 1 : index - 1)
        : (index === -1 || index === items.length - 1 ? 0 : index + 1);
      event.preventDefault();
      items[next].focus();
    };

    const desktop = window.matchMedia('(min-width: 768px)');
    const onDesktop = () => desktop.matches && close(false);

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onDesktop);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [open]);

  // Entrance: panel drops in, links follow with a short stagger. Exit is instant.
  useGSAP(
    () => {
      if (!open || !panelRef.current || prefersReducedMotion()) return;
      gsap.timeline()
        .from(panelRef.current, { opacity: 0, y: -8, duration: 0.25, ease: 'power2.out' })
        .from(panelRef.current.querySelectorAll('li'), { opacity: 0, y: -6, duration: 0.25, stagger: 0.04, ease: 'power2.out' }, '-=0.1');
    },
    { dependencies: [open] }
  );

  const onLinkClick = (event, href) => {
    const target = document.querySelector(href);
    if (!target) return;
    // Handled here (not by Lenis anchors): restart Lenis first, then scroll, then close.
    event.preventDefault();
    event.stopPropagation();
    getLenis()?.start();
    scrollToElement(target);
    close(false);
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="md:hidden flex items-center gap-2 text-sm font-semibold text-white border border-white/15 rounded-full px-4 py-2 hover:border-jcrea-orange/60 transition-colors"
      >
        {open ? 'Close' : 'Menu'}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {open
            ? <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
            : <path strokeLinecap="round" strokeWidth="2" d="M4 9h16M4 15h16" />}
        </svg>
      </button>

      {open && createPortal(
        <>
          <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => close()} aria-hidden="true" />
          <div className="md:hidden fixed top-24 inset-x-0 z-50 mx-auto w-[95%]">
            <nav
              ref={panelRef}
              id="mobile-menu"
              aria-label="Sections"
              className="bg-jcrea-gray/95 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl p-3"
            >
              <ul>
                {links.map((link) => {
                  const active = link.href === `#${activeId}`;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={active ? 'true' : undefined}
                        onClick={(event) => onLinkClick(event, link.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-lg font-semibold transition-colors hover:bg-white/5 ${active ? 'text-jcrea-orange' : 'text-gray-300 hover:text-white'}`}
                      >
                        {link.label}
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-jcrea-orange" aria-hidden="true" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
