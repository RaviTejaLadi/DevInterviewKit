import { markdownData } from '@/data';
import { MarkdownDocument } from '@/types/markdown-content-types';

// Cache for processed documents - only computed once
let allDocumentsCache: MarkdownDocument[] | null = null;

export const getAllDocuments = (): MarkdownDocument[] => {
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
