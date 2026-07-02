import { Clock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { useCountdown } from "../../../hooks/use-countdown";
import Logo from "../../Logo";
import { Button } from "../Button/Button";
import "./header.scss";

export default function Header() {
  const { days, hours, minutes, seconds } = useCountdown("2026-09-30T00:00:00");

  return (
    <header>
      <div className="container">
        <Logo></Logo>
        <menu>
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
        <div>
          <Button
            variant="primary"
            leftElement={
              <HugeiconsIcon
                icon={Clock01Icon}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
              />
            }
          >
            <span>{`${days}:${hours}:${minutes}:${seconds}`}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
