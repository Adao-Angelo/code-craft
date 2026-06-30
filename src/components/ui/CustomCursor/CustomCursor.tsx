import { useEffect, useRef } from "react";
import { Image } from "../../Image/image";
import "./CustomCursor.scss";

export default function CustomCursor() {
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
    <div ref={wrapperRef} className="cursor-wrapper">
      <Image src="/cursor.svg" className="" />
      <span className="cursor-label">Let’s gooooooooo</span>
    </div>
  );
}
