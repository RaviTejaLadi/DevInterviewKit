import Loading from '@/components/Loading';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { markdownData } from '@/data';
import { useSearchTermStore } from '@/stores/useSearchTermStore';
import { MarkdownDocument } from '@/types/markdown-content-types';
import { lazy, Suspense, useEffect, useMemo, useState } from 'react';

const ContentArea = lazy(() => import('@/components/ContentArea').then((module) => ({ default: module.ContentArea })));
const SearchResults = lazy(() =>
  import('@/components/SearchResults').then((module) => ({ default: module.SearchResults }))
);
const Home = () => {
  const allDocuments = useMemo(() => {
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
    return docs;
  }, []);

  // Initialize selected document from localStorage or default to first document
  const [selectedDocument, setSelectedDocument] = useState<MarkdownDocument | null>(() => {
    const savedDocumentId = localStorage.getItem('selectedDocumentId');
    if (savedDocumentId) {
      const savedDoc = allDocuments.find((doc) => doc.id === savedDocumentId);
      if (savedDoc) return savedDoc;
    }
    return allDocuments[0] || null;
  });

  const { searchTerm, setSearchTerm } = useSearchTermStore();

  // Save selected document to localStorage whenever it changes
  useEffect(() => {
    if (selectedDocument) {
      localStorage.setItem('selectedDocumentId', selectedDocument.id);
    }
  }, [selectedDocument]);

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const results: MarkdownDocument[] = [];
    const lowerSearchTerm = searchTerm.toLowerCase();

    markdownData.forEach((section) => {
      section.categories.forEach((category) => {
        if (category.documents) {
          category.documents.forEach((document) => {
            const titleMatch = document.title.toLowerCase().includes(lowerSearchTerm);
            const contentMatch = document.content.toLowerCase().includes(lowerSearchTerm);

            if (titleMatch || contentMatch) {
              results.push(document);
            }
          });
        } else if (category.document) {
          const titleMatch = category.document.title.toLowerCase().includes(lowerSearchTerm);
          const contentMatch = category.document.content.toLowerCase().includes(lowerSearchTerm);

          if (titleMatch || contentMatch) {
            results.push(category.document);
          }
        }
      });
    });

    return results;
  }, [searchTerm]);

  const handleDocumentSelect = (document: MarkdownDocument) => {
    setSelectedDocument(document);
    setSearchTerm(''); // Clear search when selecting a document
  };

  const showSearchResults = searchTerm.trim().length > 0;
  return (
    <div className="flex h-full">
      <Sidebar sections={markdownData} selectedDocument={selectedDocument} onDocumentSelect={handleDocumentSelect} />
      <Suspense fallback={<Loading />}>
        {showSearchResults ? (
          <SearchResults results={searchResults} searchTerm={searchTerm} onDocumentSelect={handleDocumentSelect} />
        ) : (
          <ContentArea selectedDocument={selectedDocument} />
        )}
      </Suspense>
    </div>
  );
};

export default Home;
