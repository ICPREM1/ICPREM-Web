import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";
import PayDues from "./pages/payDues/payDues";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<PayDues />} path='/payDues' />
          <Route element={<Profile />} path='/profile' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
