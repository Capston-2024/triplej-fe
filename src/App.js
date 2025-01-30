import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/main.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
