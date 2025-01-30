import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import MyPage from "./pages/main/MyPage";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
