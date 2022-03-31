import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
