import { useState, useEffect, useMemo, memo } from 'react';
import { Section, MarkdownDocument, Category } from '@/types/markdown-content-types';
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

  // Helper: find all ancestor category ids for a document id within a section's categories
  const findAncestorIdsForDoc = (categories: Category[], docId: string, path: string[] = []): string[] | null => {
    for (const category of categories) {
      const currentPath = [...path, category.id];
      // Single document match
      if (category.document && category.document.id === docId) {
        return currentPath;
      }
      // Multiple documents match
      if (category.documents && category.documents.some((doc) => doc.id === docId)) {
        return currentPath;
      }
      // Recurse into children
      if (category.children && category.children.length > 0) {
        const foundInChild = findAncestorIdsForDoc(category.children, docId, currentPath);
        if (foundInChild) return foundInChild;
      }
    }
    return null;
  };

  // Initialize expanded categories based on saved document
  useEffect(() => {
    const savedDocumentId = localStorage.getItem('selectedDocumentId');
    if (!savedDocumentId) return;

    // Find the ancestor chain to expand
    for (const section of sections) {
      const ancestors = findAncestorIdsForDoc(section.categories, savedDocumentId);
      if (ancestors && ancestors.length > 0) {
        setExpandedCategories(new Set(ancestors));
        break;
      }
    }
  }, [sections]);

  // Filter sections and categories based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return sections;
    }

    const query = searchQuery.toLowerCase();

    const filterCategory = (category: Category): Category | null => {
      const categoryMatches = category.title.toLowerCase().includes(query);

      const filteredDocuments = (category.documents || []).filter(
        (doc) => doc.title.toLowerCase().includes(query) || doc.content?.toLowerCase().includes(query)
      );

      const singleDocumentMatches =
        !!category.document &&
        (category.document.title.toLowerCase().includes(query) || category.document.content?.toLowerCase().includes(query));

      const filteredChildren = (category.children || [])
        .map((child) => filterCategory(child))
        .filter(Boolean) as Category[];

      const shouldInclude = categoryMatches || filteredDocuments.length > 0 || singleDocumentMatches || filteredChildren.length > 0;

      if (!shouldInclude) return null;

      return {
        ...category,
        documents: filteredDocuments.length > 0 ? filteredDocuments : category.documents,
        children: filteredChildren.length > 0 ? filteredChildren : category.children,
      };
    };

    return sections
      .map((section) => {
        const filteredCategories = section.categories
          .map((category) => filterCategory(category))
          .filter(Boolean) as Category[];

        if (filteredCategories.length === 0) return null;

        return {
          ...section,
          categories: filteredCategories,
        };
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

    const traverse = (category: Category, ancestors: string[], sectionTitle: string) => {
      // Single document
      if (
        category.document &&
        (category.document.title.toLowerCase().includes(query) || category.document.content?.toLowerCase().includes(query))
      ) {
        results.push({ document: category.document, categoryTitle: [...ancestors, category.title].join(' / '), sectionTitle });
      }
      // Multiple documents
      (category.documents || []).forEach((doc) => {
        if (doc.title.toLowerCase().includes(query) || doc.content?.toLowerCase().includes(query)) {
          results.push({ document: doc, categoryTitle: [...(ancestors || []), category.title].join(' / '), sectionTitle });
        }
      });
      // Children
      (category.children || []).forEach((child) => traverse(child, [...ancestors, category.title], sectionTitle));
    };

    sections.forEach((section) => {
      const currentSectionTitle = section.title;
      section.categories.forEach((category) => traverse(category, [], currentSectionTitle));
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
