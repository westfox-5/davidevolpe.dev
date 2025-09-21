"use client"

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface BubblePortalProps {
  children: React.ReactNode;
}

export default function BubblePortal({ children }: BubblePortalProps) {
  const elRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!elRef.current) {
      const el = document.createElement("div");
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = "0";
      el.style.width = "100vw";
      el.style.height = "100vh";
      el.style.pointerEvents = "none";
      el.style.zIndex = "0";
      document.body.appendChild(el);
      elRef.current = el;
      return () => {
        document.body.removeChild(el);
      };
    }
  }, []);

  if (!elRef.current) return null;
  return createPortal(children, elRef.current);
}
