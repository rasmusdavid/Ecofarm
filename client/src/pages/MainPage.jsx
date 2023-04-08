import { useContext } from 'react';
import GlobalContext from '../routing/Context';

import LoginForm from '../components/LoginForm'
import LogoutButton from '../components/LogoutButton';
import UserStartPage from '../pages/UserStartPage'
import ProducerStartPage from '../pages/ProducerStartPage'

export default ()=> {
    const { auth, logged } = useContext(GlobalContext)
    console.log(logged)

    if(auth.LoggedIn){
        console.log( logged.admin )
        return <> <LogoutButton /> { logged.admin ? <ProducerStartPage/> : <UserStartPage/>  } </>
    }else{ 
        return <LoginForm />}

}
    
