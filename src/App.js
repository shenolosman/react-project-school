import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Chart from "./pages/Chart";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Login />} />
              <Route path="/login" element={!user ? <Login /> : <Home />} />
              <Route path="/signup" element={!user ? <Signup /> : <Home />} />
              <Route path="/chart" element={user ? <Chart /> : <Login />} />
            </Routes>
          </Container>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
