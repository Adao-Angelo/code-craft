import { useGSAP } from "@gsap/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";

import Lenis from "lenis";

import SplitType from "split-type";
import "./App.scss";
import BannerTechnologies from "./components/banner-technologies/banner-technologies";
import CourseJourney from "./components/course-journey/section";
import EnrollmentForm from "./components/enrollment-form/enrollment-form";
import { EnrollmentSection } from "./components/enrollment-section/enrollment-section";
import { Image } from "./components/Image/image";
import Logo from "./components/Logo";
import { TechCard } from "./components/tech-card/tech-card";
import { Button } from "./components/ui/Button/Button";
import Header from "./components/ui/Header";

gsap.registerPlugin(ScrollTrigger);
const techs = [
  {
    title: "HTML",
    description:
      "Aprende a estrutura fundamental da web com HTML semântico, acessibilidade e boas práticas para construir bases sólidas em qualquer projeto frontend moderno.",
  },
  {
    title: "CSS",
    description:
      "Domina estilização avançada com CSS moderno, incluindo Flexbox, Grid, animações, responsividade e criação de interfaces altamente profissionais.",
  },
  {
    title: "JavaScript",
    description:
      "Entende a linguagem que dá vida à web, explorando DOM, eventos, funções modernas, async/await e manipulação dinâmica de dados.",
  },
  {
    title: "React",
    description:
      "Constrói interfaces modernas e escaláveis com React, componentes reutilizáveis, hooks, estado e arquitetura frontend profissional.",
  },
  {
    title: "GSAP",
    description:
      "Cria animações de alto nível com GSAP, incluindo scroll animations, timelines, interações avançadas e experiências visuais cinematográficas.",
  },
];
function App() {
  const scopeRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".gsap-hero__box", {
        y: 80,
        opacity: 0,
        duration: 1,
      });
      gsap.from(".gsap-hero__frontend", {
        y: 80,
        x: 300,
        opacity: 0,
        duration: 2,
        rotate: 50,
      });

      gsap.from(".gsap-hero__image", {
        y: 80,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".gsap-hero__title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.2,
      });
    },
    { scope: scopeRef },
  );

  useGSAP(
    () => {
      const split = new SplitType(".gsap-content__text", {
        types: "chars,lines",
      });

      const track = document.querySelector(
        ".gsap-tech-track",
      ) as HTMLDivElement;

      const firstCard = document.querySelector(".tech-card") as HTMLElement;

      const centerOffset = window.innerWidth / 2 - firstCard.offsetWidth / 2;
      gsap.set(track, {
        x: centerOffset,
      });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-full-section",
          start: "top top",
          end: () => "+=" + window.innerHeight * 6,
          pin: true,
          scrub: true,
        },
      });

      timeline.from(split.chars, {
        opacity: 0.2,
        stagger: 0.05,
        direction: 1,
      });

      timeline.to(".gsap-content__text", {
        opacity: 0,
        y: -50,
        duration: 1,
      });

      timeline.from(track, {
        y: 120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      timeline.to(track, {
        x: centerOffset - (track.scrollWidth - firstCard.offsetWidth),
        ease: "none",
        duration: 4,
      });

      ScrollTrigger.refresh();

      return () => {
        timeline.kill();
        split.revert();
      };
    },
    { scope: scopeRef },
  );

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div ref={scopeRef}>
      <section id="hero">
        <Header />
        <div className="hero-date-session">
          <span>A primeira sessão começa no dia 30 de Junho, 2026</span>
          <Image src="/logo.svg" alt="logo"></Image>
        </div>

        <div className="hero-content-container">
          <div className="container">
            <div className="hero-content gsap-hero__box">
              <h1 className="masterclass hero-line gsap-hero__title">
                MASTERCLASS
              </h1>
              <h1 className="frontend hero-line gsap-hero__frontend">
                FRONTEND
              </h1>
              <h1 className="development hero-line gsap-hero__title">
                DEVELOPMENT
              </h1>
            </div>
            <div className="call-actions">
              <Button
                leftElement={
                  <HugeiconsIcon
                    icon={ArrowUpRight03Icon}
                    size={24}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                }
              >
                Explorar conteúdo
              </Button>
              <Button variant="secondary">Garanta sua vaga</Button>
            </div>
            <div className="google-meet-section">
              <Image src="/google-meet-logo.png"></Image>
              <span>GOOGLE MEET</span>
            </div>
          </div>
        </div>
        <div className="image-and-illustrations">
          <Image className="logo-image" src="/logo.svg"></Image>
          <Image
            className="hero-girl-image gsap-hero__image"
            src="/hero-girl.png"
          ></Image>

          <div className="price-card">
            <div className="content-frontend-text">
              <Image src="/logo.svg"></Image>
              <p>DEV FRONTEND</p>
            </div>
            <p className="price">12.000kz</p>
          </div>
        </div>
      </section>
      <BannerTechnologies />
      <section className="gsap-full-section">
        <div className="gsap-content">
          <div className="container">
            <h2 className="section-title gsap-content__title">
              O QUE IRÁ APRENDER
            </h2>
            <p className="section-description  gsap-content__text">
              Aprenda através da prática, construindo projetos reais enquanto
              desenvolve competências em HTML, CSS, JavaScript, design
              responsivo, ferramentas modernas e boas práticas de
              desenvolvimento.
            </p>
          </div>
        </div>

        <div className="gsap-tech-track">
          {techs.map((tech, index) => (
            <TechCard
              key={index}
              title={tech.title}
              description={tech.description}
              icon={
                <HugeiconsIcon
                  icon={ArrowUpRight03Icon}
                  size={20}
                  color="currentColor"
                />
              }
            />
          ))}
        </div>
      </section>
      <CourseJourney />

      <section className="section"></section>
      <EnrollmentSection />
      <EnrollmentForm />
      <footer className="footer">
        <div className="footer-info">
          <Logo></Logo>
          <div className="footer-google-meet-section">
            <Image src="/google-meet-logo.png"></Image>
            <span>GOOGLE MEET</span>
          </div>
          <Image className="float-box" src="/start.svg"></Image>
        </div>

        <div className="footer-code-area">
          <Image src="/logo.svg"></Image>
          <span>Code Craft</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
