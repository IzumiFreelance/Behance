import React from 'react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types/project';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (id: string) => void;
}

export function ProjectGrid({ projects, onProjectClick }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onProjectClick}
        />
      ))}
    </div>
  );
}