import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/main.js";
import Login from "./pages/main/auth/Login.js";
import LoginComplete from "./pages/main/auth/LoginComplete.js";
import Join from "./pages/main/auth/Join.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/loginComplete" element={<LoginComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
