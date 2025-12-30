export function CornerMask() {
  return (
    <>
      {/* Left Corner Mask */}
      <div className="absolute bottom-0 left-0 w-[3.5rem] h-[3.5rem] z-50 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="fill-ghost-dark"
        >
          <path d="M0 100 L0 0 Q0 100 100 100 L0 100 Z" />
        </svg>
      </div>

      {/* Right Corner Mask */}
      <div className="absolute bottom-0 right-0 w-[3.5rem] h-[3.5rem] z-50 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="fill-ghost-dark"
        >
          <path d="M100 100 L100 0 Q100 100 0 100 L100 100 Z" />
        </svg>
      </div>
    </>
  );
}







