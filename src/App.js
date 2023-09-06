import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route  path= '/about' element={<About></About>}></Route>
        <Route path ='/products' element={<Products></Products>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
