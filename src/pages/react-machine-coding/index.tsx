import MachineCodingNav from '@/components/MachineCodingNav';
import { Outlet } from 'react-router-dom';

const MachineCodingPage = () => {
  return (
    <>
      <MachineCodingNav />
      <Outlet />
    </>
  );
};

export default MachineCodingPage;
