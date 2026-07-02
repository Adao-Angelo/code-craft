import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useFadeUp = (
  selector: string,
  scope?: React.RefObject<HTMLElement | null>,
) => {
  useGSAP(
    () => {
      gsap.from(selector, {
        y: 50,
        opacity: 0.2,
        duration: 1,
      });
    },
    { scope },
  );
};
