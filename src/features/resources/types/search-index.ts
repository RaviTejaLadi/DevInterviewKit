import { MarkdownDocument } from '@/types/markdown-content-types';

export interface SearchIndex {
  [key: string]: {
    document: MarkdownDocument;
    titleWords: string[];
    contentWords: string[];
  };
}
