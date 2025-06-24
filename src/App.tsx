import { useState, useMemo, lazy, Suspense, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';

import { markdownData } from './data';
import { Navbar } from './components/NavBar';
import { ThemeProvider } from './context/ThemeContext';
import { MarkdownDocument } from './types/markdown-content-types';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Lazy-loaded components
const ContentArea = lazy(() => import('./components/ContentArea').then((module) => ({ default: module.ContentArea })));
const SearchResults = lazy(() =>
  import('./components/SearchResults').then((module) => ({ default: module.SearchResults }))
);

function App() {
  // Get all available documents for selection and persistence
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

  const [searchTerm, setSearchTerm] = useState('');

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
    <ThemeProvider>
      <div className=" bg-background text-foreground">
        <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className=" mt-11 flex h-full ">
          <Sidebar
            sections={markdownData}
            selectedDocument={selectedDocument}
            onDocumentSelect={handleDocumentSelect}
          />
          <Suspense fallback={<Loading />}>
            {showSearchResults ? (
              <SearchResults results={searchResults} searchTerm={searchTerm} onDocumentSelect={handleDocumentSelect} />
            ) : (
              <ContentArea selectedDocument={selectedDocument} />
            )}
          </Suspense>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
