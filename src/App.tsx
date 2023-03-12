import { BrowserRouter, Routes, Route } from 'react-router-dom'


import AuthLayout from "./layouts/AuthLayout.js";
import Principal from "./pages/Principal.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Principal />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
