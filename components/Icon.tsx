/**
 * Inline SVG icon component — replaces Material Symbols font dependency.
 * All icons render deterministically without external font loads.
 */
import React from "react";

const paths: Record<string, string> = {
  precision_manufacturing:
    "M2 22V8l1-1h2V4h4v3h2V4h4v3h2l1 1v14H2Zm2-2h16V9H4v11Zm3-2h2v-3h2v3h2v-5H7v5Zm5-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
  settings_input_component:
    "M8 2v4H4v4H2v4h2v4h4v4h2v-4h4v4h2v-4h4v-4h2v-4h-2V6h-4V2h-2v4h-4V2H8Zm-2 6h12v8H6V8Z",
  data_exploration:
    "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm-1-13h2v5.4l3.5 2.1-.9 1.5L11 13V7Z",
  code: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z",
  smart_toy:
    "M20 9V7a2 2 0 0 0-2-2h-3a2 2 0 0 0-4 0H9a2 2 0 0 0-2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0 0-4ZM9 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
  mail: "M2 4h20v16H2V4Zm2 2v1.5l8 5 8-5V6H4Zm0 4v8h16v-8l-8 5-8-5Z",
  check_circle:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 14.1-3.6-3.6 1.4-1.4 2.2 2.2 5.6-5.6 1.4 1.4-7 7Z",
  cancel:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm5 13.6L15.6 17 12 13.4 8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4l-3.6 3.6L17 15.6Z",
  verified:
    "m23 12-2.4-2.8.3-3.7-3.6-.8-1.9-3.2L12 3 8.6 1.5 6.7 4.7l-3.6.8.3 3.7L1 12l2.4 2.8-.3 3.7 3.6.8 1.9 3.2L12 21l3.4 1.5 1.9-3.2 3.6-.8-.3-3.7L23 12Zm-12.5 5.1-4.2-4.2 1.4-1.4 2.8 2.8 6.3-6.3 1.4 1.4-7.7 7.7Z",
  location_on:
    "M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
  schedule:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7V7Z",
  schema:
    "M14 9V3h6v6h-6Zm2-4v2h2V5h-2ZM4 21v-6h6v6H4Zm2-4v2h2v-2H6Zm8 4v-6h6v6h-6Zm2-4v2h2v-2h-2ZM4 9V3h6v6H4Zm2-4v2h2V5H6Zm5 3h2v4h-2V8Zm0 6h2v2h-2v-2Zm-4-2h2v2H7v-2Z",
  security:
    "M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4Zm0 10.9h7c-.5 4.1-3.3 7.8-7 8.9V12H5V6.3l7-3.1v8.7Z",
  arrow_forward: "M12 4l-1.4 1.4L16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8-8-8Z",
  expand_more: "M16.6 8.6 12 13.2 7.4 8.6 6 10l6 6 6-6-1.4-1.4Z",
  analytics:
    "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM9 17H7v-7h2v7Zm4 0h-2V7h2v10Zm4 0h-2v-4h2v4Z",
  visibility:
    "M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5ZM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  groups:
    "M12 12.75c-2.67 0-8 1.34-8 4v1.25h16v-1.25c0-2.66-5.33-4-8-4Zm-6 3.25c.22-.72 3.31-2 6-2s5.78 1.28 6 2H6ZM12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 5.75c1.47.83 2.5 2 2.5 3.5v1.75h2.5v-1.25c0-2-2.83-3.37-5-4Zm-1-1.25a3.5 3.5 0 0 0 0-7c-.53 0-1.03.12-1.48.33a5.47 5.47 0 0 1 0 6.34c.45.21.95.33 1.48.33ZM5 14.5c-2.17.63-5 2-5 4v1.5h2.5v-1.75c0-1.5 1.03-2.67 2.5-3.5-.45-.21-.95-.33-1.48-.33a3.5 3.5 0 0 1-1.48-6.67A5.47 5.47 0 0 0 5 10.5Z",
  trending_up:
    "m16 6 2.3 2.3-4.9 4.9-4-4L2 16.6 3.4 18l6-6 4 4 6.3-6.3L22 12V6h-6Z",
  lightbulb:
    "M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2ZM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1Zm3-17a5 5 0 0 1 3 9l-1 .7V16h-4v-2.3L9 13a5 5 0 0 1 3-9Z",
  handshake:
    "M12.2 9l2-2 4.5 4.5-1.3 1.3-.7-.7-2.8 2.8-.7-.7 2.8-2.8-.7-.7-2.8 2.8-.7-.7 2.8-2.8L12.2 9ZM2 7.5l5-5 3.1 3.1-5 5L2 7.5Zm11.8 7.4L11 17.8l-4.5-4.5 2.9-2.9-3.1-3.1L2 11.5l6.3 6.3 5.5-5.5v2.6Zm4.9-.6-3.5 3.5L18.5 22l3.5-3.5-3.3-3.6Z",
  search:
    "M15.5 14h-.8l-.3-.3A6.5 6.5 0 1 0 13 15.2l.3.3v.8l5 5 1.5-1.5-5-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z",
  campaign:
    "M18 11v2h4v-2h-4Zm-2 6.5v2c1.5.8 3.1 1.3 4 1.5v-2c-.9-.2-2.5-.7-4-1.5ZM20 4c-.9.2-2.5.7-4 1.5v2c1.5-.8 3.1-1.3 4-1.5V4ZM4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v4h2v-4h1l5 3V6L8 9H4Zm9 3a3 3 0 0 0 0-6v6Zm0 2v-2a5 5 0 0 0 0-8v-2a7 7 0 0 1 0 12Z",
};

export interface IconProps {
  /** Material Symbols icon name */
  name: string;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  label?: string;
}

export function Icon({ name, className = "", label }: IconProps) {
  const d = paths[name];
  if (!d) {
    // Fallback: render nothing rather than a broken text token
    if (process.env.NODE_ENV === "development") {
      console.warn(`[Icon] Missing SVG path for "${name}"`);
    }
    return null;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`inline-block shrink-0 ${className}`}
      width="1em"
      height="1em"
      aria-hidden={!label}
      aria-label={label}
      role={label ? "img" : "presentation"}
    >
      <path d={d} />
    </svg>
  );
}
