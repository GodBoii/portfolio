"use client";

import Link from "next/link";
import type { Project } from "@/lib/types";

export function WorkRow({
  project,
  onPreview,
  onLeave,
}: {
  project: Project;
  onPreview?: (project: Project, event: React.MouseEvent) => void;
  onLeave?: () => void;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-row"
      onMouseEnter={(event) => onPreview?.(project, event)}
      onMouseMove={(event) => onPreview?.(project, event)}
      onMouseLeave={onLeave}
    >
      <span className="work-cell work-number">{project.number}</span>
      <span className="work-cell work-title">
        <span>{project.title}</span>
        <small>{project.category}</small>
      </span>
      <span className="work-cell work-client">{project.client}</span>
      <span className="work-cell work-type">
        {project.type}
        <small>{project.awards.join(" / ")}</small>
      </span>
      <span className="work-cell work-year">{project.year}</span>
      <span className="work-overlay" aria-hidden="true">
        {[project.number, project.title, project.client, project.type, project.year].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </span>
    </Link>
  );
}
