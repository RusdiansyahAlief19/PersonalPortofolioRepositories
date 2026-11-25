import { useRef } from 'react';
import { gsap, useGSAP } from '../../motion/gsap';

// Hybrid retrieval pipeline from the Astra UD Trucks project (CV): the query goes to
// BM25 keyword search and FAISS vector search in parallel, Reciprocal Rank Fusion merges
// both rankings, and the fused context goes to the LLM.
// Two layouts: horizontal (phones and >= lg, ~290px wide cards) and vertical (md only,
// where the three-column cards are ~176px wide). The diagram is drawn once on scroll.

const NODE_H = 20;

const layouts = {
  horizontal: {
    viewBox: '0 0 290 96',
    nodes: {
      query: { cx: 28, cy: 48, w: 50 },
      bm25: { cx: 112, cy: 20, w: 46 },
      faiss: { cx: 112, cy: 76, w: 50 },
      rrf: { cx: 196, cy: 48, w: 40 },
      llm: { cx: 262, cy: 48, w: 40 },
    },
    edge: (a, b) => {
      const x1 = a.cx + a.w / 2;
      const x2 = b.cx - b.w / 2;
      const mx = (x1 + x2) / 2;
      return `M${x1} ${a.cy} C${mx} ${a.cy} ${mx} ${b.cy} ${x2} ${b.cy}`;
    },
  },
  vertical: {
    viewBox: '0 0 176 128',
    nodes: {
      query: { cx: 88, cy: 12, w: 50 },
      bm25: { cx: 46, cy: 48, w: 46 },
      faiss: { cx: 130, cy: 48, w: 50 },
      rrf: { cx: 88, cy: 84, w: 40 },
      llm: { cx: 88, cy: 116, w: 40 },
    },
    edge: (a, b) => {
      const y1 = a.cy + NODE_H / 2;
      const y2 = b.cy - NODE_H / 2;
      const my = (y1 + y2) / 2;
      return `M${a.cx} ${y1} C${a.cx} ${my} ${b.cx} ${my} ${b.cx} ${y2}`;
    },
  },
};

// step = order of appearance; nodes and edges with the same step appear together.
const NODES = [
  { id: 'query', label: 'query', step: 0 },
  { id: 'bm25', label: 'BM25', step: 2 },
  { id: 'faiss', label: 'FAISS', step: 2 },
  { id: 'rrf', label: 'RRF', step: 4, accent: true },
  { id: 'llm', label: 'LLM', step: 6, strong: true },
];
const EDGES = [
  { from: 'query', to: 'bm25', step: 1 },
  { from: 'query', to: 'faiss', step: 1 },
  { from: 'bm25', to: 'rrf', step: 3 },
  { from: 'faiss', to: 'rrf', step: 3 },
  { from: 'rrf', to: 'llm', step: 5 },
];
const LAST_STEP = 6;

function Diagram({ layout, className }) {
  const { viewBox, nodes, edge } = layouts[layout];
  return (
    <svg viewBox={viewBox} className={`font-mono ${className}`} aria-hidden="true" data-layout={layout}>
      {EDGES.map((e) => (
        <path key={`${e.from}-${e.to}`} data-step={e.step} d={edge(nodes[e.from], nodes[e.to])}
          fill="none" stroke="#FF6B00" strokeOpacity="0.55" strokeWidth="1.25" strokeLinecap="round" />
      ))}
      {NODES.map((n) => {
        const { cx, cy, w } = nodes[n.id];
        return (
          <g key={n.id} data-step={n.step}>
            <rect x={cx - w / 2} y={cy - NODE_H / 2} width={w} height={NODE_H} rx={NODE_H / 2}
              fill="#161616" stroke={n.accent ? '#FF6B00' : 'rgba(255,255,255,0.18)'} />
            <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize="10.5"
              fill={n.accent ? '#FF6B00' : n.strong ? '#ffffff' : '#d1d5db'}>
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function RagDiagram() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          tablet: '(min-width: 768px) and (max-width: 1023px)',
        },
        (ctx) => {
          if (!ctx.conditions.motion) return;
          // Animate only the layout that is currently displayed.
          const svg = rootRef.current.querySelector(`[data-layout="${ctx.conditions.tablet ? 'vertical' : 'horizontal'}"]`);
          const tl = gsap.timeline({
            delay: 0.2,
            scrollTrigger: { trigger: rootRef.current, start: 'top 85%', once: true },
          });
          for (let step = 0; step <= LAST_STEP; step += 1) {
            const items = svg.querySelectorAll(`[data-step="${step}"]`);
            if (step % 2) tl.from(items, { drawSVG: 0, duration: 0.35, ease: 'power1.inOut' });
            else tl.from(items, { opacity: 0, duration: 0.25, ease: 'power1.out' }, step ? '-=0.05' : 0);
          }
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Hybrid retrieval pipeline: the query goes to BM25 keyword search and FAISS vector search in parallel, Reciprocal Rank Fusion (RRF) merges both rankings, and the result goes to the LLM."
      className="w-full flex items-center justify-center"
    >
      <Diagram layout="horizontal" className="w-full max-w-[290px] md:hidden lg:block" />
      <Diagram layout="vertical" className="hidden md:block lg:hidden w-[176px] max-w-full" />
    </div>
  );
}
