import { MarkdownDocument } from '@/types/markdown-content-types';
import { highlightText } from '@/utils/highlightText';
import { FileText, Search, Sparkles } from 'lucide-react';
import { memo } from 'react';

interface SearchResultsProps {
  results: MarkdownDocument[];
  searchTerm: string;
  onDocumentSelect: (document: MarkdownDocument) => void;
}

const SearchResults = ({ results, searchTerm, onDocumentSelect }: SearchResultsProps) => {
  if (!searchTerm) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 min-h-[60vh]">
        <div className="text-center space-y-6 max-w-md animate-in fade-in-50 duration-700">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
            <Search className="relative w-20 h-20 text-muted-foreground mx-auto opacity-60" />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              No results found
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              No documents match your search for{' '}
              <span className="font-semibold text-foreground bg-muted px-2 py-1 rounded-md">"{searchTerm}"</span>
              <br />
              Try different keywords or browse the categories.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const getExcerpt = (content: string, searchTerm: string, maxLength: number = 200): string => {
    if (!content || maxLength <= 0) return '';

    const lowerContent = content.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    const index = lowerContent.indexOf(lowerSearchTerm);

    // If no match, return the start slice
    if (index === -1) {
      return content.length > maxLength ? content.slice(0, maxLength).trimEnd() + '...' : content;
    }

    // Calculate start and end to center the searchTerm
    const halfMax = Math.floor(maxLength / 2);
    let start = Math.max(0, index - halfMax);
    let end = start + maxLength;

    // Adjust if end exceeds content length
    if (end > content.length) {
      end = content.length;
      start = Math.max(0, end - maxLength);
    }

    let excerpt = content.slice(start, end).trim();

    if (start > 0) excerpt = '...' + excerpt;
    if (end < content.length) excerpt = excerpt + '...';

    return excerpt;
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-background via-background to-muted/10">
      {/* Enhanced Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm">
        <div className="p-6 lg:p-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Search Results
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-muted-foreground">for</span>
            <span className="font-semibold text-foreground bg-muted px-3 py-1 rounded-full">"{searchTerm}"</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              Found <span className="font-semibold text-foreground">{results.length}</span>{' '}
              {results.length === 1 ? 'result' : 'results'}
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Results */}
      <div className="p-6 lg:p-8">
        <div className="space-y-4 flex flex-wrap gap-2 justify-evenly items-center">
          {results.map((document, index) => {
            const excerpt = getExcerpt(document.content, searchTerm);

            return (
              <div
                key={document.id}
                onClick={() => onDocumentSelect(document)}
                className="group relative p-6 w-full h-auto border dark:border-gray-200/10 rounded-xl hover:border-border hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-in fade-in-50 slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-start space-x-4">
                  {/* Enhanced icon */}
                  <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-muted to-muted/50 rounded-lg group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300">
                    <FileText className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-3">
                    {/* Enhanced title */}
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {highlightText(document.title, searchTerm)}
                    </h3>

                    {/* Enhanced excerpt */}
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 line-clamp-3 leading-relaxed">
                        {highlightText(excerpt, searchTerm)}
                      </p>
                    </div>
                  </div>

                  {/* Subtle arrow indicator */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>

                {/* Enhanced hover border effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Results footer */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-center text-sm text-muted-foreground">
            End of search results • Click any document to view details
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(SearchResults);
