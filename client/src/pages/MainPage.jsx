import { useContext } from 'react';
import GlobalContext from '../routing/Context';

import LoginForm from '../components/LoginForm'
import LogoutButton from '../components/LogoutButton';

export default ()=> {
    const { auth } = useContext(GlobalContext)
    console.log(auth)

    if(auth.LoggedIn){
        const temp = auth.username
        return <> <LogoutButton /> 
                    { auth.admin ? "Producent sida "+temp : "Kund sida "+temp } 
                </>
    }else{ 
        return <LoginForm />}

}
    
