import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ProjectGrid from "./projects/ProjectGrid";

interface HomeProps {
  initialProjects?: Array<{
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
  }>;
}

const Home = ({
  initialProjects = [
    {
      id: "1",
      title: "AI-Powered Analytics Dashboard",
      description:
        "Real-time data visualization platform with machine learning insights",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Python", color: "bg-yellow-100 text-yellow-800" },
        { name: "TensorFlow", color: "bg-orange-100 text-orange-800" },
      ],
      likes: 234,
      comments: 45,
      demoUrl: "#",
      user: {
        name: "Sarah Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        username: "sarahchen",
      },
      createdAt: "2024-01-15T08:00:00.000Z",
    },
    {
      id: "2",
      title: "Social Media Management Tool",
      description:
        "Comprehensive platform for managing multiple social media accounts",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      techStack: [
        { name: "Vue", color: "bg-emerald-100 text-emerald-800" },
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "MongoDB", color: "bg-green-100 text-green-800" },
      ],
      likes: 189,
      comments: 32,
      demoUrl: "#",
      user: {
        name: "Alex Rivera",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        username: "arivera",
      },
      createdAt: "2024-01-14T15:30:00.000Z",
    },
    {
      id: "3",
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting platform built on blockchain technology",
      imageUrl:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      techStack: [
        { name: "Solidity", color: "bg-purple-100 text-purple-800" },
        { name: "Web3.js", color: "bg-blue-100 text-blue-800" },
        { name: "Next.js", color: "bg-gray-100 text-gray-800" },
      ],
      likes: 312,
      comments: 67,
      demoUrl: "#",
      user: {
        name: "Maya Patel",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
        username: "mayap",
      },
      createdAt: "2024-01-13T11:20:00.000Z",
    },
  ],
}: HomeProps) => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Implement search functionality
  };

  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // Implement filter functionality
  };

  const handleSortChange = (sort: string) => {
    console.log("Sort changed:", sort);
    // Implement sort functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} />
      <main className="pt-16">
        {/* Add padding top to account for fixed navbar */}
        <ProjectGrid
          projects={initialProjects}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
