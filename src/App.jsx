import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Profile />} path='/profile' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
