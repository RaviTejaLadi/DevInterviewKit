import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog/dialog';
import { Input } from '@/components/ui/input';
import { useOpenSearchDialog } from '@/stores/useOpenSearchDialog';
import { useSearchTermStore } from '@/stores/useSearchTermStore';
import { MarkdownDocument } from '@/types/markdown-content-types';
import { Button } from 'kalki-ui';
import { Search, X } from 'lucide-react';
import SearchResults from './SearchResults';
import { ScrollArea } from '@/components/ui/scroll-area';
import { markdownData } from '@/data';

interface SearchResultsDialogProps {
  searchResults: MarkdownDocument[];
  showSearchResults: boolean;
  debouncedSearchTerm: string;
  handleDocumentSelect: (document: MarkdownDocument) => void;
}

const SearchResultsDialog = ({
  searchResults,
  showSearchResults,
  debouncedSearchTerm,
  handleDocumentSelect,
}: SearchResultsDialogProps) => {
  const { searchTerm, setSearchTerm } = useSearchTermStore();
  const { isSearchDialogOpen, setIsSearchDialogOpen } = useOpenSearchDialog();

  console.log(markdownData);
  return (
    <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
      <DialogContent className="p-2 w-[80%] h-[80vh] border-border">
        <DialogHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-1 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchTerm('')}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted"
              >
                <X className="w-3 h-3" />
              </Button>
            )}
          </div>
        </DialogHeader>
        <ScrollArea className="h-auto">
          {showSearchResults ? (
            <SearchResults
              results={searchResults}
              searchTerm={debouncedSearchTerm}
              onDocumentSelect={handleDocumentSelect}
            />
          ) : (
            <div className="space-y-2">
              <div className="mb-3">
                <h1 className="text-3xl font-bold text-foreground mb-2">Quick Links</h1>
              </div>
              {markdownData.map((document) => {
                return (
                  <div
                    key={document.id}
                    className="bg-inherit rounded-lg shadow-sm border border-border overflow-hidden"
                  >
                    <div className=" px-6 py-2 border-b border-border">
                      <h2 className="text-xl font-semibold text-foreground">{document.title}</h2>
                    </div>

                    <div className="p-3">
                      <div className="space-y-6">
                        {document.categories.map((category, categoryIndex) => {
                          return (
                            <div key={categoryIndex} className="space-y-3">
                              <h3 className="text-lg font-medium text-foreground flex items-center">
                                {category.title}
                              </h3>

                              <div className="flex flex-wrap gap-2 ml-5">
                                {category?.documents?.map((doc, docIdx) => {
                                  return (
                                    <Button
                                      variant={'outline'}
                                      size={'xs'}
                                      key={docIdx}
                                      onClick={() => {
                                        handleDocumentSelect(doc);
                                        setIsSearchDialogOpen(false);
                                      }}
                                    >
                                      {doc.title}
                                    </Button>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultsDialog;
