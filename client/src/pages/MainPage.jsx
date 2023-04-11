import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../routing/Context';

import { NavLink } from 'react-router-dom';

import LoginForm from '../components/LoginForm'
import AccountPage from '../pages/AccountPage'

export default ()=> {
    const { auth } = useContext(GlobalContext)

    if(auth.LoggedIn){
        return <AccountPage />

    }else{ 
        return <LoginForm />
    } }