import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MockInterviews from './pages/MockInterviews';
import Layout from './components/layout';
import RouteErrorElement from './components/Errors/RouteErrorElement';
import NotFoundScreen from './components/Errors/NotFound';
import CounterPage from './pages/react-machine-coding/basic/counter/CounterPage';
import TodoPage from './pages/react-machine-coding/basic/todo/TodoPage';
import MachineCodingPage from './pages/react-machine-coding';
import LoginFormPage from './pages/react-machine-coding/basic/loginForm/LoginFormPage';

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
          children: [
            { path: '/machine-coding', element: <Navigate to="/machine-coding/counter" /> },
            {
              path: 'counter',
              element: <CounterPage />,
            },
            {
              path: 'todo',
              element: <TodoPage />,
            },
            {
              path: 'login-form',
              element: <LoginFormPage />,
            },
          ],
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

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
