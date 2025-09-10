import frontendRoadmap from './Frontend.md?raw';
import backendRoadmap from './backend.md?raw';
import fullstackRoadmap from './full-stack.md?raw';
import { Section, MarkdownDocument } from '@/types/markdown-content-types';

const roadmapData = [
  {
    id: 'frontend',
    title: '🖥️ Frontend',
    document: {
      id: 'frontend-doc',
      title: 'Frontend Roadmap',
      content: frontendRoadmap,
    } as MarkdownDocument,
  },
  {
    id: 'backend',
    title: '⚙️ Backend',
    document: {
      id: 'backend-doc',
      title: 'Backend Roadmap',
      content: backendRoadmap,
    } as MarkdownDocument,
  },
  {
    id: 'fullstack',
    title: '🚀 Full Stack',
    document: {
      id: 'fullstack-doc',
      title: 'Fullstack Roadmap',
      content: fullstackRoadmap,
    } as MarkdownDocument,
  },
];

export const roadmapMainData: Section[] = [
  {
    id: 'role-based-roadmap',
    title: 'Role-based Roadmap',
    categories: roadmapData,
  },
];
