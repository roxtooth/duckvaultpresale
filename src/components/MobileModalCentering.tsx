// src/components/MobileModalCentering.tsx
"use client";

import { useEffect, useState } from "react";

/**
 * This component injects CSS to center the Reown/WalletConnect modal
 * in the viewport on mobile devices.
 */
export default function MobileModalCentering() {
  const [styleInjected, setStyleInjected] = useState(false);

  useEffect(() => {
    function injectMobileModalStyles() {
      if (window.innerWidth <= 640 && !styleInjected) {
        const style = document.createElement("style");
        style.id = "modal-mobile-centering";
        style.innerHTML = `
          /* Lock body scrolling when modal is open */
          body.modal-open {
            overflow: hidden !important;
            height: 100vh !important;
          }
          /* Center the modal container */
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
          /* Style the modal backdrop */
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
        setStyleInjected(true);
      }
    }

    injectMobileModalStyles();
    window.addEventListener("resize", injectMobileModalStyles);
    return () => {
      window.removeEventListener("resize", injectMobileModalStyles);
      const existing = document.getElementById("modal-mobile-centering");
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, [styleInjected]);

  return null;
}
