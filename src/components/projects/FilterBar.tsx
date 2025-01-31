import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  onFilterChange?: (filters: FilterState) => void;
  onSortChange?: (sort: string) => void;
}

interface FilterState {
  search: string;
  technology: string;
  category: string;
  sort: string;
}

const FilterBar = ({
  onFilterChange = () => {},
  onSortChange = () => {},
}: FilterBarProps) => {
  const [filters, setFilters] = React.useState<FilterState>({
    search: "",
    technology: "",
    category: "",
    sort: "latest",
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full bg-background border-b p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex-1 flex gap-4 w-full md:w-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects..."
            className="pl-10"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>

        <Button variant="outline" size="icon" className="md:hidden">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-4 w-full md:w-auto">
        <Select
          value={filters.technology}
          onValueChange={(value) => handleFilterChange("technology", value)}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
            <SelectItem value="node">Node.js</SelectItem>
            <SelectItem value="python">Python</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.category}
          onValueChange={(value) => handleFilterChange("category", value)}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web App</SelectItem>
            <SelectItem value="mobile">Mobile App</SelectItem>
            <SelectItem value="desktop">Desktop App</SelectItem>
            <SelectItem value="library">Library</SelectItem>
            <SelectItem value="tool">Tool</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.sort}
          onValueChange={(value) => {
            handleFilterChange("sort", value);
            onSortChange(value);
          }}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="trending">Trending</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;
