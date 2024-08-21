import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Dashboard1 from "./Components/Dashboard/Dashboard1";
import Dashboard2 from "./Components/Dashboard/Dashboard2";
import { LineGraph } from "./Components/charts/Line";
import { BarGraph } from "./Components/charts/Bar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
    <Toaster position="top-right"/>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Dashboard1/>} />
        <Route path="/dash2" element={<Dashboard2/>} />
        <Route path="/line" element={<LineGraph/>} />
        <Route path="/bar" element={<BarGraph/>} />



      </Routes>
    </Router>
  );
}

export default App;
