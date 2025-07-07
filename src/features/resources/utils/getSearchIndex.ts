import { SearchIndex } from '../types/search-index';
import { getAllDocuments } from './getAllDocuments';

let searchIndexCache: SearchIndex | null = null;

export const getSearchIndex = (): SearchIndex => {
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
