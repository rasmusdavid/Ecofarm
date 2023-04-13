import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layout/Layout.jsx";

// Pages
import Main from "../pages/MainPage.jsx";
import SignupPage from "../pages/SignupPage";

import AccountPage from "../pages/AccountPage.jsx";
import OrderHistoria from "../components/OrderHistoria.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="start" element={<AccountPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="orderHistory" element={<OrderHistoria />} />
    </Route>
  )
);
