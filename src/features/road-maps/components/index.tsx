import Loading from '@/components/Loading';
import ContentArea from '@/features/resources/components/ContentArea';
import Sidebar from '@/features/resources/components/sidebar/Sidebar';
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { roadmapMainData } from '../data';
import { MarkdownDocument } from '@/types/markdown-content-types';
import { getAllDocuments } from '@/features/resources/utils/getAllDocuments';

const RoadmapDemo = () => {
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

  const handleDocumentSelect = useCallback((document: MarkdownDocument) => {
    setSelectedDocument(document);
  }, []);

  return (
    <div className="flex h-full">
      <Sidebar sections={roadmapMainData} selectedDocument={selectedDocument} onDocumentSelect={handleDocumentSelect} />
      <Suspense fallback={<Loading />}>
        <ContentArea selectedDocument={selectedDocument} />
      </Suspense>
    </div>
  );
};

export default RoadmapDemo;
