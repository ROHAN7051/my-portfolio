"use client";

import { useState } from "react";
import { projects } from "@/lib/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

const INITIAL = 4;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);

  return (
    <section id="projects" className="border-t border-border">
      <Container className="py-16">
        <SectionLabel label="projects" />

        <div className="grid gap-4 sm:grid-cols-2">
          {visible.map((project) => {
            const idx = projects.indexOf(project);
            return (
              <article
                key={project.title}
                className="group flex flex-col rounded-lg border border-border bg-bg-card transition-colors hover:border-border-bright"
              >
                <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green/60" />
                  </div>
                  <span className="font-mono text-xs text-text-dim">
                    {project.category.toLowerCase().replace(/\s+/g, "-")}/
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold text-text group-hover:text-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-text-dim">
                    {project.region}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {project.highlights.slice(0, 2).map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 font-mono text-xs text-text-dim"
                      >
                        <span className="text-green">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-text-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {projects.length > INITIAL && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="mt-5 w-full rounded-lg border border-border py-2.5 font-mono text-xs text-text-dim transition-colors hover:border-border-bright hover:text-text-secondary"
          >
            {showAll
              ? "collapse()"
              : `show_all(${projects.length})`}
          </button>
        )}
      </Container>
    </section>
  );
}
