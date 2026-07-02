import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Image } from "../Image/image";
import "./setup-mask.scss";

gsap.registerPlugin(ScrollTrigger);
export default function SetupMaskSection() {
  const scopeRef = useRef(null);
  useGSAP(
    () => {
      gsap.set(".mask-image-container", {
        maskSize: "99vw",
        webkitMaskSize: "99vw",
      });

      gsap.set(".greenScreen", {
        opacity: 0,
      });

      gsap.set(".logo-on-mask", {
        x: 0,
        rotation: 0,
      });

      gsap.set(".title-on-mask", {
        opacity: 0,
        x: 120,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mask-container",
          start: "top -20%+=200",
          end: "+=100%",
          scrub: 1,
          pin: ".mask-image-container",
          anticipatePin: 0,
        },
      });

      tl.to(".mask-image-container", {
        maskSize: "12vw",
        webkitMaskSize: "12vw",
        ease: "none",
      })
        .to(".greenScreen", {
          opacity: 1,
          ease: "none",
        })
        .to({}, { duration: 0.2 })
        .to(".mask-image-container", {
          opacity: 0,
          duration: 0.8,
        })
        .to(".logo-on-mask", {
          x: -170,
          rotation: 360,
          duration: 1.2,
          ease: "power3.inOut",
        })
        .fromTo(
          ".title-on-mask",
          {
            x: 80,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "<",
        );
    },
    { scope: scopeRef },
  );

  return (
    <section ref={scopeRef} className="mask-section">
      <div className="mask-container #Container">
        <div className="mask-image-container #Hero">
          <Image src="/mask-background.png" className="mask-image" />

          <div className="greenScreen"></div>
        </div>
        <div className="content-mask">
          <Image src="/logo.svg" className="logo-on-mask" />
          <h1 className="title-on-mask">Code Craft</h1>
        </div>
      </div>
    </section>
  );
}
