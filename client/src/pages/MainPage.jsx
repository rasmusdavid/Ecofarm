import { useContext } from 'react';
import GlobalContext from '../routing/Context';

import LoginForm from '../components/LoginForm'
import LogoutButton from '../components/LogoutButton';
import UserStartPage from '../pages/UserStartPage'
import ProducerStartPage from '../pages/ProducerStartPage'

export default ()=> {
    const { auth } = useContext(GlobalContext)
    if(auth.LoggedIn){
        const temp = auth.username
        return <> <LogoutButton /> 
                    { auth.admin ? "Producent sida "+temp : "Kund sida "+temp } 
                </>

    }else{ 
        return <LoginForm />}

}
    
