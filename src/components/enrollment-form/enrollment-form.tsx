import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/Button/Button";
import "./enrollment-form.scss";

export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdMka4Pudsl2Gy7tgWeHO49w68Dyt2CtLiKubmevnWK_8gSzg/viewform";

const steps = [
  {
    number: "01",
    title: "CLIQUE EM LET'S GO",
    description:
      "CLIQUE NO BOTÃO ABAIXO PARA ABRIR O FORMULÁRIO OFICIAL DE INSCRIÇÃO NO GOOGLE FORMS.",
  },
  {
    number: "02",
    title: "PREENCHA A SUA INSCRIÇÃO",
    description:
      "COMPLETE O FORMULÁRIO COM OS SEUS DADOS E ENVIE A CANDIDATURA PARA PARTICIPAR DA FORMAÇÃO.",
  },
  {
    number: "03",
    title: "AGUARDE A CONFIRMAÇÃO",
    description:
      "APÓS O ENVIO, A NOSSA EQUIPA IRÁ ANALISAR A INSCRIÇÃO E ENTRAR EM CONTACTO CONSIGO ATRAVÉS DO EMAIL OU TELEFONE INFORMADO.",
  },
];

export default function EnrollmentForm() {
  return (
    <section className="enrollment-form-section" id="price-section">
      <div className="container">
        <h2 className="section-title">GARANTA A SUA VAGA</h2>
        <p className="section-description">
          O processo de inscrição é simples e leva menos de 2 minutos.
        </p>

        <div data-aos="zoom-in-up" className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <a target="_blank" rel="noopener noreferrer" href={GOOGLE_FORM_URL}>
          <Button
            leftElement={
              <HugeiconsIcon
                icon={ArrowUpRight03Icon}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
              />
            }
            className="submit-button"
          >
            LET'S GO
          </Button>
        </a>
      </div>
    </section>
  );
}
