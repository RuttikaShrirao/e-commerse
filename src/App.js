import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProductTable from './components/ProductTable';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products-table" element={<ProductTable />} />
          <Route path="/products" element={<ImageCarousel />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
