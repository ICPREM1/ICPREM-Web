import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
