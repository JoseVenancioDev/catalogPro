import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouteAsRouter } from './router';
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteAsRouter />
  </StrictMode>
);
