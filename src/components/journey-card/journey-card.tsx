import { Calendar05Icon, CheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import "./journey-card.scss";

interface JourneyCardProps {
  weeks: string;
  title: string;
  description: string;
  topics: string[];
  accentColor: string;
}

export function JourneyCard({
  weeks,
  title,
  description,
  topics,
  accentColor,
}: JourneyCardProps) {
  return (
    <article
      className="journey-card"
      style={
        {
          "--accent-color": accentColor,
        } as React.CSSProperties
      }
    >
      <div className="journey-card__header">
        <div className="journey-card__badge">
          <HugeiconsIcon
            icon={Calendar05Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
          <p>{weeks}</p>
        </div>
      </div>

      <div className="journey-card__content">
        <h3>{title}</h3>

        <div className="journey-card__line" />

        <p className="journey-card__description">{description}</p>

        <ul>
          {topics.map((topic) => (
            <li key={topic}>
              <div className="check">
                <HugeiconsIcon
                  icon={CheckIcon}
                  size={24}
                  color="currentColor"
                  strokeWidth={1.5}
                />
              </div>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
