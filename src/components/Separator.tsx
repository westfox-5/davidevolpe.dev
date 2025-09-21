"use client";

const Separator = () => (
  <div className="w-full flex justify-center my-12 select-none pointer-events-none">
    <div className="w-full max-w-screen-xl px-6">
      <div className="relative w-full">
        <div className="h-1 w-full bg-[var(--foreground-accent)] rounded-lg opacity-80" style={{filter: 'blur(2px)'}} />
      </div>
    </div>
  </div>
);

export default Separator;
