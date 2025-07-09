import { useState, useEffect, useMemo, memo } from 'react';
import { Section, MarkdownDocument } from '@/types/markdown-content-types';
import { useMobileStore } from '@/stores/useMobileStore';
import MobileSidebar from './MobileSidebar';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import RenderSearchResults from './RenderSearchResults';
import RenderSectionView from './RenderSectionView';
import SidebarContent from './SidebarContent';

interface SidebarProps {
  sections: Section[];
  selectedDocument: MarkdownDocument | null;
  onDocumentSelect: (document: MarkdownDocument) => void;
  className?: string;
}

const Sidebar = ({ sections, selectedDocument, onDocumentSelect, className }: SidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string | null>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const { setIsMobileOpen } = useMobileStore();

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

  const content = (
    <SidebarContent
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      clearSearch={clearSearch}
      renderSearchResults={
        <RenderSearchResults
          clearSearch={clearSearch}
          searchResults={searchResults}
          handleDocumentSelect={handleDocumentSelect}
          searchQuery={searchQuery}
          selectedDocument={selectedDocument}
        />
      }
      renderSectionView={
        <RenderSectionView
          filteredSections={filteredSections}
          selectedDocument={selectedDocument}
          handleDocumentSelect={handleDocumentSelect}
          toggleCategory={toggleCategory}
          expandedCategories={expandedCategories}
          searchQuery={searchQuery}
        />
      }
    />
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={cn('hidden lg:block w-80 bg-background border-r border-border', className)}>
        <ScrollArea className="h-screen">{content}</ScrollArea>
      </aside>

      {/* Mobile sidebar using Sheet */}
      <MobileSidebar sidebarContent={content} />
    </>
  );
};

export default memo(Sidebar);
