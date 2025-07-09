import { FileText } from 'lucide-react';

const MarkdownRendererFallback = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="text-center space-y-6 max-w-lg">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <FileText className="relative w-20 h-20 text-primary mx-auto drop-shadow-lg" />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Welcome to Documentation
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Select a topic from the sidebar to get started. Browse through our comprehensive guides, API references, and
            examples to learn everything you need to know.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarkdownRendererFallback;
