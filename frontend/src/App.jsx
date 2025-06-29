import Layout from './Components/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products.jsx';
import Orders from './Pages/Orders.jsx';
import Salesman from './Pages/Salesman.jsx';
import Sales from './Pages/Sales.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index  element={<Products />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Salesman" element={<Salesman />} />
          <Route path="Sales" element={<Sales />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;