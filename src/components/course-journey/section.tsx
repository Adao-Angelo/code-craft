import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { journeyData } from "../../constants/journey-data";
import { JourneyCard } from "../journey-card/journey-card";
import FloatLogo from "../ui/Float-logo";
import "./courseJourney.scss";

gsap.registerPlugin(ScrollTrigger);

export default function CourseJourney() {
  const scopeRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-your-journey",
          start: "top 70%",
          end: "+=500",
        },
      });

      tl.from(".gsap-journey-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(".gsap-journey-description", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.from(".gsap-journey-card", {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    },
    { scope: scopeRef },
  );
  return (
    <section ref={scopeRef} className="section section-your-journey">
      <FloatLogo></FloatLogo>
      <div className="container">
        <h2 className="section-title your-journey-title gsap-journey-title">
          SUA JORNADA EM 8 SEMANAS
        </h2>
        <p className="your-journey-description gsap-journey-description">
          Aprenda os fundamentos do desenvolvimento web através da prática.
          Durante 8 semanas, você dominará HTML, CSS e JavaScript enquanto
          desenvolve projetos reais que fortalecem suas competências e ajudam a
          construir um portfólio sólido.
        </p>
        <div className="journey-cards">
          {journeyData.map((item) => (
            <div className="gsap-journey-card" key={item.title}>
              <JourneyCard
                weeks={item.weeks}
                title={item.title}
                description={item.description}
                topics={item.topics}
                accentColor={item.accentColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
