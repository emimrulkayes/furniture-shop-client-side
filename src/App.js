import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './componants/Shared/Header/Header';
import Home from './componants/Pages/Home/Home/Home';
import About from './componants/Pages/About/About';
import Products from './componants/Pages/Products/Products';
import Contact from './componants/Pages/Contact/Contact';
import Login from './componants/Pages/Login/Login/Login';
import Logout from './componants/Pages/Login/Logout/Logout';
import NotFound from './componants/Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
