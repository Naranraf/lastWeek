import { HashRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavBar"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import ProductDetail from './pages/ProductDetail';
import Loader from './components/Loader';
import {useDispatch, useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import stylesheet from './App.css'


function App() {
  const isLoading = useSelector((state) => state.isLoading);


  return (
    <HashRouter>
      <Container fluid>

        <AppNavbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<ProductDetail />} path="/product/:id" />
          <Route element={<Favorites />} path="/favorites" />
          {/* 
              Rutas Protegidas 
              /purchases
              necesitamos el inicio de sesion
              */}
        </Routes>

      </Container>
      {
        isLoading && <Loader />
      }

    </HashRouter>
  );
}

export default App;
