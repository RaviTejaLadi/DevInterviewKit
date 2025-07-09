/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from 'kalki-ui';
import { Search, X } from 'lucide-react';
import { ReactNode } from 'react';

interface SidebarContent {
  searchQuery: string;
  setSearchQuery: (e: any) => void;
  clearSearch: () => void;
  renderSearchResults: ReactNode;
  renderSectionView: ReactNode;
}
const SidebarContent = ({
  searchQuery,
  setSearchQuery,
  clearSearch,
  renderSearchResults,
  renderSectionView,
}: SidebarContent) => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Search Input */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 hover:bg-muted"
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 p-4">{searchQuery.trim() ? renderSearchResults : renderSectionView}</ScrollArea>
    </div>
  );
};

export default SidebarContent;
