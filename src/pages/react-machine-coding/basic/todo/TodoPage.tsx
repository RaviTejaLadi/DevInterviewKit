import MarkdownRenderer from '@/components/MarkdownRenderer';
import todoData from './todo.md?raw';

const TodoPage = () => {
  let data = {
    id: 'todo-md',
    title: 'Todo Example',
    content: todoData,
  };
  return <MarkdownRenderer docContent={data} />;
};

export default TodoPage;
