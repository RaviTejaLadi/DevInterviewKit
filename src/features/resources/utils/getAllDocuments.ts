import { markdownData } from '@/data';
import { MarkdownDocument } from '@/types/markdown-content-types';

// Cache for processed documents - only computed once
let allDocumentsCache: MarkdownDocument[] | null = null;

export const getAllDocuments = (): MarkdownDocument[] => {
  if (allDocumentsCache) return allDocumentsCache;

  const docs: MarkdownDocument[] = [];
  const collectFromCategory = (category: any) => {
    if (category.documents && Array.isArray(category.documents)) {
      docs.push(...category.documents);
    }
    if (category.document) {
      docs.push(category.document);
    }
    if (category.children && Array.isArray(category.children)) {
      category.children.forEach((child: any) => collectFromCategory(child));
    }
  };
  markdownData.forEach((section) => {
    section.categories.forEach((category) => {
      collectFromCategory(category);
    });
  });

  allDocumentsCache = docs;
  return docs;
};
