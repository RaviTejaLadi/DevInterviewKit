import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import { components } from './components';

export const renderSpecialSections = (content: string) => {
  const sections = content.split(/(?=^##\s)/gm);

  return sections.map((section, index) => {
    return (
      <div key={index} className="mb-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          className="bg-inherit"
          components={components}
        >
          {section}
        </ReactMarkdown>
      </div>
    );
  });
};
