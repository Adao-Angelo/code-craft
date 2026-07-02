import { useGSAP } from "@gsap/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";

import Lenis from "lenis";

import AOS from "aos";
import "aos/dist/aos.css";
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
import GridPattern from "./components/ui/GridPattern/GridPattern";
import Header from "./components/ui/Header";
import { techs } from "./constants/techs";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
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
          end: () => "+=" + window.innerHeight * 4,
          pin: true,
          scrub: true,
        },
      });

      timeline.from(split.chars, {
        y: 70,
        opacity: 0,
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
          start: "top -28%+=200",
          end: "+=200%",
          scrub: 1,
          pin: ".mask-image-container",
          anticipatePin: 1,
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
          y: 70,
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

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <div className="page-content" ref={scopeRef}>
        <div>
          <section id="hero">
            <Header />
            <div className="container">
              <div className="hero-date-session">
                <span>A primeira sessão começa no dia 10 de Julho, 2026</span>
                <Image src="/logo.svg" alt="logo"></Image>
              </div>
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
                  <a href="#content-section">
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
                  </a>
                  <a href="#price-section">
                    <Button variant="secondary">Garanta sua vaga</Button>
                  </a>
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
          <section id="content-section" className="gsap-full-section">
            <div className="gsap-content">
              <div className="container">
                <h2 className="section-title gsap-content__title">
                  O QUE IRÁ APRENDER
                </h2>
                <p className="section-description  gsap-content__text">
                  Aprenda através da prática, construindo projetos reais
                  enquanto desenvolve competências em HTML, CSS, JavaScript,
                  design responsivo, ferramentas modernas e boas práticas de
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
        </div>

        <CourseJourney />

        <section className="mask-section">
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
        <EnrollmentSection />
        <EnrollmentForm />
      </div>

      <div className="footer-spacer" />

      <footer className="footer">
        <div className="footer-grid-bg">
          <GridPattern
            width={40}
            height={40}
            squares={[
              [1, 1],
              [3, 2],
              [5, 4],
            ]}
          />
        </div>

        <div className="footer-content">
          <div className="footer-info">
            <Logo />
            <div className="footer-google-meet-section">
              <Image src="/google-meet-logo.png" />
              <span>GOOGLE MEET</span>
            </div>
            <div className="footer-google-meet-section">
              <span>947 636 149</span>
            </div>
            <Image className="float-box" src="/start.svg" />
          </div>

          <div className="footer-code-area">
            <Image src="/logo.svg" />
            <span>Code Craft</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
