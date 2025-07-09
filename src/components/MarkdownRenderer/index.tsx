import { MarkdownDocument } from '@/types/markdown-content-types';
import React, { memo } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { renderSpecialSections } from './renderSpecialSections';
import MarkdownRendererFallback from './MarkdownRendererFallback';

interface MarkdownRendererProps {
  docContent: MarkdownDocument | null;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ docContent }) => {
  if (!docContent) {
    return <MarkdownRendererFallback />;
  }

  return (
    <ScrollArea className="container h-screen">
      <div className=" mx-auto px-1 py-8 lg:px-8 lg:py-16 ">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          {renderSpecialSections(docContent?.content ?? '')}
        </article>
      </div>
    </ScrollArea>
  );
};

export default memo(MarkdownRenderer);
