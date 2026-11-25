import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';

// Moves the orange pill behind the desktop link of the active section.
// Only the pill (a new child span of the navbar) is animated; the <nav> itself carries
// data-aos and is never touched. Within one link group the pill slides; when it has to
// cross the logo to the other group it fades out and back in instead.
export function useNavPill(navRef, pillRef, activeId) {
  const lastLink = useRef(null);
  const place = useRef(() => {});

  // Synced in a layout effect (not during render) so it always sees the latest activeId.
  useLayoutEffect(() => {
    place.current = (animate) => {
      const nav = navRef.current;
      const pill = pillRef.current;
      const link = nav?.querySelector(`a[href="#${activeId}"]`);
      if (!pill || !link || !link.offsetWidth) return;
      // Narrower padding on tablets, where the links sit closer together.
      const padX = window.innerWidth >= 1024 ? 20 : 12;
      const box = {
        x: link.offsetLeft - padX,
        y: link.offsetTop - 8,
        width: link.offsetWidth + padX * 2,
        height: link.offsetHeight + 16,
      };
      const previous = lastLink.current;
      lastLink.current = link;
      gsap.killTweensOf(pill);

      if (!animate || !previous || previous === link || prefersReducedMotion()) {
        gsap.set(pill, { ...box, opacity: 1 });
      } else if (previous.parentElement === link.parentElement) {
        gsap.to(pill, { ...box, opacity: 1, duration: 0.45, ease: 'power3.out' });
      } else {
        gsap.timeline()
          .to(pill, { opacity: 0, duration: 0.15, ease: 'power1.in' })
          .set(pill, box)
          .to(pill, { opacity: 1, duration: 0.25, ease: 'power1.out' });
      }
    };
  });

  useEffect(() => {
    place.current(true);
  }, [activeId]);

  // Re-measure without animation after resizes (ScrollTrigger refresh) and web-font load.
  useEffect(() => {
    let alive = true;
    const pill = pillRef.current;
    const onRefresh = () => alive && place.current(false);
    ScrollTrigger.addEventListener('refresh', onRefresh);
    document.fonts?.ready.then(onRefresh);
    return () => {
      alive = false;
      ScrollTrigger.removeEventListener('refresh', onRefresh);
      gsap.killTweensOf(pill);
    };
  }, [pillRef]);
}
