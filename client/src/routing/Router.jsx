import {
    createBrowserRouter, createRoutesFromElements, Route
} from "react-router-dom"
import Layout from "../layout/Layout.jsx"

// Pages
import Main from "../pages/MainPage.jsx"
import ProducerViewProductPage from "../pages/ProducerViewProductPage.jsx";
import UserCartPage from "../pages/UserCartPage.jsx"
import AccountPage from "../pages/AccountPage.jsx"

export const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Layout/>}>
    <Route index element={<Main/>}/>
    <Route path="start" element={<AccountPage />}/>
    <Route path="cartPage" element={<UserCartPage/>}/>
    <Route path="ProducerViewProductPage" element={<ProducerViewProductPage/>}/>
</Route>))