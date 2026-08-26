export default function Marquee({ items, speed = 26 }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track css-marquee" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="logo-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
