import { Clock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Logo from "../../Logo";
import { Button } from "../Button/Button";

import "./header.scss";

export default function Header() {
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
            {"01:01:42:00"}
          </Button>
        </div>
      </div>
    </header>
  );
}
