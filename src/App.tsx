import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
