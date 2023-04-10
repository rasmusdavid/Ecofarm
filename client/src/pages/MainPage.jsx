import { useContext } from 'react';
import GlobalContext from '../routing/Context';

import LoginForm from '../components/LoginForm'
import AccountPage from '../pages/AccountPage'

export default ()=> {
    const { auth } = useContext(GlobalContext)
    if(auth.LoggedIn){
        return <AccountPage />

    }else{ 
        return <LoginForm />}

}
    
