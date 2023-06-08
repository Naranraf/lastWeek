import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Loader from './components/Loader';

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <Container fluid>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* 
            Rutas Protegidas 
            /purchases
            necesitamos el inicio de sesion
          */}
        </Routes>
      </Container>
      {isLoading && <Loader />}
    </HashRouter>
  );
}

export default App;
