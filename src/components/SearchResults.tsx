import { MarkdownDocument } from '../data/markdown-content';
import { FileText, Search } from 'lucide-react';

interface SearchResultsProps {
  results: MarkdownDocument[];
  searchTerm: string;
  onDocumentSelect: (document: MarkdownDocument) => void;
}

export function SearchResults({ results, searchTerm, onDocumentSelect }: SearchResultsProps) {
  if (!searchTerm) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center space-y-4 max-w-md">
          <Search className="w-16 h-16 text-muted-foreground mx-auto" />
          <h2 className="text-2xl font-semibold text-foreground">No results found</h2>
          <p className="text-muted-foreground">
            No documents match your search for "{searchTerm}". Try different keywords or browse the categories.
          </p>
        </div>
      </div>
    );
  }

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getExcerpt = (content: string, searchTerm: string, maxLength: number = 200) => {
    const lowerContent = content.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    const index = lowerContent.indexOf(lowerSearchTerm);

    if (index === -1) {
      return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
    }

    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + searchTerm.length + 150);
    const excerpt = content.substring(start, end);

    return (start > 0 ? '...' : '') + excerpt + (end < content.length ? '...' : '');
  };

  return (
    <div className="flex-1 bg-background">
      <div className="p-4 lg:p-6 border-b border-border">
        <h2 className="text-xl font-semibold text-foreground">Search Results for "{searchTerm}"</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Found {results.length} {results.length === 1 ? 'result' : 'results'}
        </p>
      </div>

      <div className="p-4 lg:p-6">
        <div className="space-y-4">
          {results.map((document) => {
            const excerpt = getExcerpt(document.content, searchTerm);

            return (
              <div
                key={document.id}
                onClick={() => onDocumentSelect(document)}
                className="p-4 border border-border rounded-lg hover:bg-accent hover:border-accent-foreground/20 cursor-pointer transition-colors group"
              >
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-muted-foreground mt-0.5 group-hover:text-accent-foreground" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-accent-foreground mb-2">
                      {highlightText(document.title, searchTerm)}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80 line-clamp-3">
                      {highlightText(excerpt, searchTerm)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
