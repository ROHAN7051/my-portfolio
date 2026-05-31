import { site } from "@/lib/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <Container className="py-16">
        <SectionLabel label="contact" />

        <div className="rounded-lg border border-border bg-[#1e1e2e] p-6">
          <div className="font-mono text-sm leading-loose text-[#cdd6f4]">
            <p>
              <span className="text-[#cba6f7]">const</span>{" "}
              <span className="text-[#89b4fa]">contact</span>{" "}
              <span className="text-[#6c7086]">=</span>{" "}
              <span className="text-[#f9e2af]">{"{"}</span>
            </p>
            <p className="pl-6">
              <span className="text-[#a6e3a1]">email</span>
              <span className="text-[#6c7086]">:</span>{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[#94e2d5] hover:underline"
              >
                &quot;{site.email}&quot;
              </a>
              <span className="text-[#6c7086]">,</span>
            </p>
            <p className="pl-6">
              <span className="text-[#a6e3a1]">linkedin</span>
              <span className="text-[#6c7086]">:</span>{" "}
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94e2d5] hover:underline"
              >
                &quot;{site.social.linkedin}&quot;
              </a>
              <span className="text-[#6c7086]">,</span>
            </p>
            <p className="pl-6">
              <span className="text-[#a6e3a1]">github</span>
              <span className="text-[#6c7086]">:</span>{" "}
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94e2d5] hover:underline"
              >
                &quot;{site.social.github}&quot;
              </a>
              <span className="text-[#6c7086]">,</span>
            </p>
            <p className="pl-6">
              <span className="text-[#a6e3a1]">leetcode</span>
              <span className="text-[#6c7086]">:</span>{" "}
              <a
                href={site.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94e2d5] hover:underline"
              >
                &quot;{site.social.leetcode}&quot;
              </a>
              <span className="text-[#6c7086]">,</span>
            </p>
            <p className="pl-6">
              <span className="text-[#a6e3a1]">location</span>
              <span className="text-[#6c7086]">:</span>{" "}
              <span className="text-[#f9e2af]">&quot;{site.location}&quot;</span>
              <span className="text-[#6c7086]">,</span>
            </p>
            <p className="pl-6">
              <span className="text-[#a6e3a1]">status</span>
              <span className="text-[#6c7086]">:</span>{" "}
              <span className="text-[#f9e2af]">
                &quot;Open to opportunities&quot;
              </span>
            </p>
            <p>
              <span className="text-[#f9e2af]">{"}"}</span>
              <span className="text-[#6c7086]">;</span>
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-md bg-text px-5 py-2 font-mono text-sm text-bg transition-colors hover:bg-text/90"
          >
            send_email()
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-border-bright px-5 py-2 font-mono text-sm text-text-secondary transition-colors hover:text-text"
          >
            linkedin ↗
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-border-bright px-5 py-2 font-mono text-sm text-text-secondary transition-colors hover:text-text"
          >
            github ↗
          </a>
        </div>
      </Container>
    </section>
  );
}
