import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
