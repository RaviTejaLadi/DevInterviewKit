export interface MarkdownDocument {
  id: string;
  title: string;
  content: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  documents: MarkdownDocument[];
}
