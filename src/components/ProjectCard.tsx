import React from 'react';
import { Heart, Eye } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group cursor-pointer"
      onClick={() => onClick(project.id)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium">
              View Project
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{project.title}</h3>
          <div className="flex items-center mt-1">
            <img
              src={project.creator.avatar}
              alt={project.creator.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="ml-2 text-sm text-gray-600">
              {project.creator.name}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 text-sm text-gray-500">
          <div className="flex items-center">
            <Heart size={16} className="mr-1" />
            {project.likes}
          </div>
          <div className="flex items-center">
            <Eye size={16} className="mr-1" />
            {project.views}
          </div>
        </div>
      </div>
    </div>
  );
}