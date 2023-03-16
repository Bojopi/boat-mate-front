import { BrowserRouter, Routes, Route } from 'react-router-dom'


import AuthLayout from "./layouts/AuthLayout.js";
import Principal from "./pages/Principal.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

import User from './layouts/UserLayout';
import Welcome from './pages/Welcome';
import PaymentLayout from './layouts/PaymentLayout';
import Payment from './pages/Payment.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Principal />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/user" element={<User />}>
            <Route index element={<Welcome />} />
          </Route>
          <Route path="/payments" element={<PaymentLayout />}>
            <Route index element={<Payment />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
