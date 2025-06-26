import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronRight, X, Search, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import { Section, MarkdownDocument } from '@/types/markdown-content-types';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import Logo from './Logo';
import { useMobileStore } from '@/stores/useMobileStore';
import { Button } from './ui/button';
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
    <div className="space-y-2">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-sm font-medium text-muted-foreground">
          {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
        </span>
        <Button variant="ghost" size="sm" onClick={clearSearch} className="h-6 px-2 text-xs">
          Clear
        </Button>
      </div>

      {searchResults.length === 0 ? (
        <div className="px-3 py-8 text-center text-muted-foreground">
          <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No documents found</p>
          <p className="text-xs mt-1">Try adjusting your search terms</p>
        </div>
      ) : (
        <div className="space-y-1">
          {searchResults.map(({ document, categoryTitle, sectionTitle }, index) => (
            <button
              key={`${document.id}-${index}`}
              onClick={() => handleDocumentSelect(document)}
              className={cn(
                'w-full text-left p-3 text-sm hover:bg-accent rounded-md transition-colors group',
                selectedDocument?.id === document.id &&
                  'bg-blue-500/20 border-blue-200 border border-border shadow-sm dark:bg-gray-200/10'
              )}
            >
              <div className="flex items-start space-x-2">
                <FileText className="w-4 h-4 mt-0.5 text-muted-foreground group-hover:text-foreground" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground truncate">
                    {highlightText(document?.title, searchQuery)}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    in {sectionTitle} → {categoryTitle}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const renderSectionView = () => (
    <div className="space-y-8">
      {filteredSections.map((section) => (
        <div key={section.id} className="space-y-2">
          {/* Section Heading */}
          <div className="px-2 ">
            <p className="text-[0.6rem] font-medium text-muted-foreground uppercase tracking-wide">{section.title}</p>
          </div>

          {/* Categories in this section */}
          <div className="space-y-2">
            {section.categories.map((category, index) => {
              const { Icon } = category;
              const isExpanded = expandedCategories.has(category.id);
              const hasMultipleDocuments = category.documents && category.documents.length > 0;
              const singleDocument = category.document;

              return (
                <div key={category.id} className="space-y-[0.5px]">
                  {hasMultipleDocuments ? (
                    <>
                      <button
                        onClick={() => toggleCategory(category.id)}
                        style={{ animationDelay: `${index * 100}ms` }}
                        className={cn(
                          'group w-full relative flex items-center justify-between py-1 px-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors',
                          'cursor-pointer transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm animate-in fade-in-50 slide-in-from-bottom-4'
                        )}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="flex items-center space-x-2">
                          {isExpanded && (
                            <div className="w-1 h-4 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                          )}
                          {Icon ? <Icon className="w-4 h-4 mr-1" /> : ''}
                          <span>{highlightText(category.title, searchQuery)}</span>
                        </div>
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}

                        <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                      </button>

                      {isExpanded && (
                        <div className="ml-6 space-y-1">
                          {category?.documents?.map((document) => (
                            <button
                              key={document.id}
                              onClick={() => handleDocumentSelect(document)}
                              className={cn(
                                'flex gap-2 items-center justify-start w-full text-left py-1 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors',
                                selectedDocument?.id === document.id &&
                                  'bg-blue-500/20 border-blue-200 border border-border shadow-sm dark:bg-gray-200/10 font-medium text-foreground'
                              )}
                            >
                              {selectedDocument?.id === document.id && (
                                <div className="w-1 h-4 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                              )}
                              {highlightText(document.title, searchQuery)}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : singleDocument ? (
                    <button
                      onClick={() => handleDocumentSelect(singleDocument)}
                      style={{ animationDelay: `${index * 100}ms` }}
                      className={cn(
                        'group w-full relative flex items-center justify-between py-1 px-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors',
                        'cursor-pointer transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm animate-in fade-in-50 slide-in-from-bottom-4',
                        selectedDocument?.id === singleDocument.id &&
                          'bg-blue-500/20 border-blue-200 border border-border shadow-sm dark:bg-gray-200/10 font-medium text-foreground'
                      )}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="flex items-center space-x-2">
                        {Icon ? <Icon className="w-4 h-4 mr-1" /> : ''}
                        <span>{highlightText(category.title, searchQuery)}</span>
                      </div>

                      <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                    </button>
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
    <div className="h-full w-[18rem] flex flex-col">
      {/* Search Input */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted"
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        {searchQuery.trim() ? renderSearchResults() : renderSectionView()}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Desktop sidebar */}
      <aside className={cn('hidden lg:block w-80 bg-background border-r border-border', className)}>
        <ScrollArea className="h-screen">{sidebarContent}</ScrollArea>
      </aside>

      {/* Mobile sidebar */}
      <aside
        className={cn(
          'lg:hidden fixed left-0 top-0 z-50 w-80 h-full bg-background border-r border-border transform transition-transform duration-200 ease-in-out',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between items-center mx-4">
          <div className="px-6 py-5">
            <Logo />
          </div>

          <Button variant={'outline'} size={'icon'} onClick={() => setIsMobileOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="h-screen">{sidebarContent}</ScrollArea>
      </aside>
    </>
  );
}
