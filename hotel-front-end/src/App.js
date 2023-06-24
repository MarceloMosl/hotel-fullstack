import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { Home } from "./pages/home";
import UserPage from "./pages/user-pages";

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<UserPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
