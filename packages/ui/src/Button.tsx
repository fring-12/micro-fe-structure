// packages/ui/src/Button.tsx
"use client"; // Important for components used in App Router

import * as React from "react";

export const SharedButton = () => {
  return (
    <button
      style={{
        backgroundColor: "#0070f3",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={() => alert("Hello from the shared UI package!")}
    >
      Shared Button
    </button>
  );
};
