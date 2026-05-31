import { skills } from "@/lib/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <Container className="py-16">
        <SectionLabel label="tech-stack" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-green">
                {group.category.toLowerCase().replace(/\s+&\s+/g, "-")}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border bg-bg-card px-2.5 py-1 font-mono text-xs text-text-secondary transition-colors hover:border-border-bright hover:text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
