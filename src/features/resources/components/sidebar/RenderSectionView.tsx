import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { MarkdownDocument, Section } from '@/types/markdown-content-types';
import { highlightText } from '@/utils/highlightText';
import { Button } from 'kalki-ui';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface RenderSectionViewProps {
  filteredSections: Section[];
  selectedDocument: MarkdownDocument | null;
  handleDocumentSelect: (document: MarkdownDocument) => void;
  toggleCategory: (categoryId: string) => void;
  expandedCategories: Set<string | null>;
  searchQuery: string;
}
const RenderSectionView = ({
  filteredSections,
  selectedDocument,
  handleDocumentSelect,
  toggleCategory,
  expandedCategories,
  searchQuery,
}: RenderSectionViewProps) => {
  return (
    <div className="space-y-6 pb-[5rem]">
      {filteredSections.map((section) => (
        <div key={section.id} className="space-y-3">
          {/* Section Heading */}
          <div className="px-1">
            <p className="text-[0.6rem] font-medium text-muted-foreground uppercase tracking-wide">{section.title}</p>
          </div>

          <Separator className="my-2 h-[0.5px]" />

          {/* Categories in this section */}
          <div className="space-y-1">
            {section.categories.map((category, index) => {
              const { Icon } = category;
              const isExpanded = expandedCategories.has(category.id);
              const hasMultipleDocuments = category.documents && category.documents.length > 0;
              const singleDocument = category.document;

              return (
                <div key={category.id} className="space-y-1">
                  {hasMultipleDocuments ? (
                    <>
                      <Button
                        variant="ghost"
                        onClick={() => toggleCategory(category.id)}
                        style={{ animationDelay: `${index * 100}ms` }}
                        className={cn(
                          'group w-full justify-between py-2 px-3 h-auto font-medium hover:bg-accent transition-all duration-300',
                          'animate-in fade-in-50 slide-in-from-bottom-4',
                          isExpanded && 'bg-accent/50'
                        )}
                      >
                        <div className="flex items-center space-x-2">
                          {isExpanded && (
                            <div className="w-1 h-4 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                          )}
                          {Icon && <Icon className="w-4 h-4" />}
                          <span className="text-left">{highlightText(category.title, searchQuery)}</span>
                        </div>
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </Button>

                      {isExpanded && (
                        <div className="ml-6 space-y-1">
                          {category?.documents?.map((document) => (
                            <Button
                              key={document.id}
                              variant="ghost"
                              onClick={() => handleDocumentSelect(document)}
                              className={cn(
                                'w-full justify-start py-2 px-3 h-auto text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors',
                                selectedDocument?.id === document.id &&
                                  'bg-primary/10 border border-primary/20 font-medium text-foreground hover:bg-primary/15'
                              )}
                            >
                              <div className="flex items-center gap-2 w-full">
                                {selectedDocument?.id === document.id && (
                                  <div className="w-1 h-4 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                                )}
                                <span className="text-left">{highlightText(document.title, searchQuery)}</span>
                              </div>
                            </Button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : singleDocument ? (
                    <Button
                      variant="ghost"
                      onClick={() => handleDocumentSelect(singleDocument)}
                      style={{ animationDelay: `${index * 100}ms` }}
                      className={cn(
                        'group w-full justify-start py-2 px-3 h-auto font-medium hover:bg-accent transition-all duration-300',
                        'animate-in fade-in-50 slide-in-from-bottom-4',
                        selectedDocument?.id === singleDocument.id &&
                          'bg-primary/10 border border-primary/20 hover:bg-primary/15'
                      )}
                    >
                      <div className="flex items-center space-x-2 w-full">
                        {selectedDocument?.id === singleDocument.id && (
                          <div className="w-1 h-4 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                        )}
                        {Icon && <Icon className="w-4 h-4" />}
                        <span className="text-left">{highlightText(category.title, searchQuery)}</span>
                      </div>
                    </Button>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderSectionView;
