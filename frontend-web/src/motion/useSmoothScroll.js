import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './motion.css';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';

// One Lenis instance for the whole page, driven by GSAP's ticker so
// ScrollTrigger and Lenis stay in sync. Skipped for reduced motion,
// which keeps the existing native (CSS smooth) scrolling.
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ anchors: true, autoRaf: false });
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}
