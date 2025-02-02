import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Main from "./pages/main/main.js";
import Login from "./pages/main/auth/Login.js";
import Join from "./pages/main/auth/Join.js";
import JoinComplete from "./pages/main/auth/JoinComplete.js";
import theme from "./styles/theme";

function App() {
  return (
    <div className="app-container">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/joinComplete" element={<JoinComplete />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
