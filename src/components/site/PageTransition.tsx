import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Cinematic route change: the outgoing page recedes slightly and blurs while a
 * thin bronze veil sweeps across, then the incoming page rises back into focus.
 * Fast on purpose — well under half a second — so navigation never feels slow.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 24, scale: 0.992, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -14, scale: 0.996, filter: "blur(8px)" }}
        transition={{ duration: 0.44, ease: EASE }}
        style={{ transformOrigin: "50% 30%" }}
      >
        <motion.div
          className="page-veil"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.62, ease: EASE }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
