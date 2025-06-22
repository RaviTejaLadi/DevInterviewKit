export interface MarkdownDocument {
  id: string;
  title: string;
  content: string;
}

export interface Category {
  id: string;
  title: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  documents: MarkdownDocument[];
}
