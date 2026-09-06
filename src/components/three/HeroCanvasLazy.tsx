import { Suspense, lazy, useEffect, useState } from "react";

import { useQuality } from "@/hooks/use-quality";

/**
 * Client-only, lazily-fetched entry point for the hero 3D layer.
 *
 * The three.js bundle is only requested after hydration, and only when the
 * device and the user's motion preference allow it. Until then (and forever on
 * reduced-motion devices) the hero renders its static composition, so the page
 * is never blocked on the 3D chunk.
 */
const HeroScene = lazy(() => import("./HeroScene"));

export function HeroCanvasLazy({ className }: { className?: string }) {
  const { ready, allow3d, lowPower } = useQuality();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ready || !allow3d) return;
    // Let the hero text paint and settle before spending frames on WebGL.
    const id = window.setTimeout(() => setVisible(true), 260);
    return () => window.clearTimeout(id);
  }, [ready, allow3d]);

  if (!visible) return null;

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ animation: "fade-in-slow 1600ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
    >
      <Suspense fallback={null}>
        <HeroScene lowPower={lowPower} />
      </Suspense>
    </div>
  );
}
