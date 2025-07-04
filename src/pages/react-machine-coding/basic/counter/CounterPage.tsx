import MarkdownRenderer from '@/components/MarkdownRenderer';
import CounterData from './counter.md?raw';
const CounterPage = () => {
  let data = {
    id: 'counter-md',
    title: 'Counter Example',
    content: CounterData,
  };
  return <MarkdownRenderer docContent={data} />;
};

export default CounterPage;
