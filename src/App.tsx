/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useTheme } from './context/ThemeContext';
import Home from './pages/home/Home';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MockInterviews from './pages/MockInterviews';
import Layout from './components/layout';
import RouteErrorElement from './components/Errors/RouteErrorElement';
import NotFoundScreen from './components/Errors/NotFound';
import MachineCodingPage from './pages/react-machine-coding';
import { machineCodingRoutes } from './pages/react-machine-coding/machineCodingRoutes';
import { useEffect } from 'react';
import Resources from './pages/Resources';
// import BackgroundGradient from './components/BackgroundGradient';

function App() {
  useEffect(() => {
    if (import.meta.env.NODE_ENV === 'development') {
      const handleContextMenu = (e: { preventDefault: () => any }) => e.preventDefault();
      window.addEventListener('contextmenu', handleContextMenu);
      return () => window.removeEventListener('contextmenu', handleContextMenu);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <RouteErrorElement />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/resources',
          element: <Resources />,
        },
        {
          path: 'mock-assessment',
          element: <MockInterviews />,
        },
        {
          path: 'machine-coding',
          element: <MachineCodingPage />,
          children: machineCodingRoutes,
        },
      ],
    },
    {
      path: '404',
      element: <NotFoundScreen />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  // const { theme } = useTheme();
  // const isDarkMode = theme === 'dark';

  return (
    <div>
      <RouterProvider router={router} />
      {/* <BackgroundGradient isDarkMode={isDarkMode} /> */}
    </div>
  );
}

export default App;
