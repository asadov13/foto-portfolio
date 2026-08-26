import { useEffect, useRef, useState } from "react";

export default function Typewriter({
  lines,
  className = "",
  opacities,
  charDelay = 42,
  lineDelay = 260,
  startDelay = 250,
}) {
  const [display, setDisplay] = useState(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);
  const [finished, setFinished] = useState(false);
  const reduceMotionRef = useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotionRef.current) {
      setDisplay(lines);
      setFinished(true);
      return undefined;
    }

    let cancelled = false;
    const timeouts = [];
    const schedule = (fn, delay) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      timeouts.push(id);
    };

    const typeLine = (li, ci) => {
      if (li >= lines.length) {
        setFinished(true);
        return;
      }
      const line = lines[li];
      setActiveLine(li);
      setDisplay((prev) => {
        const next = [...prev];
        next[li] = line.slice(0, ci);
        return next;
      });
      if (ci < line.length) {
        schedule(() => typeLine(li, ci + 1), charDelay);
      } else {
        schedule(() => typeLine(li + 1, 0), lineDelay);
      }
    };

    schedule(() => typeLine(0, 0), startDelay);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [lines, charDelay, lineDelay, startDelay]);

  return (
    <div className={className}>
      {lines.map((line, li) => (
        <h1 key={li} style={{ opacity: opacities ? opacities[li] : 1 }}>
          {display[li]}
          {!finished && li === activeLine && <span className="type-cursor" aria-hidden="true" />}
        </h1>
      ))}
    </div>
  );
}
