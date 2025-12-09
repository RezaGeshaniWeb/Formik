import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './tailwind.css'
import RegisterForm from "./pages/RegisterForm";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
