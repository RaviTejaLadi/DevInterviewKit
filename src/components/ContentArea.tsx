import { MarkdownDocument } from '@/types/markdown-content-types';
import MarkdownRenderer from './MarkdownRenderer';
import { memo } from 'react';

interface ContentAreaProps {
  selectedDocument: MarkdownDocument | null;
}

const ContentArea = ({ selectedDocument }: ContentAreaProps) => {
  if (!selectedDocument) return null;
  return <MarkdownRenderer docContent={selectedDocument} />;
};

export default memo(ContentArea);
