// src/components/ModalMobileCentering.tsx
"use client";

import { useEffect, useState } from "react";

/**
 * This component injects CSS to center the Reown/WalletConnect modal
 * in the *viewport* on mobile, preventing page scrolling behind it.
 */
export default function ModalMobileCentering() {
  const [styleInjected, setStyleInjected] = useState(false);

  useEffect(() => {
    function injectMobileModalStyles() {
      // Check if the viewport is small (mobile)
      if (window.innerWidth <= 640 && !styleInjected) {
        const style = document.createElement("style");
        style.id = "modal-mobile-centering";
        style.innerHTML = `
          /* 
            1) Force the body to not scroll when the modal is open
            2) Position the modal container at the center of the screen 
          */
          
          body.modal-open {
            overflow: hidden !important;
            height: 100vh !important;
          }

          /* Inspect your DOM to confirm these are the correct selectors */
          [data-reown-modal],
          [data-w3m-modal],
          .reown-modal,
          .w3m-modal,
          .reown-modal__container,
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

          /* The backdrop that darkens the background */
          [data-reown-modal-backdrop],
          [data-w3m-modal-backdrop],
          .reown-modal__backdrop,
          .w3m-modal__backdrop {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: rgba(0,0,0,0.6) !important;
            z-index: 9999 !important;
          }
        `;
        document.head.appendChild(style);
        setStyleInjected(true);
      }
    }

    injectMobileModalStyles();

    // If user resizes or changes orientation, we can re-check
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
