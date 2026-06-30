import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import "./App.scss";
import BannerTechnologies from "./components/banner-technologies/banner-technologies";
import { Image } from "./components/Image/image";
import { Button } from "./components/ui/Button/Button";
import Header from "./components/ui/Header";

function App() {
  return (
    <>
      <section id="hero">
        <Header />
        <div className="hero-date-session">
          <span>A primeira sessão começa no dia 30 de Junho, 2026</span>
          <Image src="/logo.svg" alt="logo"></Image>
        </div>

        <div className="hero-content-container">
          <div className="container">
            <div className="hero-content">
              <h1 className="masterclass">MASTERCLASS</h1>
              <h1 className="frontend">FRONTEND</h1>
              <h1 className="development">DEVELOPMENT</h1>
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
          <Image className="hero-girl-image" src="/hero-girl.png"></Image>

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
      <section id="content-section" className="section">
        <div className="container">
          <h2 className="section-title gsap-fade-up">O QUE IRÁ APRENDER</h2>
          <p className="section-description gsap-fade-up">
            Aprenda através da prática, construindo projetos reais enquanto
            desenvolve competências em HTML, CSS, JavaScript, design responsivo,
            ferramentas modernas e boas práticas de desenvolvimento.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
