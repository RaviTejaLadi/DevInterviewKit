import { MarkdownDocument } from '@/types/markdown-content-types';
import { memo } from 'react';
import MarkdownRenderer from '../../../components/MarkdownRenderer';

interface ContentAreaProps {
  selectedDocument: MarkdownDocument | null;
}

const ContentArea = ({ selectedDocument }: ContentAreaProps) => {
  if (!selectedDocument) return null;
  return <MarkdownRenderer docContent={selectedDocument} />;
};

export default memo(ContentArea);
