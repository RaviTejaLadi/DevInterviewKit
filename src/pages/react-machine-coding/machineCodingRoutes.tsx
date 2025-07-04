import { Navigate } from 'react-router-dom';
import DynamicMarkdownPage from './DynamicMarkdownPage';

export const machineCodingRoutes = [
  { path: '/machine-coding', element: <Navigate to="/machine-coding/counter" /> },
  {
    path: ':id', // Dynamic route parameter
    element: <DynamicMarkdownPage />,
  },
];
