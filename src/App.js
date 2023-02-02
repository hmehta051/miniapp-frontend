import { Route, Routes } from "react-router-dom";
import CityMap from "./components/CityMap";
import Home from "./components/Home";
import Login from "./components/Login";
import QrBox from "./components/QrBox";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/city-map" element={<CityMap />} />
        <Route path="/qr" element={<QrBox />} />
      </Routes>
    </div>
  );
}

export default App;
