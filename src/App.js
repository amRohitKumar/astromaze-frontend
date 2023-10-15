import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Home, LogIn, Dashboard } from "./pages";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
