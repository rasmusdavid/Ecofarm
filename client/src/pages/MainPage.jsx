import { useContext } from 'react';
import GlobalContext from '../routing/Context';

import LoginForm from '../components/LoginForm'
import SignupCard from '../components/SignupCard';
import AccountPage from '../pages/AccountPage'

export default ()=> {
    const { auth } = useContext(GlobalContext)
    if(auth.LoggedIn){
        return <AccountPage />

    }else{ 
        const member = true
        member ? <LoginForm member={member} /> : <SignupCard member={member} /> }

}
    
