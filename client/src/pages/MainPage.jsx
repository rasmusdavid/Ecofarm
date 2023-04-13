import { useContext } from 'react';
import GlobalContext from '../routing/Context';

import LoginPage from '../pages/LoginPage'
import AccountPage from '../pages/AccountPage'

export default ()=> {
    const { auth } = useContext(GlobalContext)

    if(auth.LoggedIn){
        return <AccountPage />

    }else{ 
        return <LoginPage />
    } }