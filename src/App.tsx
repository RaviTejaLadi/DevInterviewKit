import { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { SearchResults } from './components/SearchResults';
import { markdownData } from './data/markdown-content';
import { Navbar } from './components/NavBar';
import { ThemeProvider } from './context/ThemeContext';
import { MarkdownDocument } from './types/markdown-content-types';

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

        <div className=" mt-11 flex h-screen ">
          <Sidebar
            categories={markdownData}
            selectedDocument={selectedDocument}
            onDocumentSelect={handleDocumentSelect}
          />

          {showSearchResults ? (
            <SearchResults results={searchResults} searchTerm={searchTerm} onDocumentSelect={handleDocumentSelect} />
          ) : (
            <ContentArea selectedDocument={selectedDocument} />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
