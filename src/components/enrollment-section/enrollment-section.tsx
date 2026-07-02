import { useGSAP } from "@gsap/react";
import "./enrollment-section.scss";

import {
  Calendar03Icon,
  OnlineLearning01Icon,
  TimeQuarter02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";

const courseInfo = [
  {
    title: "DATA DE INÍCIO",
    value: "5 DE JULHO DE 2026",
    icon: Calendar03Icon,
  },
  {
    title: "FORMATO",
    value: "ONLINE - GOOGLE MEET",
    icon: OnlineLearning01Icon,
  },
  {
    title: "DURAÇÃO",
    value: "8 SEMANAS · 2 HORAS POR DIA",
    icon: TimeQuarter02Icon,
  },
];

export function EnrollmentSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".enrollment-section",
        start: "top 70%",
      },
    });

    tl.from(".enrollment-title", {
      y: 50,
      opacity: 0,
    });

    tl.from(".price", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
    });

    tl.from(".detail-card", {
      y: 80,
      opacity: 0,
      stagger: 0.15,
    });
  });
  return (
    <section className="enrollment-section">
      <div>
        <div className="container">
          <h2 className="section-title enrollment-title">
            PRONTO PARA COMEÇAR A SUA JORNADA?
          </h2>
        </div>

        <div className="price-container">
          <h2 className="price">15.000 Kz</h2>
        </div>

        <div className="container">
          <div className="course-details">
            {courseInfo.map((item) => (
              <div className="detail-card" key={item.title}>
                <div className="icon-box">
                  <HugeiconsIcon icon={item.icon} size={24} />
                </div>

                <div>
                  <span>{item.title}</span>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
