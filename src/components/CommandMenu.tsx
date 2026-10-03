import React, { useEffect, useMemo, useRef, useState } from "react";
import { profile, socials } from "../data";
import { toggleTheme } from "../theme";
import { copyEmail } from "../toast";
import Icon from "./Icon";

type Command = {
  id: string;
  group: "Navigate" | "Actions" | "Links";
  label: string;
  icon: string;
  hint?: string;
  run: () => void;
};

const goTo = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const open = (href: string) => () => {
  window.open(href, "_blank", "noopener,noreferrer");
};

const COMMANDS: Command[] = [
  { id: "top", group: "Navigate", label: "Home", icon: "arrow", run: goTo("top") },
  { id: "exp", group: "Navigate", label: "Research & Experience", icon: "briefcase", run: goTo("experience") },
  { id: "builds", group: "Navigate", label: "Builds", icon: "boxes", run: goTo("builds") },
  { id: "edu", group: "Navigate", label: "Education", icon: "cap", run: goTo("education") },
  { id: "about", group: "Navigate", label: "Off the clock", icon: "heart", run: goTo("about") },
  { id: "contact", group: "Navigate", label: "Work with me", icon: "mail", run: goTo("contact") },
  {
    id: "copy",
    group: "Actions",
    label: "Copy email",
    hint: profile.email,
    icon: "copy",
    run: () => copyEmail(profile.email),
  },
  { id: "theme", group: "Actions", label: "Toggle light / dark", icon: "moon", run: toggleTheme },
  { id: "resume", group: "Actions", label: "Open resume", icon: "file", run: open(profile.resume) },
  ...socials
    .filter((s) => s.href.startsWith("http"))
    .map<Command>((s) => ({
      id: s.label,
      group: "Links",
      label: s.label,
      icon: s.icon,
      run: open(s.href),
    })),
];

const CommandMenu: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? COMMANDS.filter((c) => `${c.label} ${c.group} ${c.hint ?? ""}`.toLowerCase().includes(q))
      : COMMANDS;
  }, [query]);

  const show = () => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setActive(0);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    returnFocus.current?.focus();
  };

  const run = (c: Command) => {
    setOpen(false);
    c.run();
  };

  // ⌘K / Ctrl+K anywhere toggles the menu; the nav button dispatches "open-command-menu".
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) close();
        else show();
      }
    };
    const onOpen = () => show();
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-menu", onOpen);
    };
  });

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      run(results[active]);
    } else if (e.key === "Escape") {
      close();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cmdk-backdrop" onMouseDown={close}>
      <div
        className="cmdk"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="cmdk-search">
          <Icon name="search" size={15} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder="Type a command or search…"
            aria-label="Search commands"
            aria-controls="cmdk-list"
            aria-activedescendant={results[active] ? `cmdk-${results[active].id}` : undefined}
          />
          <kbd>esc</kbd>
        </div>
        <ul id="cmdk-list" role="listbox" className="cmdk-list">
          {results.length === 0 && <li className="cmdk-empty muted">No results</li>}
          {results.map((c, i) => (
            <React.Fragment key={c.id}>
              {(i === 0 || results[i - 1].group !== c.group) && (
                <li role="presentation" className="cmdk-group">
                  {c.group}
                </li>
              )}
              <li
                id={`cmdk-${c.id}`}
                role="option"
                aria-selected={i === active}
                className="cmdk-item"
                onMouseMove={() => setActive(i)}
                onClick={() => run(c)}
              >
                <Icon name={c.icon} size={14} />
                <span>{c.label}</span>
                {c.hint && <span className="cmdk-hint muted">{c.hint}</span>}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandMenu;
