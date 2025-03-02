// src/components/MobileModalOverrides.tsx
"use client";

import { useEffect } from "react";

export default function MobileModalOverrides() {
  useEffect(() => {
    // Only run on mobile devices (viewport width 640px or less)
    if (window.innerWidth <= 640) {
      const style = document.createElement("style");
      style.id = "mobile-modal-overrides";
      style.innerHTML = `
        /* Target modal containers that Reown AppKit might use.
           Adjust these selectors after inspecting your modal’s HTML structure on mobile. */
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
          width: 95vw !important;
          max-height: 90vh !important;
          overflow-y: auto !important;
          z-index: 10000 !important;
        }
        /* Ensure the backdrop covers the full viewport */
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
        const existing = document.getElementById("mobile-modal-overrides");
        if (existing) {
          document.head.removeChild(existing);
        }
      };
    }
  }, []);
  return null;
}
