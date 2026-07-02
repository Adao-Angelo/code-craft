import {
  ArrowUp01Icon,
  Cancel01Icon,
  Clock01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";
import { useCountdown } from "../../../hooks/use-countdown";
import Logo from "../../Logo";
import { Button } from "../Button/Button";
import "./header.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { days, hours, minutes, seconds } = useCountdown("2026-07-10T00:00:00");

  const targetDate = new Date("2026-07-10T00:00:00").getTime();
  const now = new Date().getTime();
  const isExpired = now >= targetDate;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      const clickedMenu = menuRef.current?.contains(target);
      const clickedButton = buttonRef.current?.contains(target);

      if (!clickedMenu && !clickedButton) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header>
      <BackToTopButton />
      <div className="container">
        <Logo></Logo>
        <menu ref={menuRef} className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <a href="#content-section" onClick={() => setIsMenuOpen(false)}>
                Conteúdo
              </a>
            </li>

            <li>
              <a href="#schedule-section" onClick={() => setIsMenuOpen(false)}>
                Cronograma
              </a>
            </li>

            <li>
              <a href="#price-section" onClick={() => setIsMenuOpen(false)}>
                Preço
              </a>
            </li>
          </ul>
        </menu>

        <div className="header-actions">
          {!isExpired && (
            <Button
              className="timer-button"
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
          )}

          <button
            ref={buttonRef}
            className={`menu-button ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HugeiconsIcon
              icon={isMenuOpen ? Cancel01Icon : Menu01Icon}
              size={24}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      leftElement={<HugeiconsIcon icon={ArrowUp01Icon} size={20} />}
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <span>Back to top</span>
    </Button>
  );
}
