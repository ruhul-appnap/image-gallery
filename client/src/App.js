import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const uploadImage = (imageData) => {
    if (imageData) {
      let data = {
        id: Date.now(),
        ...imageData,
      };
      setData((previousData) => [data, ...previousData]);
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/upload"
          element={<Upload getData={(imageData) => uploadImage(imageData)} />}
        />
      </Routes>
    </div>
  );
}

export default App;
