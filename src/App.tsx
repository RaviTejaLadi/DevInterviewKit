import { useState, useMemo, lazy, Suspense } from 'react';
import { Sidebar } from './components/Sidebar';

import { markdownData } from './data/markdown-content';
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
  const [selectedDocument, setSelectedDocument] = useState<MarkdownDocument | null>(
    markdownData[0]?.documents[0] || null
  );
  const [searchTerm, setSearchTerm] = useState('');

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const results: MarkdownDocument[] = [];
    const lowerSearchTerm = searchTerm.toLowerCase();

    markdownData.forEach((category) => {
      category.documents.forEach((document) => {
        const titleMatch = document.title.toLowerCase().includes(lowerSearchTerm);
        const contentMatch = document.content.toLowerCase().includes(lowerSearchTerm);

        if (titleMatch || contentMatch) {
          results.push(document);
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
            categories={markdownData}
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
