// src/components/MobileModalOverrides.tsx
"use client";

import { useEffect } from "react";

export default function MobileModalOverrides() {
  useEffect(() => {
    // Check if the viewport is small (mobile)
    if (window.innerWidth <= 640) {
      const style = document.createElement("style");
      style.id = "mobile-modal-overrides";
      style.innerHTML = `
        /* Override modal container styles on mobile */
        [data-reown-modal],
        [data-reown-modal-container],
        [data-w3m-modal],
        [data-w3m-modal-container],
        .reown-modal,
        .reown-modal__container,
        .w3m-modal,
        .w3m-modal__container {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 90vw !important;
          max-height: 90vh !important;
          overflow-y: auto !important;
          z-index: 10000 !important;
        }
        /* Override modal backdrop styles on mobile */
        [data-reown-modal-backdrop],
        [data-w3m-modal-backdrop],
        .reown-modal__backdrop,
        .w3m-modal__backdrop {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          background: rgba(0, 0, 0, 0.6) !important;
          z-index: 9999 !important;
        }
      `;
      document.head.appendChild(style);
      return () => {
        const existingStyle = document.getElementById("mobile-modal-overrides");
        if (existingStyle) {
          document.head.removeChild(existingStyle);
        }
      };
    }
  }, []);

  return null; // This component doesn't render anything visible.
}
