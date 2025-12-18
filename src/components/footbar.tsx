// src/components/PageFooterBar.tsx
import { Link } from "react-router-dom";
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.webp";
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.webp";
import twitterIcon from "../assets/twitter.png";

type Props = {
  backLabel?: string;
  backTo?: string;
};

const PageFooterBar: React.FC<Props> = ({
  backLabel = "Go Back Home",
  backTo = "/",
}) => (
  <div className="page-footer-bar">
    <Link to={backTo} className="contact-back">
      <span>{backLabel}</span>
      <span className="contact-back-arrow">→</span>
    </Link>

    <div className="contact-social-row">
      <a href="mailto:aqd13@txstate.edu" target="_blank" rel="noreferrer">
        <img src={emailIcon} alt="Email" />
      </a>
      <a
        href="https://www.linkedin.com/in/aviyandhital"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/aviyannn"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://www.instagram.com/aviyan__"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a
        href="https://twitter.com/AviYawns"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitterIcon} alt="Twitter" />
      </a>
    </div>
  </div>
);

export default PageFooterBar;
