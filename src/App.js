import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './component/Sidebar';
import Analytics from './pages/Analytics';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Dashborad from './pages/Dashborad';
import Login from './Login';
import Order from './pages/Order';
import Users from './pages/Users';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path="/dashboard" element={< Dashborad />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/contact" element={< Contact />} />
            <Route path='/order' element={<Order />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
