import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "Core/app";

const container = document.getElementById("target");
const root = createRoot(container as Element);
root.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>
);
