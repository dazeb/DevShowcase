import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";

interface TechStack {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  techStack?: TechStack[];
  likes?: number;
  comments?: number;
  demoUrl?: string;
  user?: {
    name: string;
    avatar: string;
    username: string;
  };
  createdAt?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title = "Amazing Project",
  description = "A fantastic project showcasing modern web development techniques and best practices.",
  imageUrl = "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&h=300&fit=crop",
  techStack = [
    { name: "React", color: "bg-blue-100 text-blue-800" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
    { name: "Tailwind", color: "bg-teal-100 text-teal-800" },
  ],
  likes = 42,
  comments = 12,
  demoUrl = "#",
  user = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    username: "johndoe",
  },
  createdAt = new Date().toISOString(),
  onClick,
}: ProjectCardProps) => {
  return (
    <Card
      className="w-[380px] h-[420px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className={tech.color}>
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          asChild
        >
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
