import { MarkdownDocument } from '@/types/markdown-content-types';
import { ScrollArea } from './ui/scroll-area';
import MarkdownRenderer from './MarkdownRenderer';

interface ContentAreaProps {
  selectedDocument: MarkdownDocument | null;
}

export function ContentArea({ selectedDocument }: ContentAreaProps) {
  return (
    <ScrollArea className="container h-screen">
      <MarkdownRenderer docContent={selectedDocument} />
    </ScrollArea>
  );
}
