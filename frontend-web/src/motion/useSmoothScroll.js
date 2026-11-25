import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './motion.css';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';

let instance = null;

// One Lenis instance for the whole page, driven by GSAP's ticker so
// ScrollTrigger and Lenis stay in sync. Skipped for reduced motion,
// which keeps the existing native (CSS smooth) scrolling.
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ anchors: true, autoRaf: false });
    lenis.on('scroll', ScrollTrigger.update);
    instance = lenis;

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      if (instance === lenis) instance = null;
    };
  }, []);
}

// The live Lenis instance, or null (reduced motion, or not mounted yet).
export const getLenis = () => instance;

// Scroll to an element while respecting its CSS scroll-margin-top (Lenis ignores it),
// so targets are not hidden under the fixed navbar. Falls back to native scrolling.
export function scrollToElement(el) {
  if (instance) {
    const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    instance.scrollTo(el, { offset: -margin });
  } else {
    el.scrollIntoView();
  }
}
