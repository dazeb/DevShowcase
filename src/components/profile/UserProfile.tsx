import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Edit } from "lucide-react";
import ProjectGrid from "../projects/ProjectGrid";

interface UserProfileProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    location: string;
    socialLinks: {
      github?: string;
      twitter?: string;
      linkedin?: string;
    };
    projects: any[];
  };
  isOwnProfile?: boolean;
}

const UserProfile = ({ user, isOwnProfile = false }: UserProfileProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Info */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">@{user.username}</p>
              </div>
            </div>
            {isOwnProfile && (
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">{user.bio}</p>
            <p className="text-sm text-muted-foreground">{user.location}</p>

            <div className="flex gap-2">
              {user.socialLinks.github && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={user.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {user.socialLinks.twitter && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={user.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {user.socialLinks.linkedin && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={user.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Projects Tabs */}
        <div className="flex-1">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              {isOwnProfile && <TabsTrigger value="drafts">Drafts</TabsTrigger>}
            </TabsList>
            <TabsContent value="projects" className="mt-6">
              <ProjectGrid
                projects={user.projects}
                onFilterChange={() => {}}
                onSortChange={() => {}}
              />
            </TabsContent>
            {isOwnProfile && (
              <TabsContent value="drafts" className="mt-6">
                <ProjectGrid
                  projects={[]}
                  onFilterChange={() => {}}
                  onSortChange={() => {}}
                />
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
