import { useCountdown } from "../../../hooks/use-countdown";
import "./timer.scss";

export default function Timer() {
  const { days, hours, minutes, seconds } = useCountdown("2026-07-10T00:00:00");
  return (
    <div className="countdown">
      <div className="time-box">
        <span className="time-value">{days}</span>
        <span className="time-label">Dias</span>
      </div>

      <div className="time-box">
        <span className="time-value">{hours}</span>
        <span className="time-label">Horas</span>
      </div>

      <div className="time-box">
        <span className="time-value">{minutes}</span>
        <span className="time-label">Minutos</span>
      </div>

      <div className="time-box">
        <span className="time-value">{seconds}</span>
        <span className="time-label">Segundos</span>
      </div>
    </div>
  );
}
