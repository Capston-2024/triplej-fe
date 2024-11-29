import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/main.js";
import SignupComplete from "./pages/main/SignupComplete";
import Signup from "./pages/main/Signup";
import Jobpostings from "./pages/main/Jobpostings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupcomplete" element={<SignupComplete />} />
        <Route path="/job-postings" element={<Jobpostings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
