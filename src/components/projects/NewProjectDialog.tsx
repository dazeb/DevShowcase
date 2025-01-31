import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectForm from "./ProjectForm";

interface NewProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (project: any) => void;
}

const NewProjectDialog = ({
  open,
  onOpenChange,
  onSubmit,
}: NewProjectDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Submit New Project</DialogTitle>
        </DialogHeader>
        <ProjectForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectDialog;
