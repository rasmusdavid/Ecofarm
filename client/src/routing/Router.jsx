import {
    createBrowserRouter, createRoutesFromElements, Route
} from "react-router-dom"
import Layout from "../layout/Layout.jsx"

// Pages
import Main from "../pages/MainPage.jsx"
import UserProductPage from "../pages/UserProductPage.jsx"
import UserStartPage from "../pages/UserStartPage.jsx"
import ProducerStartPage from "../pages/ProducerStartPage.jsx";
import ProducerViewProductPage from "../pages/ProducerViewProductPage.jsx";
import UserCartPage from "../pages/UserCartPage.jsx"
import UserOrderInfo from "../pages/UserOrderInfo.jsx"
import UserAccountInfo from "../pages/UserAccountInfo.jsx"

// import SupportPage from "../pages/SupportPage.jsx";
// import AccountPage from "../pages/AccountPage.jsx";
// import PayMethodPage from "../pages/PayMethodPage.jsx";
// import MoreInfoPage from "../pages/MoreInfoPage.jsx"


export const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Layout/>}>
    <Route index element={<Main/>}/>
    <Route path="start" element={<UserStartPage/>}/>
    <Route path="products" element={<UserProductPage/>}/>
    <Route path="cartPage" element={<UserCartPage/>}/>
    <Route path="ProducerStartPage" element={<ProducerStartPage/>}/>
    <Route path="ProducerViewProductPage" element={<ProducerViewProductPage/>}/>
    <Route path="userOrders" element={<UserOrderInfo/>}/>
    <Route path="userAccount" element={<UserAccountInfo/>}/>
    {/* <Route path="event" element={<EventPage/>}/>
    <Route path="support" element={<SupportPage/>}/>
    <Route path="signup" element={<SignupPage/>}/>
    <Route path="account" element={<AccountPage/>}/>
    <Route path="paymethod" element={<PayMethodPage/>}/>
    <Route path="moreInfo" element={<MoreInfoPage/>}/> */}

</Route>))