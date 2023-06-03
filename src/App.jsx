import { HashRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavBar"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import ProductDetail from './pages/ProductDetail';

function App() {
  // const isLoading = useSelector((state) => state.isLoading);

  // const productsURL = "https://e-commerce-api-v2.academlo.tech/api/v1/products"
  // axios.get(productsURL)

  // const createUserURL = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
  // axios.post(createUserURL, body)

  return (
    <HashRouter>
      {/* {isLoading && <Loader />} */}
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
