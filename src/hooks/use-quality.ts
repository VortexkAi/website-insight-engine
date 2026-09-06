import { useEffect, useState } from "react";

export type Quality = {
  /** Hydrated on the client only — false during SSR. */
  ready: boolean;
  /** User asked the OS to reduce motion. */
  reducedMotion: boolean;
  /** Coarse pointer / small viewport / low core count → cheaper effects. */
  lowPower: boolean;
  /** Render the 3D layer at all. */
  allow3d: boolean;
};

const initial: Quality = {
  ready: false,
  reducedMotion: false,
  lowPower: false,
  allow3d: false,
};

/**
 * Single source of truth for how expensive the motion / 3D layer is allowed to
 * be on the current device. Everything degrades gracefully: reduced motion or
 * a low-power device keeps the layout and typography identical, only the
 * animation budget shrinks.
 */
export function useQuality(): Quality {
  const [quality, setQuality] = useState<Quality>(initial);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const compute = () => {
      const reducedMotion = motionQuery.matches;
      const nav = navigator as Navigator & { deviceMemory?: number };
      const smallViewport = window.innerWidth < 768;
      const fewCores = (nav.hardwareConcurrency ?? 8) <= 4;
      const lowMemory = (nav.deviceMemory ?? 8) <= 4;
      const lowPower = smallViewport || fewCores || lowMemory;

      setQuality({
        ready: true,
        reducedMotion,
        lowPower,
        allow3d: !reducedMotion,
      });
    };

    compute();
    motionQuery.addEventListener("change", compute);
    window.addEventListener("resize", compute);
    return () => {
      motionQuery.removeEventListener("change", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return quality;
}
