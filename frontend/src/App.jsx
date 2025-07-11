import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, Categories, Salesman, Analytics, Reports, Dashboard ,Products } from './pages/index.jsx';
import { Layout } from './components/index.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='categories' element={<Categories />} />
          <Route path='salesman' element={<Salesman />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='reports' element={<Reports />} />
        </Route>  
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;