import Layout from './Components/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products.jsx';
import Orders from './Pages/Orders.jsx';
import Cashier from './Pages/Cashier.jsx';
import Sales from './Pages/Sales.jsx';
import Profile from './Pages/Profile.jsx';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index  element={<Products />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Cashier" element={<Cashier />} />
          <Route path="Sales" element={<Sales />} />
          <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;