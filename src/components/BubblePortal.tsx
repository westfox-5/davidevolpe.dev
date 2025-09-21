"use client"

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface BubblePortalProps {
  children: React.ReactNode;
}

export default function BubblePortal({ children }: BubblePortalProps) {

  const elRef = useRef<HTMLElement | null>(null);
  const [, forceRender] = useState({});

  useEffect(() => {
    if (!elRef.current) {
      const el = document.createElement("div");
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = "0";
      el.style.width = "100vw";
      el.style.height = "100%";
      el.style.minHeight = "100vh";
      el.style.pointerEvents = "none";
      el.style.zIndex = "0";
      document.body.appendChild(el);
      elRef.current = el;
      forceRender({}); // forza un re-render
      return () => {
        document.body.removeChild(el);
      };
    }
  }, []);

  if (!elRef.current) return null;
  return createPortal(children, elRef.current);
}
