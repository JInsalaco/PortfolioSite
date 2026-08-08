// Adds custom matchers for asserting on DOM nodes, wired up for Vitest's
// `expect`. Allows things like:
//   expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';
