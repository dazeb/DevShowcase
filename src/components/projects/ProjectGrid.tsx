import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import FilterBar from "./FilterBar";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: { name: string; color: string }[];
  likes: number;
  comments: number;
  demoUrl: string;
  user: {
    name: string;
    avatar: string;
    username: string;
  };
  createdAt: string;
}

interface ProjectGridProps {
  projects?: Project[];
  onFilterChange?: (filters: any) => void;
  onSortChange?: (sort: string) => void;
}

const ProjectGrid = ({
  projects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      imageUrl:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "MongoDB", color: "bg-green-100 text-green-800" },
      ],
      likes: 156,
      comments: 23,
      demoUrl: "#",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      imageUrl:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=300&fit=crop",
      techStack: [
        { name: "Vue", color: "bg-emerald-100 text-emerald-800" },
        { name: "Firebase", color: "bg-yellow-100 text-yellow-800" },
        { name: "Tailwind", color: "bg-teal-100 text-teal-800" },
      ],
      likes: 89,
      comments: 15,
      demoUrl: "#",
    },
    {
      id: "3",
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using stable diffusion",
      imageUrl:
        "https://images.unsplash.com/photo-1525373698358-041e3a460346?w=500&h=300&fit=crop",
      techStack: [
        { name: "Python", color: "bg-blue-100 text-blue-800" },
        { name: "TensorFlow", color: "bg-orange-100 text-orange-800" },
        { name: "FastAPI", color: "bg-teal-100 text-teal-800" },
      ],
      likes: 234,
      comments: 45,
      demoUrl: "#",
    },
  ],
  onFilterChange = () => {},
  onSortChange = () => {},
}: ProjectGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      <FilterBar onFilterChange={onFilterChange} onSortChange={onSortChange} />

      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                techStack={project.techStack}
                likes={project.likes}
                comments={project.comments}
                demoUrl={project.demoUrl}
                user={project.user}
                createdAt={project.createdAt}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectGrid;
