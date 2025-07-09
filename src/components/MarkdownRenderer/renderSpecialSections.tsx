// import { Card, CardContent } from 'kalki-ui';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import { components } from './components';

export const renderSpecialSections = (content: string) => {
  const sections = content.split(/(?=^##\s)/gm);

  return sections.map((section, index) => {
    // const lines = section.trim().split('\n');
    // const title = lines[0]?.replace(/^##\s*/, '');

    // Resources sections
    // if (title?.includes('Resources') || title?.includes('Tools')) {
    //   return (
    //     <Card
    //       key={index}
    //       className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800"
    //     >
    //       <CardContent className="p-6">
    //         <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
    //           {section}
    //         </ReactMarkdown>
    //       </CardContent>
    //     </Card>
    //   );
    // }

    // Default section
    return (
      <div key={index} className="mb-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]} components={components}>
          {section}
        </ReactMarkdown>
      </div>
    );
  });
};
