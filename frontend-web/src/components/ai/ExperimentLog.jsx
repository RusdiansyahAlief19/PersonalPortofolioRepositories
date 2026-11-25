import { useRef } from 'react';
import { gsap, useGSAP } from '../../motion/gsap';

// Setup of the BSARec reproduction, as listed in the CV: datasets, seeds of the
// multi-seed audit, evaluation metrics, and the ablated hyperparameters.
// Configuration only, no result numbers. Rows fade in one by one, once.
const ROWS = [
  { label: 'dataset', values: ['Amazon Beauty', 'LastFM', 'MovieLens-1M'] },
  { label: 'seeds', values: ['42 · 43 · 44'] },
  { label: 'metrics', values: ['HR@K · NDCG@K'] },
  { label: 'ablation', values: ['α · c'] },
];

export default function ExperimentLog() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(rootRef.current.querySelectorAll('[data-row]'), {
          opacity: 0,
          y: 4,
          duration: 0.35,
          stagger: 0.12,
          delay: 0.2,
          ease: 'power1.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 85%', once: true },
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <dl
      ref={rootRef}
      aria-label="BSARec reproduction setup"
      className="font-mono text-[11px] md:text-[10px] lg:text-[11px] leading-[15px] space-y-0.5"
    >
      {ROWS.map((row) => (
        <div key={row.label} data-row className="flex gap-3 md:gap-2 lg:gap-3">
          <dt className="w-16 md:w-12 lg:w-16 shrink-0 text-gray-500">{row.label}</dt>
          <dd className="text-gray-300">
            {row.values.map((value) => <div key={value}>{value}</div>)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
