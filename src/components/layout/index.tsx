import { Outlet } from 'react-router-dom';
import { Navbar } from './NavBar';
import Footer from './Footer';
import { useSearchTermStore } from '@/stores/useSearchTermStore';
import ErrorBoundary from '../Errors/ErrorBoundary';

const Layout = () => {
  const { searchTerm, setSearchTerm } = useSearchTermStore();
  return (
    <ErrorBoundary>
      <div className="bg-background text-foreground">
        <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <main className="mt-11">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
