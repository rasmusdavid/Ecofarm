import { useContext } from 'react';
import GlobalContext from '../routing/Context';

import LoginForm from '../components/LoginForm'
import LogoutButton from '../components/LogoutButton';
import UserStartPage from '../pages/UserStartPage'
import ProducerStartPage from '../pages/ProducerStartPage'

export default ()=> {
    const { auth } = useContext(GlobalContext)
    if(auth.LoggedIn){
        return <> <LogoutButton /> { auth.admin ? <ProducerStartPage/> : <UserStartPage/>  } </>

    }else{ 
        return <LoginForm />}

}
    
