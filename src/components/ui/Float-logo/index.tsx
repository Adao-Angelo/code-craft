import { useEffect, useRef } from "react";
import Logo from "../../Logo";

export default function FloatLogo() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const moveCursor = (e: MouseEvent) => {
      if (!wrapper) return;
      wrapper.style.left = e.clientX + "px";
      wrapper.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="float-logo">
      <Logo></Logo>
    </div>
  );
}
