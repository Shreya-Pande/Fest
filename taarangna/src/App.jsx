
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Sponsi from "./pages/Sponsi";

function App() {
  return (
    <BrowserRouter basename="/Fest">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


