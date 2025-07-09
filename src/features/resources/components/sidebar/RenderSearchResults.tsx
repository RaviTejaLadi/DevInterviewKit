import { cn } from '@/lib/utils';
import { MarkdownDocument } from '@/types/markdown-content-types';
import { highlightText } from '@/utils/highlightText';
import { Button, Card, CardContent } from 'kalki-ui';
import { FileText } from 'lucide-react';

interface ResultItem {
  document: MarkdownDocument;
  categoryTitle: string;
  sectionTitle: string;
}

interface RenderSearchResultsProps {
  searchResults: ResultItem[];
  clearSearch: () => void;
  handleDocumentSelect: (document: MarkdownDocument) => void;
  searchQuery: string;
  selectedDocument: MarkdownDocument | null;
}
const RenderSearchResults = ({
  searchResults,
  clearSearch,
  handleDocumentSelect,
  searchQuery,
  selectedDocument,
}: RenderSearchResultsProps) => {
  return (
    <div className="space-y-4 w-[17rem]">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
        </span>
        <Button variant="outline" size="sm" onClick={clearSearch} className="h-7 px-2 text-xs">
          Clear
        </Button>
      </div>

      {searchResults.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8 text-center">
            <FileText className="w-8 h-8 mb-2 text-muted-foreground opacity-50" />
            <p className="text-sm text-muted-foreground">No documents found</p>
            <p className="text-xs text-muted-foreground mt-1">Try adjusting your search terms</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {searchResults?.map(({ document, categoryTitle, sectionTitle }, index) => (
            <Card key={`${document.id}-${index}`} className="overflow-hidden border border-border">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  onClick={() => handleDocumentSelect(document)}
                  className={cn(
                    'w-full h-auto p-3 text-left justify-start hover:bg-accent transition-colors group',
                    selectedDocument?.id === document.id && 'bg-primary/10 border-primary/20 hover:bg-primary/15'
                  )}
                >
                  <div className="flex items-start space-x-3 w-full">
                    <FileText className="w-4 h-4 mt-0.5 text-muted-foreground group-hover:text-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0 text-left">
                      <div className="font-medium text-foreground truncate">
                        {highlightText(document?.title, searchQuery)}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        in {sectionTitle} → {categoryTitle}
                      </div>
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RenderSearchResults;
