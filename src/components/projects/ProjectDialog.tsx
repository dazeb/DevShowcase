import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, ExternalLink, Share2 } from "lucide-react";

interface ProjectDialogProps {
  project: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    techStack: Array<{ name: string; color: string }>;
    likes: number;
    comments: number;
    demoUrl: string;
    user: {
      name: string;
      avatar: string;
      username: string;
    };
    createdAt: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <div className="relative h-[300px] w-full overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={project.user.avatar} />
                    <AvatarFallback>{project.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{project.user.username}</span>
                </div>
                <span className="text-sm">•</span>
                <span className="text-sm">
                  {new Date(project.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className={tech.color}>
                {tech.name}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 border-t pt-4">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <Heart className="h-4 w-4" />
              <span>{project.likes}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{project.comments}</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
