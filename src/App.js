import "./App.css";
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

function App() {
  return (
    <div className="app-container">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobpost" element={<JobPost />} />
              <Route path="/jobpostdetail" element={<JobPostDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/joinComplete" element={<JoinComplete />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
