export interface MarkdownDocument {
  id: string;
  title: string;
  content: string;
}

export interface Category {
  id: string;
  title: string;
  Icon: React.ComponentType<any>;
  documents?: MarkdownDocument[];
  document?: MarkdownDocument;
}

export interface Section {
  id: string;
  title: string;
  categories: Category[];
}
