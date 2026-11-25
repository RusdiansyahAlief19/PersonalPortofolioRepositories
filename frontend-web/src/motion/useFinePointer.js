import { useSyncExternalStore } from 'react';

// True only on devices with a precise hover pointer (mouse / trackpad).
// Phones and tablets report (pointer: coarse), so hover-driven motion stays off there.
const QUERY = '(hover: hover) and (pointer: fine)';

const subscribe = (onChange) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
};

const getSnapshot = () => window.matchMedia(QUERY).matches;

export function useFinePointer() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
