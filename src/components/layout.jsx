import { useLocation } from 'react-router-dom';
import Navbar from './navbar';

const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div style={{ paddingTop: hideNavbar ? 0 : '60px' }}>
        {children}
      </div>
    </>
  );
};

export default Layout;

