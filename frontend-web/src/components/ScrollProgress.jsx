import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../motion/gsap';

// 2px orange reading-progress line along the top edge of the viewport.
// Tied directly to scroll position (no easing), so it behaves the same with
// reduced motion: it only reflects where the reader is.
export default function ScrollProgress() {
  const barRef = useRef(null);

  useGSAP(() => {
    const setScale = gsap.quickSetter(barRef.current, 'scaleX');
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => setScale(self.progress),
      onRefresh: (self) => setScale(self.progress),
    });
  });

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[60] h-0.5 w-full bg-jcrea-orange origin-left pointer-events-none"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
