import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-4">
          {Object.entries(site.social).map(([name, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-dim transition-colors hover:text-text-secondary"
            >
              {name}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
