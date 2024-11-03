
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Fakeapi from './components/Fakeapi';
import Detailpage from './components/Detailpage';
import Login from './components/Login';
import Register from './components/Register';
import ShoppingCard from './components/ShoppingCard';



function App() {
  return (
    <div className="App">
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home name="abhar"/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/fakeapi' element={<Fakeapi/>}></Route>
    <Route path='/fakeapi/:id' element={<Detailpage/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/shoppingcard' element={<ShoppingCard/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
