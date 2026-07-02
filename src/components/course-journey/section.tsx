import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { journeyData } from "../../constants/journey-data";
import { JourneyCard } from "../journey-card/journey-card";
import "./courseJourney.scss";

gsap.registerPlugin(ScrollTrigger);

export default function CourseJourney() {
  const scopeRef = useRef(null);

  return (
    <section
      id="schedule-section"
      ref={scopeRef}
      className="section section-your-journey"
    >
      <div className="container">
        <h2 className="section-title your-journey-title gsap-journey-title">
          SUA JORNADA EM 8 SEMANAS
        </h2>
        <p
          data-aos="fade-up"
          className="your-journey-description gsap-journey-description"
        >
          Aprenda os fundamentos do desenvolvimento web através da prática.
          Durante 8 semanas, você dominará HTML, CSS e JavaScript enquanto
          desenvolve projetos reais que fortalecem suas competências e ajudam a
          construir um portfólio sólido.
        </p>
        <div className="journey-cards">
          {journeyData.map((item) => (
            <div
              className="gsap-journey-card"
              data-aos="fade-up"
              key={item.title}
            >
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
