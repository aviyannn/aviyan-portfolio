import React from "react";
import avatar from "../assets/aviyan.jpeg";
import Icon from "../components/Icon";
import { profile } from "../data";
import { HOME_ZONE, timeIn, useNow } from "../time";
import { copyEmail } from "../toast";

// A note that changes with the time of day in San Marcos.
const availability = (hour: number) => {
  if (hour < 7) return { emoji: "🌙", note: "I'm probably asleep, but I'll get back to you." };
  if (hour < 18) return { emoji: "☀️", note: "I'm around, so this is a good time to say hi." };
  return { emoji: "🌆", note: "It's evening here, and I'll reply soon." };
};

const Contact: React.FC = () => {
  const now = useNow();
  const { time, hour } = timeIn(HOME_ZONE, now);
  const { emoji, note } = availability(hour);

  return (
    <section id="contact" className="section">
      <div className="card cta">
        <div className="cta-top">
          <img src={avatar} alt="" className="cta-avatar" />
          <span className="status">
            <span className="status-dot" /> Open to internships
          </span>
        </div>

        <h3 className="cta-title">Let's build something together.</h3>
        <p className="cta-body">
          Internships, research collaborations, or a fun project in data, machine learning, or
          software. My inbox is open.
        </p>

        <div className="cta-actions">
          <a href={`mailto:${profile.email}`} className="btn-dark">
            Send me a note <Icon name="arrow" size={13} className="nudge" />
          </a>
          <button
            className="email-chip"
            onClick={() => copyEmail(profile.email)}
            title="Copy email"
          >
            <span>{profile.email}</span>
            <Icon name="copy" size={13} />
            <span className="sr-only">Copy email address</span>
          </button>
        </div>

        <p className="cta-time muted">
          <span aria-hidden="true">{emoji}</span>
          <span>
            It's <span className="tabular">{time}</span> in San Marcos. {note}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
