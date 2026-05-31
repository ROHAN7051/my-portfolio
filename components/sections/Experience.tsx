import {
  certifications,
  education,
  experience,
} from "@/lib/data/experience";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border">
      <Container className="py-16">
        <SectionLabel label="experience" />

        <div className="space-y-8">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-lg border border-border bg-bg-card p-5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold text-text">{job.role}</h3>
                  <p className="font-mono text-sm text-blue">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-text-dim">{job.period}</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {job.highlights.slice(0, 3).map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 font-mono text-text-dim">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-t border-border pt-10 sm:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs text-green uppercase">
              Education
            </h3>
            <p className="mt-3 font-semibold">{education.degree}</p>
            <p className="mt-1 text-sm text-text-secondary">
              {education.institution}
            </p>
            <p className="font-mono text-xs text-text-dim">{education.year}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-green uppercase">
              Certifications
            </h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((cert) => (
                <li key={cert.title} className="text-sm">
                  <span className="text-text">{cert.title}</span>
                  <span className="text-text-dim"> — {cert.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
