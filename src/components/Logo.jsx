import { LOGO_PATH, LOGO_TRANSFORM, LOGO_VIEWBOX } from "../assets/logo";

/**
 * Loqo — fotoqrafın imzası.
 * Rəngi `currentColor`-dur: qoyulduğu yerin mətn rəngini alır,
 * ona görə həm yaşıl, həm də qara temalı səhifələrdə düzgün görünür.
 */
export default function Logo({ height = 34, className = "", title = "Loqo", style }) {
  return (
    <svg
      className={`brand-logo ${className}`}
      viewBox={LOGO_VIEWBOX}
      role="img"
      aria-label={title}
      focusable="false"
      style={{ height, width: "auto", display: "block", ...style }}
    >
      <g transform={LOGO_TRANSFORM} fill="currentColor" stroke="none">
        <path d={LOGO_PATH} />
      </g>
    </svg>
  );
}
