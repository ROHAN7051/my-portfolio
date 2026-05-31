import { about } from "@/lib/data/about";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section className="border-t border-border">
      <Container className="py-16">
        <SectionLabel label="what-i-do" />

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-text-secondary">
          I specialize in shipping production-grade SaaS platforms across multiple
          industries. Here&apos;s a breakdown of my core capabilities.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-bg-card p-5 transition-colors hover:border-border-bright"
            >
              <h3 className="text-sm font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded bg-bg-hover px-2 py-0.5 font-mono text-[11px] text-text-dim transition-colors group-hover:text-text-secondary"
                  >
                    {tool}
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
