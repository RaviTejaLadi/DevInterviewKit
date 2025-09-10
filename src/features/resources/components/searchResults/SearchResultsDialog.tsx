import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog/dialog';
import { Input } from '@/components/ui/input';
import { useOpenSearchDialog } from '@/stores/useOpenSearchDialog';
import { useSearchTermStore } from '@/stores/useSearchTermStore';
import { MarkdownDocument } from '@/types/markdown-content-types';
import { Button } from 'kalki-ui';
import { Search, X, ChevronRight, ChevronDown } from 'lucide-react';
import SearchResults from './SearchResults';
import { ScrollArea } from '@/components/ui/scroll-area';
import { markdownData } from '@/data';
import { useState } from 'react';

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
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderCategory = (category: any, parentKey: string = '', depth: number = 0) => {
    const key = parentKey ? `${parentKey}/${category.id}` : category.id;
    const hasChildren = Array.isArray(category?.children) && category.children.length > 0;
    const hasDocumentsArray = Array.isArray(category?.documents) && category.documents.length > 0;
    const hasSingleDocument = Boolean(category?.document);
    const isOpen = Boolean(expanded[key]);

    return (
      <div key={key} className="space-y-2">
        {category.title && (
          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() => toggleExpanded(key)}
            className="w-full flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-muted/60 transition-colors"
          >
            <div className="flex items-center gap-2 text-left">
              {isOpen ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
              <span className={depth === 0 ? 'text-sm font-medium text-foreground' : 'text-sm text-foreground'}>
                {category.title}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {hasChildren
                ? `${category.children.length} groups`
                : hasDocumentsArray
                ? `${category.documents.length} links`
                : hasSingleDocument
                ? '1 link'
                : ''}
            </span>
          </button>
        )}

        {/* Content: only render when open */}
        {isOpen && (
          <div className={depth === 0 ? 'ml-2' : 'ml-4'}>
            {/* Render direct documents array */}
            {hasDocumentsArray && (
              <div className="flex flex-wrap gap-2 mt-1">
                {category.documents.map((doc: any) => (
                  <Button
                    variant={'outline'}
                    size={'xs'}
                    key={doc.id}
                    onClick={() => {
                      handleDocumentSelect(doc);
                      setIsSearchDialogOpen(false);
                    }}
                  >
                    {doc.title}
                  </Button>
                ))}
              </div>
            )}

            {/* Render single document object */}
            {hasSingleDocument && (
              <div className="flex flex-wrap gap-2 mt-1">
                <Button
                  variant={'outline'}
                  size={'xs'}
                  key={category.document.id}
                  onClick={() => {
                    handleDocumentSelect(category.document);
                    setIsSearchDialogOpen(false);
                  }}
                >
                  {category.document.title}
                </Button>
              </div>
            )}

            {/* Render nested children recursively */}
            {hasChildren && (
              <div className="space-y-2 mt-2">
                {category.children.map((child: any) => renderCategory(child, key, depth + 1))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  return (
    <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
      <DialogContent className="p-0 w-[88%] max-w-5xl h-[82vh] border-border overflow-hidden">
        <DialogHeader>
          <div className="sticky top-0 z-20 w-full bg-inherit/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                aria-label="Search topics"
                type="text"
                placeholder="Search topics, cheatsheets, concepts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-9 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              {searchTerm && (
                <Button
                  aria-label="Clear search"
                  title="Clear"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 hover:bg-muted"
                >
                  <X className="w-3.5 h-3.5" />
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="h-full">
          {showSearchResults ? (
            <SearchResults
              results={searchResults}
              searchTerm={debouncedSearchTerm}
              onDocumentSelect={handleDocumentSelect}
            />
          ) : (
            <div className="p-4">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-foreground">Quick Links</h1>
                <p className="text-sm text-muted-foreground">Jump into popular sections and topics</p>
              </div>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 [column-fill:_balance]">
                {markdownData.map((document) => {
                  return (
                    <div
                      key={document.id}
                      className="inline-block w-full mb-3 align-top break-inside-avoid bg-card rounded-lg border border-border hover:border-ring/60 transition-colors overflow-hidden shadow-sm"
                    >
                      <div className="px-4 py-3 border-b border-border/60 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-foreground">{document.title}</h2>
                      </div>

                      <div className="p-3 space-y-4">
                        {document.categories.map((category) => (
                          <div key={category.id} className="space-y-2">
                            {category.title && (
                              <h3 className="text-sm font-medium text-foreground/90">{category.title}</h3>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {/* Use existing recursive renderer to support children/doc/document */}
                              <div className="w-full">{renderCategory(category)}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultsDialog;
