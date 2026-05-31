import { about } from "@/lib/data/about";
import { site } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 sm:pt-28">
      <Container>
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-bg-card px-3 py-1.5 font-mono text-xs">
          <span className="h-2 w-2 rounded-full bg-green" />
          <span className="text-text-secondary">{site.status}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {site.name}
        </h1>

        <p className="mt-2 font-mono text-lg text-blue">{site.title}</p>

        <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
          {about.bio}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#projects">view_projects()</Button>
          <Button href="#contact" variant="secondary">
            contact_me()
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
          {Object.entries(site.social).map(([name, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim transition-colors hover:text-blue"
            >
              {name} ↗
            </a>
          ))}
          <span className="text-text-dim">{site.email}</span>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {about.stats.map((stat) => (
            <div key={stat.label} className="bg-bg-card px-5 py-4">
              <p className="font-mono text-2xl font-bold text-green">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-text-dim">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
