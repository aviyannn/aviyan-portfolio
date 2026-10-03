import React, { useEffect, useState } from "react";
import { profile } from "../data";
import { copyEmail } from "../toast";
import Icon from "./Icon";

// Floating contact pill. Shows after the hero and steps aside while the
// "Work with me" card is on screen, so only one contact prompt is visible.
const SayHi: React.FC = () => {
  const [pastHero, setPastHero] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const card = document.getElementById("contact");
    const observer = card
      ? new IntersectionObserver(([entry]) => setCardVisible(entry.isIntersecting))
      : null;
    if (card) observer?.observe(card);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const shown = pastHero && !cardVisible;

  return (
    <div className={`say-hi${shown ? " shown" : ""}`} aria-hidden={!shown}>
      <a href={`mailto:${profile.email}`} className="say-hi-main" tabIndex={shown ? 0 : -1}>
        <span className="status-dot" />
        Open to internships
        <span className="say-hi-sep" aria-hidden="true" />
        Say hi <Icon name="external" size={11} />
      </a>
      <button
        className="say-hi-copy"
        onClick={() => copyEmail(profile.email)}
        aria-label="Copy email address"
        title="Copy email"
        tabIndex={shown ? 0 : -1}
      >
        <Icon name="copy" size={13} />
      </button>
    </div>
  );
};

export default SayHi;
