import { useState } from 'react';
import { ScrollTrigger, useGSAP } from './gsap';

// Id of the section that currently crosses the middle of the viewport.
// `alias` maps sections without their own nav link to the link they belong to
// (e.g. the AI Focus strip counts as Home). Read-only: no element is animated.
export function useActiveSection(ids, alias = {}) {
  const [active, setActive] = useState(ids[0]);

  useGSAP(() => {
    [...ids, ...Object.keys(alias)].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => self.isActive && setActive(alias[id] ?? id),
      });
    });
  });

  return active;
}
