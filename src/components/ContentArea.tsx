import { MarkdownDocument } from '@/types/markdown-content-types';
import MarkdownRenderer from './MarkdownRenderer';

interface ContentAreaProps {
  selectedDocument: MarkdownDocument | null;
}

export function ContentArea({ selectedDocument }: ContentAreaProps) {
  return <MarkdownRenderer docContent={selectedDocument} />;
}
