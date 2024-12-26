import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ProjectGrid } from './components/ProjectGrid';
import { UploadModal } from './components/UploadModal';
import { mockProjects } from './data/mockProjects';
import type { Category, Project } from './types/project';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [projects, setProjects] = useState(mockProjects);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (id: string) => {
    // TODO: Implement project detail view
    console.log('Project clicked:', id);
  };

  const handleProjectUpload = (projectData: Partial<Project>) => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: projectData.title || '',
      description: projectData.description || '',
      coverImage: projectData.images?.[0] || '',
      images: projectData.images || [],
      category: projectData.category || 'ui-design',
      tags: projectData.tags || [],
      creator: {
        id: 'user-1', // In a real app, this would come from auth
        name: 'Current User',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2424',
        role: 'Designer',
        location: 'New York, NY'
      },
      likes: 0,
      views: 0,
      createdAt: new Date().toISOString()
    };

    setProjects(prev => [newProject, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onUploadClick={() => setIsUploadModalOpen(true)} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Creative Projects
          </h1>
          <p className="text-gray-600 text-lg">
            Explore the latest work from top creators across different creative fields
          </p>
        </div>

        <div className="mb-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
        />
      </main>

      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSubmit={handleProjectUpload}
      />
    </div>
  );
}

export default App;