import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/Button/Button";
import "./enrollment-form.scss";

export default function EnrollmentForm() {
  return (
    <section className="enrollment-form-section">
      <div className="container">
        <h2 className="section-title">GARANTA A SUA VAGA</h2>

        <p className="section-description">
          Preencha o formulário abaixo para participar da formação Master
          Front-End Development.
        </p>

        <form className="enrollment-form">
          <div className="form-group">
            <label>Nome Completo</label>
            <input type="text" placeholder="Digite o seu nome" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Digite o seu email" />
          </div>

          <div className="form-group">
            <label>Número de Telefone</label>
            <input type="tel" placeholder="Número de Telefone" />
          </div>

          <div className="form-group">
            <label>Porque deseja participar desta formação?</label>

            <textarea
              rows={6}
              placeholder="Porque deseja participar desta formação?"
            />
          </div>

          <Button
            leftElement={
              <HugeiconsIcon
                icon={ArrowUpRight03Icon}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
              />
            }
            type="submit"
            className="submit-button"
          >
            LET'S GO
          </Button>
        </form>
      </div>
    </section>
  );
}
