import { useContext } from 'react';
import GlobalContext from '../routing/Context';

import LoginForm from '../components/LoginForm'
import LogoutButton from '../components/LogoutButton';

export default ()=> {
    const { auth, logged } = useContext(GlobalContext)
    console.log(logged)

    if(auth.LoggedIn){
        console.log( logged.admin )
        return <> <LogoutButton /> { logged.admin ? "Producent sida" : "Kund sida" } </>
    }else{ 
        return <LoginForm />}

}
    
