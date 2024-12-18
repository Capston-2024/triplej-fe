import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/main.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
