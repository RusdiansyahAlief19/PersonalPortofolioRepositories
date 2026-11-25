import { gsap, SplitText, useGSAP, prefersReducedMotion } from './gsap';

// Word-by-word rise for the hero name. Only the words inside the <h1> are
// animated; the AOS zoom-in stays on the wrapper div. useGSAP runs in a layout
// effect, so the hidden start state is set before first paint (no flash).
// The split is reverted on completion, restoring the original markup.
export function useHeroNameReveal(ref) {
  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const split = SplitText.create(ref.current, { type: 'words' });

      gsap.from(split.words, {
        yPercent: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        onComplete: () => split.revert(),
      });
    },
    { scope: ref }
  );
}
