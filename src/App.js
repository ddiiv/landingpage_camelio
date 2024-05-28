import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import How from './pages/How';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path='/how' element={<How/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
