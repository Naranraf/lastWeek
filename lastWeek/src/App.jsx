import { HashRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavBar"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import NewsDetail from "./pages/NewsDetail";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import axios from "axios";
// import { Navbar } from 'react-bootstrap/Navbar';

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
        <Route element={<NewsDetail />} path="/news/:id" />

        {/* 
              Rutas Protegidas 
              /purchases
              */}
        <Route element={<Favorites />} path="/favorites" />
      </Routes>
    </HashRouter>
  );
}

export default App;
