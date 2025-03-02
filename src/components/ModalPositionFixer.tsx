// src/components/ModalPositionFixer.tsx
"use client";

import { useEffect } from "react";

/**
 * ModalPositionFixer observes the DOM for any newly added nodes matching
 * known Reown (or WalletConnect) modal selectors, and forces them to be centered
 * in the viewport using inline styles.
 */
export default function ModalPositionFixer() {
  useEffect(() => {
    // Define selectors that match the modal container elements.
    // Adjust these selectors after inspecting your modal's actual DOM.
    const targetSelector =
      "[data-reown-modal], [data-w3m-modal], .reown-modal, .w3m-modal, .reown-modal__container, .w3m-modal__container";

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement && node.matches(targetSelector)) {
            // Apply inline styles to center the modal relative to the viewport
            node.style.position = "fixed";
            node.style.top = "50vh";
            node.style.left = "50vw";
            node.style.transform = "translate(-50%, -50%)";
            node.style.width = "90vw";
            node.style.maxHeight = "90vh";
            node.style.overflowY = "auto";
            node.style.zIndex = "10000";
          }
        });
      });
    });

    // Observe the entire document body for added nodes
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
