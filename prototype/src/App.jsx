import React, { useEffect, useMemo, useState } from "react";
import courses from "./data/courses.json";
import term from "./data/term.json";
import announcements from "./data/announcements.json";
import "./styles.css";

const TZ = "America/Vancouver";
const DAY = 86400000;

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function termWeek(startISO) {
  const start = startOfDay(new Date(startISO + "T12:00:00"));
  const days = Math.floor((startOfDay(new Date()) - start) / DAY);
  return days < 0 ? null : Math.floor(days / 7) + 1;
}

function daysUntil(iso) {
  const target = startOfDay(new Date(iso + "T12:00:00"));
  return Math.round((target - startOfDay(new Date())) / DAY);
}

function countdownText(iso) {
  const d = daysUntil(iso);
  if (d < 0) return "no upcoming events";
  if (d === 0) return "happening today";
  if (d === 1) return "tomorrow";
  return `in ${d} days`;
}

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

/* ---------- 1. live term strip ---------- */
function TermStrip({ now }) {
  const week = termWeek(term.termStart);
  const clock = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  return (
    <div className="strip">
      <span className="strip-left">
        UBC CSSS <span className="dot">·</span> Course Reviews
      </span>
      <span className="strip-mid">
        {term.term} <span className="dot">·</span>{" "}
        {week ? `Week ${week}` : "Not in session"}
      </span>
      <span className="strip-right">
        {/* separator lives inside .strip-next so hiding it hides the dot too */}
        <span className="strip-next">
          {term.nextEvent.title.split("—")[0].trim()} {countdownText(term.nextEvent.date)}{" "}
          <span className="dot">·</span>
        </span>
        <span className="strip-clock">Vancouver {clock}</span>
      </span>
    </div>
  );
}

/* ---------- 2. spec-sheet masthead ---------- */
function Masthead({ total, filtered, level, setLevel, view, setView }) {
  const levels = [0, 100, 200, 300, 400];
  return (
    <header className="masthead">
      <div className="glyphs">
        <span className="glyph">C</span>
        <div className="meta">
          <div className="meta-row">
            <span className="k">Course Reviews Database</span>
            <span className="v">
              {filtered} / {total} courses
            </span>
          </div>
          <div className="meta-row">
            <span className="k">Source</span>
            <span className="v">UBC students &amp; TAs</span>
          </div>
          <div className="meta-row">
            <span className="k">Session</span>
            <span className="v">{term.session}</span>
          </div>
          <div className="meta-row">
            <span className="k">Campus</span>
            <span className="v">Vancouver, BC</span>
          </div>
        </div>
        <span className="glyph">R</span>
      </div>

      <div className="controls">
        <div className="chips" role="tablist" aria-label="Filter by course level">
          {levels.map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={level === l}
              className={"chip" + (level === l ? " chip--on" : "")}
              onClick={() => setLevel(l)}
            >
              {l === 0 ? "All" : l === 400 ? "400+" : l}
            </button>
          ))}
        </div>

        <div className="views" role="tablist" aria-label="Presentation">
          {[
            ["index", "Index"],
            ["shelf", "Shelf"],
          ].map(([key, label]) => (
            <button
              key={key}
              role="tab"
              aria-selected={view === key}
              className={"chip" + (view === key ? " chip--on" : "")}
              onClick={() => setView(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------- 3. numbered index ---------- */
function CourseIndex({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <main className="index">
      {items.map((c, i) => {
        const isOpen = open === c.slug;
        return (
          <div className={"entry" + (isOpen ? " entry--open" : "")} key={c.slug}>
            <button
              className="row"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : c.slug)}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="code">{c.code}</span>
              <span className="title">{c.title}</span>
              <span className="leader" aria-hidden="true" />
              <span className="lvl">{c.level || "—"}</span>
            </button>
            {isOpen && (
              <div className="desc">
                {c.description || "No description on file for this course yet."}
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}

/* ---------- 4. spine shelf ---------- */
function bucket(level) {
  return level >= 400 ? 400 : level;
}

function Shelf({ items }) {
  const [active, setActive] = useState(items[0] ? items[0].slug : null);
  const current = items.find((c) => c.slug === active) || items[0];

  return (
    <section className="shelf">
      <div className="shelf-band">
        <h2>The shelf</h2>
        <div className="legend">
          {[100, 200, 300, 400].map((l) => (
            <span className="legend-item" key={l}>
              <i className={"swatch swatch--" + l} />
              {l === 400 ? "400+" : l}
            </span>
          ))}
        </div>
      </div>

      <div className="shelf-grid">
        <div className="spines" role="list">
          {items.map((c) => {
            const b = bucket(c.level);
            return (
              <button
                key={c.slug}
                role="listitem"
                className={"spine spine--" + b + (current && current.slug === c.slug ? " spine--on" : "")}
                onMouseEnter={() => setActive(c.slug)}
                onFocus={() => setActive(c.slug)}
                onClick={() => setActive(c.slug)}
              >
                <span className="spine-code">{c.code}</span>
                <span className="spine-title">{c.title}</span>
                <span className="spine-lvl">{c.level || "—"}</span>
              </button>
            );
          })}
        </div>

        <aside className="detail" aria-live="polite">
          {current && (
            <>
              <div className="detail-code">{current.code}</div>
              <h3 className="detail-title">{current.title}</h3>
              <div className="detail-meta">Level {current.level || "—"}</div>
              <p className="detail-desc">
                {current.description ||
                  "No description on file for this course yet — a review could go here."}
              </p>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}

/* ---------- 5. announcement ticker ---------- */
function Ticker() {
  const run = [...announcements, ...announcements];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {run.map((a, i) => (
          <span className="ticker-item" key={i}>
            <span className="cube" />
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const now = useClock();
  const [level, setLevel] = useState(0);
  const [view, setView] = useState("index");

  const filtered = useMemo(
    () =>
      courses
        .filter((c) => (level === 0 ? true : level === 400 ? c.level >= 400 : c.level === level))
        .sort((a, b) => a.num - b.num),
    [level]
  );

  return (
    <div className="page">
      <TermStrip now={now} />
      <Masthead
        total={courses.length}
        filtered={filtered.length}
        level={level}
        setLevel={setLevel}
        view={view}
        setView={setView}
      />
      {view === "index" ? <CourseIndex items={filtered} /> : <Shelf items={filtered} />}
      <Ticker />
      <footer className="foot">
        <span>Prototype for design review — not part of the Hugo build.</span>
        <span className="foot-note">
          Term &amp; next-event values are placeholders — see{" "}
          <code>src/data/term.json</code>. Course data is real, read from
          <code> content/services/courses/</code>.
        </span>
      </footer>
    </div>
  );
}
