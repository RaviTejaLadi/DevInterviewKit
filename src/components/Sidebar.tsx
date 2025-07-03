import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronRight, X, Search, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import { Section, MarkdownDocument } from '@/types/markdown-content-types';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Separator } from './ui/separator';
import { Card, CardContent } from './ui/card';
import Logo from './Logo';
import { useMobileStore } from '@/stores/useMobileStore';
import { highlightText } from '@/utils/highlightText';

interface SidebarProps {
  sections: Section[];
  selectedDocument: MarkdownDocument | null;
  onDocumentSelect: (document: MarkdownDocument) => void;
  className?: string;
}

export function Sidebar({ sections, selectedDocument, onDocumentSelect, className }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string | null>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const { isMobileOpen, setIsMobileOpen } = useMobileStore();

  // Initialize expanded categories based on saved document
  useEffect(() => {
    const savedDocumentId = localStorage.getItem('selectedDocumentId');
    if (!savedDocumentId) return;

    // Find the category that contains the saved document
    let categoryToExpand: string | null = null;

    for (const section of sections) {
      for (const category of section.categories) {
        // Check if category has a single document that matches
        if (category.document && category.document.id === savedDocumentId) {
          categoryToExpand = category.id;
          break;
        }

        // Check if category has multiple documents that include the saved one
        if (category.documents) {
          const foundDoc = category.documents.find((doc) => doc.id === savedDocumentId);
          if (foundDoc) {
            categoryToExpand = category.id;
            break;
          }
        }
      }
      if (categoryToExpand) break;
    }

    if (categoryToExpand) {
      setExpandedCategories(new Set([categoryToExpand]));
    }
  }, [sections]);

  // Filter sections and categories based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return sections;
    }

    const query = searchQuery.toLowerCase();

    return sections
      .map((section) => {
        const filteredCategories = section.categories
          .map((category) => {
            // Check if category title matches
            const categoryMatches = category.title.toLowerCase().includes(query);

            // Filter documents within the category
            let filteredDocuments: MarkdownDocument[] = [];

            if (category.documents) {
              filteredDocuments = category.documents.filter(
                (doc) => doc.title.toLowerCase().includes(query) || doc.content?.toLowerCase().includes(query)
              );
            }

            // Check single document
            const singleDocumentMatches =
              category.document &&
              (category.document.title.toLowerCase().includes(query) ||
                category.document.content?.toLowerCase().includes(query));

            // Include category if it matches or has matching documents
            if (categoryMatches || filteredDocuments.length > 0 || singleDocumentMatches) {
              return {
                ...category,
                documents: filteredDocuments.length > 0 ? filteredDocuments : category.documents,
              };
            }

            return null;
          })
          .filter(Boolean);

        // Include section if it has matching categories
        if (filteredCategories.length > 0) {
          return {
            ...section,
            categories: filteredCategories,
          };
        }

        return null;
      })
      .filter(Boolean) as Section[];
  }, [sections, searchQuery]);

  // Get all matching documents for search results view
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    const results: Array<{ document: MarkdownDocument; categoryTitle: string; sectionTitle: string }> = [];

    sections.forEach((section) => {
      section.categories.forEach((category) => {
        // Check single document
        if (
          category.document &&
          (category.document.title.toLowerCase().includes(query) ||
            category.document.content?.toLowerCase().includes(query))
        ) {
          results.push({
            document: category.document,
            categoryTitle: category.title,
            sectionTitle: section.title,
          });
        }

        // Check multiple documents
        if (category.documents) {
          category.documents.forEach((doc) => {
            if (doc.title.toLowerCase().includes(query) || doc.content?.toLowerCase().includes(query)) {
              results.push({
                document: doc,
                categoryTitle: category.title,
                sectionTitle: section.title,
              });
            }
          });
        }
      });
    });

    return results;
  }, [sections, searchQuery]);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleDocumentSelect = (document: MarkdownDocument) => {
    onDocumentSelect(document);
    localStorage.setItem('selectedDocumentId', document.id);
    setIsMobileOpen(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const renderSearchResults = () => (
    <div className="space-y-4">
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
          {searchResults.map(({ document, categoryTitle, sectionTitle }, index) => (
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

  const renderSectionView = () => (
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

  const sidebarContent = (
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
      <ScrollArea className="flex-1 p-4">{searchQuery.trim() ? renderSearchResults() : renderSectionView()}</ScrollArea>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={cn('hidden lg:block w-80 bg-background border-r border-border', className)}>
        <ScrollArea className="h-screen">{sidebarContent}</ScrollArea>
      </aside>

      {/* Mobile sidebar using Sheet */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="w-80 p-0 border border-border">
          <SheetHeader className="px-4 py-2 border-b border-border">
            <SheetTitle className="text-left">
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-screen">{sidebarContent}</ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
