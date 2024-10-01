import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Product from './components/Product';
import Order from './components/Order';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
