import Loading from '@/components/Loading';
import Sidebar from '@/components/sidebar/Sidebar';
import { markdownData } from '@/data';
import { useSearchTermStore } from '@/stores/useSearchTermStore';
import { MarkdownDocument } from '@/types/markdown-content-types';
import { lazy, memo, Suspense, useEffect, useMemo, useState, useCallback } from 'react';

const ContentArea = lazy(() => import('@/components/ContentArea'));
const SearchResults = lazy(() => import('@/components/SearchResults'));

// Cache for processed documents - only computed once
let allDocumentsCache: MarkdownDocument[] | null = null;

const getAllDocuments = (): MarkdownDocument[] => {
  if (allDocumentsCache) return allDocumentsCache;

  const docs: MarkdownDocument[] = [];
  markdownData.forEach((section) => {
    section.categories.forEach((category) => {
      if (category.documents) {
        docs.push(...category.documents);
      } else if (category.document) {
        docs.push(category.document);
      }
    });
  });

  allDocumentsCache = docs;
  return docs;
};

// Create search index for faster searching
interface SearchIndex {
  [key: string]: {
    document: MarkdownDocument;
    titleWords: string[];
    contentWords: string[];
  };
}

let searchIndexCache: SearchIndex | null = null;

const getSearchIndex = (): SearchIndex => {
  if (searchIndexCache) return searchIndexCache;

  const index: SearchIndex = {};
  const allDocs = getAllDocuments();

  allDocs.forEach((doc) => {
    index[doc.id] = {
      document: doc,
      titleWords: doc.title.toLowerCase().split(/\s+/),
      contentWords: doc.content.toLowerCase().split(/\s+/),
    };
  });

  searchIndexCache = index;
  return index;
};

// Debounce hook for search
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
const ResourcesContent = () => {
  const allDocuments = useMemo(() => getAllDocuments(), []);

  // Initialize selected document from localStorage or default to first document
  const [selectedDocument, setSelectedDocument] = useState<MarkdownDocument | null>(() => {
    try {
      const savedDocumentId = localStorage.getItem('selectedDocumentId');
      if (savedDocumentId) {
        const savedDoc = allDocuments.find((doc) => doc.id === savedDocumentId);
        if (savedDoc) return savedDoc;
      }
    } catch (error) {
      console.warn('Error reading from localStorage:', error);
    }
    return allDocuments[0] || null;
  });

  const { searchTerm, setSearchTerm } = useSearchTermStore();

  // Debounce search term to avoid excessive re-renders
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Save selected document to localStorage whenever it changes
  useEffect(() => {
    if (selectedDocument) {
      try {
        localStorage.setItem('selectedDocumentId', selectedDocument.id);
      } catch (error) {
        console.warn('Error saving to localStorage:', error);
      }
    }
  }, [selectedDocument]);

  // Optimized search functionality using search index
  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return [];

    const results: MarkdownDocument[] = [];
    const lowerSearchTerm = debouncedSearchTerm.toLowerCase();
    const searchWords = lowerSearchTerm.split(/\s+/).filter((word) => word.length > 0);

    // Early return if no search words
    if (searchWords.length === 0) return [];

    const searchIndex = getSearchIndex();

    // Use search index for faster lookup
    Object.values(searchIndex).forEach(({ document, titleWords, contentWords }) => {
      const titleMatch = searchWords.some((searchWord) =>
        titleWords.some((titleWord) => titleWord.includes(searchWord))
      );

      const contentMatch =
        !titleMatch &&
        searchWords.some((searchWord) => contentWords.some((contentWord) => contentWord.includes(searchWord)));

      if (titleMatch || contentMatch) {
        results.push(document);
      }
    });

    // Sort results: title matches first, then content matches
    return results.sort((a, b) => {
      const aTitleMatch = searchWords.some((searchWord) => a.title.toLowerCase().includes(searchWord));
      const bTitleMatch = searchWords.some((searchWord) => b.title.toLowerCase().includes(searchWord));

      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      return 0;
    });
  }, [debouncedSearchTerm]);

  const handleDocumentSelect = useCallback(
    (document: MarkdownDocument) => {
      setSelectedDocument(document);
      setSearchTerm(''); // Clear search when selecting a document
    },
    [setSearchTerm]
  );

  const showSearchResults = debouncedSearchTerm.trim().length > 0;

  return (
    <div className="flex h-full">
      <Sidebar sections={markdownData} selectedDocument={selectedDocument} onDocumentSelect={handleDocumentSelect} />
      <Suspense fallback={<Loading />}>
        {showSearchResults ? (
          <SearchResults
            results={searchResults}
            searchTerm={debouncedSearchTerm}
            onDocumentSelect={handleDocumentSelect}
          />
        ) : (
          <ContentArea selectedDocument={selectedDocument} />
        )}
      </Suspense>
    </div>
  );
};

export default memo(ResourcesContent);
