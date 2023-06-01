import "./styles.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavBar"
import Home from "./components/AppNavBar";

function App() {
  /*
    axios.get("url")
    axios.post( url, body )
  */

  return (
    <HashRouter>
      <AppNavbar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </HashRouter>
  );
}

export default App;
