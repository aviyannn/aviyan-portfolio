import React from "react";
import avatar from "../assets/aviyan.jpeg";
import Icon from "../components/Icon";
import LocalTime from "../components/LocalTime";
import { profile, socials, spotify } from "../data";

const Hero: React.FC = () => (
  <section id="top" className="hero">
    <div className="hero-head">
      <img className="hero-avatar" src={avatar} alt="Aviyan Dhital" />
      <div>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-sub">
          <span>/</span> CS + Applied Math @ Texas State <span>/</span> San Marcos, TX
        </p>
      </div>
    </div>

    <p className="hero-tagline">{profile.tagline}</p>

    <div className="hero-rows">
      <div className="hero-row">
        <span className="eq" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        {profile.onRepeat.song ? (
          <>
            <span className="muted">On repeat</span>
            <span className="muted">—</span>
            <a
              href={profile.onRepeat.href || spotify.profile}
              target="_blank"
              rel="noreferrer"
              className="song-link"
            >
              {profile.onRepeat.song}
            </a>
            {profile.onRepeat.artist && (
              <span className="muted">· {profile.onRepeat.artist}</span>
            )}
          </>
        ) : (
          <>
            <span className="muted">Listening on Spotify</span>
            <span className="muted">—</span>
            <a href={spotify.profile} target="_blank" rel="noreferrer" className="song-link">
              {spotify.username}
            </a>
          </>
        )}
      </div>
      <div className="hero-row">
        <span aria-hidden="true">{profile.currentlyEmoji}</span>
        <span className="muted">{profile.currentlyLabel}</span>
        <span className="muted">—</span>
        <span>{profile.currently}</span>
      </div>
      <div className="hero-row">
        <LocalTime />
      </div>
    </div>

    <div className="pill-row">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          className="pill"
          target={s.href.startsWith("http") || s.icon === "file" ? "_blank" : undefined}
          rel="noreferrer"
        >
          <Icon name={s.icon} size={13} />
          {s.label}
        </a>
      ))}
    </div>
  </section>
);

export default Hero;
