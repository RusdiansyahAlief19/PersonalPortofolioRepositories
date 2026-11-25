import { useRef } from 'react';
import { gsap, useGSAP } from '../../motion/gsap';

// The 21 hand landmarks the BISINDO detector reads per frame (CV), drawn with the
// MediaPipe Hands topology: 0 wrist, 1-4 thumb (CMC, MCP, IP, TIP), 5-8 index,
// 9-12 middle, 13-16 ring, 17-20 pinky (MCP, PIP, DIP, TIP).
// Pose: a relaxed right hand, palm toward the camera, fingers slightly apart and
// lightly curved. Coordinates are hand-placed for illustration, not recorded data.
const POINTS = [
  [50, 110], // 0 wrist
  [37, 102], [27, 92], [19, 82], [13, 73], // thumb
  [33, 71], [29, 52], [27, 40], [26, 30], // index
  [45, 67], [44, 47], [44, 34], [44, 23], // middle
  [57, 69], [59, 50], [60, 38], [61, 28], // ring
  [67, 76], [72, 63], [75, 54], [77, 46], // pinky
];

// MediaPipe HAND_CONNECTIONS.
const BONES = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [0, 17], [17, 18], [18, 19], [19, 20],
];

const TIPS = new Set([4, 8, 12, 16, 20]);
const TOTAL = POINTS.length;

export default function HandLandmarks() {
  const rootRef = useRef(null);
  const countRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const root = rootRef.current;
        const dots = root.querySelectorAll('circle');
        const bones = root.querySelectorAll('line');
        const counter = { n: 0 };
        const stagger = 0.035;
        countRef.current.textContent = '0';

        gsap.timeline({ delay: 0.2, scrollTrigger: { trigger: root, start: 'top 85%', once: true } })
          // The label stays hidden until the run starts (no stray "0" before it).
          .from(countRef.current.parentElement, { opacity: 0, duration: 0.2 }, 0)
          // Landmarks appear in MediaPipe index order, the counter follows them.
          .from(dots, { attr: { r: 0 }, duration: 0.2, stagger, ease: 'back.out(2)' }, 0)
          .to(counter, {
            n: TOTAL,
            duration: stagger * (TOTAL - 1) + 0.2,
            ease: 'none',
            onUpdate: () => { countRef.current.textContent = String(Math.round(counter.n)); },
          }, 0)
          .from(bones, { drawSVG: 0, duration: 0.35, stagger: 0.015, ease: 'power1.out' }, '-=0.2');

        return () => { countRef.current.textContent = String(TOTAL); };
      });
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Skeleton of the 21 MediaPipe hand landmarks: wrist, plus four joints on each finger."
      className="h-full flex md:flex-col lg:flex-row items-center justify-center gap-5 md:gap-1 lg:gap-5"
    >
      <svg viewBox="5 16 80 102" className="h-24 md:h-20 lg:h-24 w-auto shrink-0" aria-hidden="true">
        {BONES.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={POINTS[a][0]} y1={POINTS[a][1]} x2={POINTS[b][0]} y2={POINTS[b][1]}
            stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" strokeLinecap="round" />
        ))}
        {POINTS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={TIPS.has(i) ? 2.7 : 2.1} fill={TIPS.has(i) ? '#FF6B00' : '#d1d5db'} />
        ))}
      </svg>
      <div className="text-left md:text-center lg:text-left" aria-hidden="true">
        <div ref={countRef} className="text-3xl md:text-lg lg:text-3xl font-bold text-white tabular-nums leading-none">{TOTAL}</div>
        <div className="font-mono text-[11px] text-gray-400 mt-1.5 md:mt-0.5 lg:mt-1.5 leading-snug">
          hand landmarks<br />per frame
        </div>
      </div>
    </div>
  );
}
