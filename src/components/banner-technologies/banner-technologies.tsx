import "./banner-technologies.scss";

export default function BannerTechnologies() {
  return (
    <div className="banner-technologies">
      <div className="marquee-track">
        <div className="marquee-content">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>DESIGN</span>
          <span>RESPONSIVE</span>
          <span>FIGMA</span>
          <span>UI/UX</span>
          <span>REACT</span>
        </div>
        <div className="marquee-content" aria-hidden="true">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>DESIGN</span>
          <span>RESPONSIVE</span>
          <span>FIGMA</span>
          <span>UI/UX</span>
          <span>REACT</span>
        </div>
      </div>
    </div>
  );
}
