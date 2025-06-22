/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { FileText } from 'lucide-react';
import 'highlight.js/styles/github-dark.css';
import { MarkdownDocument } from '@/types/markdown-content-types';
import { Table, TableCell, TableHead, TableHeader } from './ui/table';
import { cn } from '@/lib/utils';

interface ContentAreaProps {
  selectedDocument: MarkdownDocument | null;
}

export function ContentArea({ selectedDocument }: ContentAreaProps) {
  if (!selectedDocument) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center space-y-4 max-w-md">
          <FileText className="w-16 h-16 text-muted-foreground mx-auto" />
          <h2 className="text-2xl font-semibold text-foreground">Welcome to Documentation</h2>
          <p className="text-muted-foreground">
            Select a topic from the sidebar to get started. Browse through our comprehensive guides, API references, and
            examples to learn everything you need to know.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Content */}
      <div className="mx-auto p-4 lg:p-8">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              // Custom components for better styling
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-foreground mb-6 pb-4 border-b border-border">{children}</h1>
              ),
              h2: ({ children }) => <h2 className="text-3xl font-semibold text-foreground mt-12 mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">{children}</h3>,
              h4: ({ children }) => <h4 className="text-xl font-semibold text-foreground mt-6 mb-2">{children}</h4>,
              p: ({ children }) => <p className="text-muted-foreground leading-7 mb-4">{children}</p>,
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">{children}</ul>
              ),
              ol: ({ children }) => <ol className="list-decimal ml-8 space-y-2 mb-4 text-foreground">{children}</ol>,
              li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-muted/50 rounded-r-md">
                  <div className="text-muted-foreground italic">{children}</div>
                </blockquote>
              ),
              code: ({
                inline,
                className,
                children,
                ...props
              }: {
                inline?: boolean;
                className?: string;
                children?: React.ReactNode;
                [key: string]: any;
              }) => {
                if (inline) {
                  return (
                    <code className="bg-muted px-1.5 py-0.5 rounded-lg text-sm font-mono text-foreground" {...props}>
                      {children}
                    </code>
                  );
                }
                return (
                  <code
                    className={cn(
                      'inline-block rounded-lg whitespace-pre-wrap break-words font-mono text-sm',
                      className
                    )}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-muted p-2 rounded-xl overflow-x-auto mb-4 whitespace-pre-wrap break-words">
                  {children}
                </pre>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <Table className="min-w-full border border-border rounded-lg">{children}</Table>
                </div>
              ),
              thead: ({ children }) => <TableHeader className="bg-muted">{children}</TableHeader>,
              th: ({ children }) => (
                <TableHead className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                  {children}
                </TableHead>
              ),
              td: ({ children }) => (
                <TableCell className="border border-border px-4 py-2 text-foreground">{children}</TableCell>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              em: ({ children }) => <em className="italic text-foreground">{children}</em>,
            }}
          >
            {selectedDocument.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
