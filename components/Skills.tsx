import { skillGroups } from "@/content";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" chip="Skills" gray="Everything" white="I Work With">
      <div className="mx-auto max-w-5xl">
        {skillGroups.map((g) => (
          <div
            key={g.group}
            className="reveal grid gap-4 border-t border-line py-7 text-left first:border-t-0 first:pt-0 md:grid-cols-[13rem_1fr] md:gap-10"
          >
            <h3 className="display text-lg text-ink">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li key={item} className="chip whitespace-nowrap !px-3.5 !py-1.5 !text-[0.8rem]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
