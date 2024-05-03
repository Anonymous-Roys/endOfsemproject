import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/UserAuth/LoginForm'
import SignUp from './components/UserAuth/SignupForm';
import ProductList from './components/products/ProductList';
import Dashboard from './components/dashboard/Dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductList />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
