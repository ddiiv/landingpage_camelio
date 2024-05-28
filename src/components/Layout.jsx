import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import Navbar from './Navbar';

function Layout() {
  return ( 
    <div className="App">
      <div className="page">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;