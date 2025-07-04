import { useParams, Navigate } from 'react-router-dom';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { machineCodingExamplesData } from '@/data/Frontend/react-machine-coding/examples';

const DynamicMarkdownPage = () => {
  const { id } = useParams();

  // Find the matching example data
  const example = machineCodingExamplesData.find((item) => item.id === id);

  // If no matching example found, redirect to counter (or show 404)
  if (!example) {
    return <Navigate to="/machine-coding/counter" replace />;
  }

  // Prepare data for MarkdownRenderer
  const data = {
    id: `${example.id}-md`,
    title: example.title,
    content: example.content,
  };

  return <MarkdownRenderer docContent={data} />;
};

export default DynamicMarkdownPage;
