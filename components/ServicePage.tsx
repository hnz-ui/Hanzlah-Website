/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { services, skillGroups, toolsKit, site, type Service } from "@/content";
import Nav from "./Nav";
import Footer from "./Footer";
import ServiceVisual from "./ServiceVisual";

export default function ServicePage({ service }: { service: Service }) {
  const skills = skillGroups.find((g) => g.group === service.skillsGroup);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const logoFor = (name: string) =>
    toolsKit.find((t) => name.toLowerCase().includes(t.name.toLowerCase().split(" ")[0]));

  return (
    <div style={{ "--acc": service.accent, "--acc-soft": service.accentSoft } as React.CSSProperties}>
      <Nav />
      <main>
        {/* hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="grid-bg absolute inset-0" />
          <div
            aria-hidden
            className="blob right-[8%] top-[15%] size-80"
            style={{ background: service.accentSoft, opacity: 0.9 }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <nav className="rise text-sm text-dim">
                <Link href="/" className="link-underline hover:text-ink">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="link-underline hover:text-ink">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-mut">{service.name}</span>
              </nav>
              <h1 className="display rise mt-6 text-[clamp(2.3rem,5vw,3.8rem)] text-ink" style={{ animationDelay: "90ms" }}>
                {service.h1}
              </h1>
              <p className="rise mt-5 max-w-xl text-lg leading-relaxed text-mut" style={{ animationDelay: "170ms" }}>
                {service.sub}
              </p>
              <a href={`mailto:${site.email}?subject=${encodeURIComponent(service.name + " — project inquiry")}`} className="btn rise mt-8" style={{ animationDelay: "250ms" }}>
                Start a project <span aria-hidden>→</span>
              </a>
            </div>
            <div className="rise" style={{ animationDelay: "300ms" }}>
              <ServiceVisual kind={service.visual} accent={service.accent} />
            </div>
          </div>
        </section>

        {/* offerings */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
          <h2 className="display reveal text-3xl text-ink">What I handle</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((o) => (
              <div key={o.t} className="reveal card card--lift p-6">
                <h3 className="display text-lg text-ink">{o.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mut">{o.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* process + proof */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
            <div>
              <h2 className="display reveal text-3xl text-ink">The process</h2>
              <ol className="mt-7 space-y-5">
                {service.steps.map((st, i) => (
                  <li key={st.t} className="reveal flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg text-sm font-bold text-white" style={{ background: service.accent }}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="display text-lg text-ink">{st.t}</h3>
                      <p className="mt-1 text-sm text-mut">{st.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="display reveal text-3xl text-ink">Proof</h2>
              <ul className="mt-7 space-y-4">
                {service.proof.map((pr) => (
                  <li key={pr} className="reveal flex gap-3 text-mut">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full" style={{ background: service.accent }} />
                    <span className="leading-relaxed">{pr}</span>
                  </li>
                ))}
              </ul>
              {skills && (
                <ul className="reveal mt-8 flex flex-wrap gap-2">
                  {skills.items.map((i) => (
                    <li key={i} className="chip whitespace-nowrap !px-3 !py-1 !text-[0.75rem]">{i}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* tools */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <h2 className="display reveal text-3xl text-ink">Tools I use for this</h2>
          <ul className="mt-7 flex flex-wrap gap-3">
            {service.tools.map((name) => {
              const t = logoFor(name);
              return (
                <li key={name} className="reveal card flex items-center gap-3 px-4 py-2.5">
                  {t?.src ? (
                    <img src={t.src} alt="" className="size-5" loading="lazy" />
                  ) : t?.mono ? (
                    <span className="display grid size-5 place-items-center rounded text-[0.6rem]" style={{ background: t.mono.bg, color: t.mono.fg }}>{t.mono.text}</span>
                  ) : (
                    <span className="size-2 rounded-full" style={{ background: service.accent }} />
                  )}
                  <span className="text-sm font-medium text-ink">{name}</span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* CTA + related */}
        <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
          <div className="reveal card p-10 text-center" style={{ background: service.accentSoft }}>
            <h2 className="display text-3xl text-ink sm:text-4xl">Let’s get this moving.</h2>
            <p className="mx-auto mt-3 max-w-md text-mut">Tell me about the product, the audience and the deadline — I’ll reply with a plan.</p>
            <a href={`mailto:${site.email}`} className="btn mt-7">Email me <span aria-hidden>→</span></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mut">
            <span className="font-semibold text-ink">Also offered:</span>
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="link-underline hover:text-ink">
                {o.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
