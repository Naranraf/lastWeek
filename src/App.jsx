import AppNavbar from "/components/AppNavBar"
import Home from "/pages/Home";
import Favorites from "/pages/Favorites";
import Login from "/pages/Login";
import ProductDetail from "./pages/p";
import Loader from "./components/Loader";
import {useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { HashRouter,Routes, Route } from "react-router-dom";
import {Loader} from "./components/Loader"
import { Form } from 'react-bootstrap/Form';
import { ProductDetail } from '/pages/ProductDetail';


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
