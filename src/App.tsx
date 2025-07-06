import { useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MockInterviews from './pages/MockInterviews';
import Layout from './components/layout';
import RouteErrorElement from './components/Errors/RouteErrorElement';
import NotFoundScreen from './components/Errors/NotFound';
import MachineCodingPage from './pages/react-machine-coding';
import { machineCodingRoutes } from './pages/react-machine-coding/machineCodingRoutes';
import BackgroundGradient from './components/BackgroundGradient';

function App() {
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
          path: 'mock-interviews',
          element: <MockInterviews />,
        },
        {
          path: '/machine-coding',
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

  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div>
      <BackgroundGradient isDarkMode={isDarkMode} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
