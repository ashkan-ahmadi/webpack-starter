// If TypeScript complains about importing .scss
// Create a file like this:
// src/global.d.ts
// Add:
// declare module '*.scss'
// That tells TypeScript that SCSS imports are valid.

declare module '*.scss'
