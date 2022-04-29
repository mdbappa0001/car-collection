import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import InventoryServices from './Pages/InventoryServices/InventoryServices';
import Login from './Pages/Login/Login';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manageItem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventoryServices' element={<InventoryServices></InventoryServices>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
