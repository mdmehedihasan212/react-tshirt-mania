import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import GrandMa from './components/GrandMa/GrandMa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}
        ></Route>
        <Route path='/grandma' element={<GrandMa></GrandMa>}>GrandMa</Route>
      </Routes>
    </div>
  );
}

export default App;
