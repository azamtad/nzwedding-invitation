import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import venue from "@/assets/royal-rose.jpg";
import {
  dictionaries,
  LANGS,
  MAPS_URL,
  WEDDING_DATE,
  type Lang,
} from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nodir & Ziyoda — Wedding Invitation, 08.10" },
      {
        name: "description",
        content:
          "Join Nodir and Ziyoda on 8 October at Royal Rose Venue, Tashkent. Countdown, schedule and RSVP in English, Russian and Uzbek.",
      },
      { property: "og:title", content: "Nodir & Ziyoda — Wedding Invitation" },
      {
        property: "og:description",
        content:
          "8 October at Royal Rose Venue, Tashkent. Countdown, schedule and RSVP in three languages.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

const PETALS = [
  { left: "8%", w: 14, h: 20, dur: "15s", delay: "0s" },
  { left: "22%", w: 10, h: 15, dur: "19s", delay: "-5s" },
  { left: "54%", w: 12, h: 18, dur: "17s", delay: "-9s" },
  { left: "78%", w: 16, h: 22, dur: "21s", delay: "-3s" },
  { left: "90%", w: 9, h: 13, dur: "16s", delay: "-12s" },
];

function useCountdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tickNow = () =>
      setLeft(Math.max(0, WEDDING_DATE.getTime() - Date.now()));
    tickNow();
    const id = setInterval(tickNow, 1000);
    return () => clearInterval(id);
  }, []);

  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return {
    done: left === 0,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Unit({ value, label }: { value: number | null; label: string }) {
  return (
    <div className="flex-1 rounded-2xl bg-surface px-2 py-5 text-center ring-1 ring-border">
      <div className="tick font-display text-5xl font-medium tabular-nums sm:text-6xl">
        {value === null ? "––" : String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Invitation() {
  const [lang, setLang] = useState<Lang>("en");
  const t = dictionaries[lang];
  const cd = useCountdown();

  useEffect(() => {
    const stored = localStorage.getItem("inv-lang") as Lang | null;
    if (stored && LANGS.some((l) => l.code === stored)) setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  const pick = (code: Lang) => {
    setLang(code);
    localStorage.setItem("inv-lang", code);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground antialiased">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-rose/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-rose/10 blur-3xl"
      />
      {PETALS.map((p, i) => (
        <span
          key={i}
          aria-hidden
          className="petal"
          style={{
            left: p.left,
            width: p.w,
            height: p.h,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        />
      ))}

      <header className="sticky top-0 z-30 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-display text-2xl italic tracking-tight">N &amp; Z</div>
          <div
            role="group"
            aria-label={t.langLabel}
            className="inline-flex items-center rounded-full bg-surface p-1 ring-1 ring-border"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => pick(l.code)}
                aria-pressed={lang === l.code}
                aria-label={l.aria}
                className={
                  lang === l.code
                    ? "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                    : "rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
          <div
            aria-hidden
            className="rotating absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/30 opacity-60"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/15 opacity-50"
          />
          <div
            aria-hidden
            className="glow absolute -left-3 top-8 h-40 w-40 rounded-full bg-rose/15 blur-2xl"
          />
          <div
            aria-hidden
            className="glow absolute -right-3 bottom-10 h-52 w-52 rounded-full bg-gold/20 blur-2xl"
          />

          <p
            className="fadein mb-6 font-mono text-xs uppercase tracking-[0.4em] text-gold"
            style={{ animationDelay: "120ms" }}
          >
            {t.saveTheDate}
          </p>
          <h1
            className="rise text-balance font-display text-7xl font-medium leading-[0.95] tracking-tight sm:text-8xl md:text-9xl"
            style={{ animationDelay: "200ms" }}
          >
            Nodir <span className="font-light italic text-gold">&amp;</span>
            <br />
            Ziyoda
          </h1>
          <p
            className="rise mt-8 max-w-[42ch] text-pretty text-lg text-muted-foreground"
            style={{ animationDelay: "360ms" }}
          >
            {t.invite}
          </p>
          <div
            className="rise mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-sm uppercase tracking-widest"
            style={{ animationDelay: "480ms" }}
          >
            <span>{t.dateLine}</span>
            <span aria-hidden className="text-gold">
              —
            </span>
            <span>{t.venueShort}</span>
          </div>
        </section>

        <section className="relative mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border backdrop-blur-xl sm:p-12">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
                  {t.countKicker}
                </p>
                <p className="mt-3 text-pretty font-display text-3xl italic">
                  {cd?.done ? t.started : t.countTitle}
                </p>
              </div>
              <div className="flex flex-1 justify-center gap-3 sm:gap-6">
                <Unit value={cd ? cd.days : null} label={t.days} />
                <Unit value={cd ? cd.hours : null} label={t.hours} />
                <Unit value={cd ? cd.minutes : null} label={t.minutes} />
                <Unit value={cd ? cd.seconds : null} label={t.seconds} />
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-border">
                <img
                  src={venue}
                  alt={t.venuePhotoAlt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute bottom-4 right-4 rounded-full bg-background/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest ring-1 ring-border backdrop-blur-sm">
                  Royal Rose
                </span>
              </div>
            </div>
            <div className="rounded-3xl bg-card p-8 ring-1 ring-border backdrop-blur-xl md:col-span-2">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
                {t.venueKicker}
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl leading-tight">
                {t.venueName}
              </h2>
              <p className="mt-3 text-pretty text-lg text-muted-foreground">
                {t.venueCity}
              </p>
              <div className="my-6 h-px w-full bg-border" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.arrivalLabel}
              </p>
              <p className="mt-1 text-lg">{t.arrivalTime}</p>
              <div className="mt-6 flex items-center gap-4">
                <div
                  aria-hidden
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
                >
                  &#10148;
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {t.venueNote}
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 block w-full rounded-full bg-primary py-3.5 text-center text-sm font-semibold tracking-wide text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {t.directions}
              </a>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-3xl bg-card p-8 ring-1 ring-border backdrop-blur-xl sm:p-14">
            <p className="text-center font-mono text-xs uppercase tracking-[0.4em] text-gold">
              {t.dayKicker}
            </p>
            <h2 className="mt-3 text-balance text-center font-display text-4xl italic">
              {t.dayTitle}
            </h2>
            <div className="mt-10 flex flex-col">
              {t.schedule.map((item) => (
                <div
                  key={item.time + item.title}
                  className="flex items-baseline gap-4 py-4 sm:gap-6"
                >
                  <span className="w-16 shrink-0 font-mono text-sm text-gold">
                    {item.time}
                  </span>
                  <span aria-hidden className="hidden h-px flex-1 bg-border sm:block" />
                  <div className="text-left sm:text-right">
                    <p className="text-balance font-display text-2xl">{item.title}</p>
                    <p className="text-pretty text-sm text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-14">
            <p className="text-center font-mono text-xs uppercase tracking-[0.4em] text-gold">
              {t.rsvpKicker}
            </p>
            <h2 className="mt-4 text-balance text-center font-display text-5xl italic">
              {t.rsvpTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-pretty text-center text-lg text-primary-foreground/70">
              {t.rsvpText}
            </p>
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2"
            >
              <label className="sr-only" htmlFor="rsvp-name">
                {t.name}
              </label>
              <input
                id="rsvp-name"
                name="name"
                required
                placeholder={t.name}
                className="rounded-xl bg-background/10 px-4 py-4 text-primary-foreground ring-1 ring-primary-foreground/20 placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <label className="sr-only" htmlFor="rsvp-phone">
                {t.phone}
              </label>
              <input
                id="rsvp-phone"
                name="phone"
                type="tel"
                required
                placeholder={t.phone}
                className="rounded-xl bg-background/10 px-4 py-4 text-primary-foreground ring-1 ring-primary-foreground/20 placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <div className="sm:col-span-2">
                <label className="sr-only" htmlFor="rsvp-guests">
                  {t.guests}
                </label>
                <input
                  id="rsvp-guests"
                  name="guests"
                  type="number"
                  min={1}
                  placeholder={t.guests}
                  className="w-full rounded-xl bg-background/10 px-4 py-4 text-primary-foreground ring-1 ring-primary-foreground/20 placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gold py-4 font-semibold tracking-wide text-accent-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {t.send}
                </button>
              </div>
            </form>
            <p
              ref={liveRef}
              role="status"
              aria-live="polite"
              className="mt-5 text-center text-sm text-primary-foreground/80"
            >
              {sent ? t.sent : ""}
            </p>
          </div>
        </section>

        <footer className="relative mx-auto max-w-6xl overflow-hidden border-t border-border px-6 py-10">
          <div
            aria-hidden
            className="marquee mb-6 font-display text-2xl italic text-foreground/40"
          >
            {[0, 1].map((i) => (
              <span key={i} className="flex items-center">
                <span className="px-6">Nodir &amp; Ziyoda</span>
                <span className="text-gold/40">&#10047;</span>
                <span className="px-6">08 · 10 · 2026</span>
                <span className="text-gold/40">&#10047;</span>
                <span className="px-6">Royal Rose, Tashkent</span>
                <span className="text-gold/40">&#10047;</span>
              </span>
            ))}
          </div>
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t.footer}
          </p>
        </footer>
      </main>
    </div>
  );
}
