import { Clock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { useCountdown } from "../../../hooks/use-countdown";
import Logo from "../../Logo";
import { Button } from "../Button/Button";
import "./header.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown("2026-09-30T00:00:00");

  return (
    <header>
      <div className="container">
        <Logo></Logo>
        <menu className={isMenuOpen ? "open" : ""}>
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
            <HugeiconsIcon icon={Cancel01Icon} size={28} />
          </button>

          <ul>
            <li>
              <a href="#">Conteúdo</a>
            </li>
            <li>
              <a href="#">Cronograma</a>
            </li>
            <li>
              <a href="#">Preço</a>
            </li>
          </ul>
        </menu>

        <div className="header-actions">
          <Button
            variant="primary"
            leftElement={
              <HugeiconsIcon
                icon={Clock01Icon}
                size={24}
                color="currentColor"
              />
            }
          >
            <span>{`${days}:${hours}:${minutes}:${seconds}`}</span>
          </Button>

          <button className="menu-button" onClick={() => setIsMenuOpen(true)}>
            <HugeiconsIcon icon={Menu01Icon} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
