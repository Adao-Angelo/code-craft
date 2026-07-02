import type { ReactNode } from "react";
import "./tech-card.scss";

type TechCardProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  variant?: "default" | "outlined";
};

export function TechCard({
  icon,
  title,
  description,
  variant = "default",
}: TechCardProps) {
  return (
    <div className={`tech-card tech-card--${variant}`}>
      <div className="tech-card__header">
        {icon && <div className="tech-card__icon">{icon}</div>}
        <span className="tech-card__title">{title}</span>
      </div>

      {description && <p className="tech-card__description">{description}</p>}
    </div>
  );
}
