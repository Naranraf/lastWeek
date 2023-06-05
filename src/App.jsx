import { HashRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavBar"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import ProductDetail from './pages/ProductDetail';
import Loader from './components/Loader';
import css from "./App.css"
import { useSelector } from "react-redux";
import axios from "axios";


function App() {
  const isLoading = useSelector((state) => state.isLoading);

  const productsURL = "https://e-commerce-api-v2.academlo.tech/api/v1/products"
  const getProductsURL = axios.get(productsURL)

  const createUserURL = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
  const createUser = axios.post(createUserURL, body)
  
  // quedamos en la hora de la clase 

  return (
    <HashRouter>
      {
        isLoading && <Loader />
      }
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
    </HashRouter>
  );
}

export default App;
