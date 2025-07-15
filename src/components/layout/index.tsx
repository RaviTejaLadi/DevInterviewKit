import { Outlet } from 'react-router-dom';
import { Navbar } from './NavBar';
import Footer from './Footer';
import ErrorBoundary from '../Errors/ErrorBoundary';

const Layout = () => {
  return (
    <ErrorBoundary>
      <div className="bg-background text-foreground">
        <Navbar />
        <main className="mt-11">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
