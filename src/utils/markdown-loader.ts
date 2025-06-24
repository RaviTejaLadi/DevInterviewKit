// markdown-loader.ts
import { marked } from 'marked';

export function markdownLoader(source: string): string {
  // Process component tags
  const processedSource = source.replace(/<(\w+)([^>]*)\/>/g, (componentName: string, props: string) => {
    return `{${componentName}(${props})}`;
  });

  const html = marked(processedSource);
  return `export default ${JSON.stringify(html)}`;
}
