import MachineCodingNav from '@/components/MachineCodingNav';
import { Outlet } from 'react-router-dom';

const MachineCodingPage = () => {
  return (
    <div>
      <MachineCodingNav />
      <Outlet />
    </div>
  );
};

export default MachineCodingPage;
