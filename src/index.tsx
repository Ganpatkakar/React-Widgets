import * as React from 'react';
import { createRoot } from "react-dom/client";

import App from './App';

const node: Element | DocumentFragment = document.getElementById("root")!;
const root = createRoot(node);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);