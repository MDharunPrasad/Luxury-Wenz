/// <reference types="react/next" />
/// <reference types="react-dom/next" />

// This file is required for Vite + React + TypeScript to work properly
// It ensures that TypeScript is aware of the JSX namespace and React types

// Import React types
import 'react';

// Extend the Window interface if you need to add custom properties to the global window object
declare global {
  interface Window {
    // Add any custom window properties here
  }
}

// This is needed for CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// This is needed for image imports
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
