import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
          <>
            <Navbar></Navbar>
            <div className='row'>
              <div className='col-2 side-bar'>
                <Sidebar></Sidebar>
              </div>
              <div className='col-10'>
                <Routes>
                  <Route path='/' element={
                    <Home></Home>
                  }/>
                  <Route path='about' element={
                    <About></About>
                  }/>
                  <Route path='products' element={
                    <Products></Products>
                  }/>
                </Routes>
              </div>
            </div>
          </>
    </div>
  );
}

export default App;
