import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyJob from "./pages/MyJob";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./themes/ThemeContext";
import ButtonTheme from "./components/Button";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <NavBar />
        <ButtonTheme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myjob" element={<MyJob />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
