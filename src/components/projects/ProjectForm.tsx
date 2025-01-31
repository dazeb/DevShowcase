import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface ProjectFormProps {
  onSubmit: (project: any) => void;
  initialData?: any;
}

const ProjectForm = ({ onSubmit, initialData }: ProjectFormProps) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    imageUrl: initialData?.imageUrl || "",
    demoUrl: initialData?.demoUrl || "",
    techStack: initialData?.techStack || [],
    newTech: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addTechStack = () => {
    if (formData.newTech.trim()) {
      setFormData((prev) => ({
        ...prev,
        techStack: [
          ...prev.techStack,
          {
            name: prev.newTech.trim(),
            color: "bg-blue-100 text-blue-800",
          },
        ],
        newTech: "",
      }));
    }
  };

  const removeTech = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.filter((_, i) => i !== index),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          required
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Enter your project title"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          required
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
          placeholder="Describe your project"
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Project Image URL</Label>
        <Input
          id="imageUrl"
          type="url"
          required
          value={formData.imageUrl}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
          }
          placeholder="Enter image URL"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="demoUrl">Demo URL</Label>
        <Input
          id="demoUrl"
          type="url"
          required
          value={formData.demoUrl}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, demoUrl: e.target.value }))
          }
          placeholder="Enter demo URL"
        />
      </div>

      <div className="space-y-2">
        <Label>Tech Stack</Label>
        <div className="flex gap-2">
          <Input
            value={formData.newTech}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, newTech: e.target.value }))
            }
            placeholder="Add technology"
          />
          <Button type="button" onClick={addTechStack}>
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.techStack.map((tech: any, index: number) => (
            <Badge key={index} variant="secondary" className={tech.color}>
              {tech.name}
              <button
                type="button"
                onClick={() => removeTech(index)}
                className="ml-2 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full">
        {initialData ? "Update Project" : "Submit Project"}
      </Button>
    </form>
  );
};

export default ProjectForm;
