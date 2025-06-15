import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./pages/main/auth/Login.js";
import Join from "./pages/main/auth/Join.js";
import JoinComplete from "./pages/main/auth/JoinComplete.js";
import Footer from "./components/Footer";
import MyPage from "./pages/main/mypage/MyPage";
import theme from "./styles/theme";
import Home from "./pages/main/home/Home";
import JobPost from "./pages/main/JobPost/JobPost";
import JobPostDetail from "./pages/main/JobPost/JobPostDetail";
import Community from "./pages/main/community/Community";
import Header from "./components/Header";
import Apply from "./pages/main/JobPost/Apply";
import Feedback from "./pages/main/JobPost/Feedback";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <div className="app-container">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
              <Route
                path="/jobpost"
                element={<JobPost isLoggedIn={isLoggedIn} />}
              />
              <Route path="/jobpostdetail" element={<JobPostDetail />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/join" element={<Join />} />
              <Route path="/joinComplete" element={<JoinComplete />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
