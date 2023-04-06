import { router } from './routing/Router'
import { RouterProvider } from "react-router-dom"

import {useStates, useFetch, useDebug, useAutoKeys} from 'react-easier'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {

    useDebug()
    useAutoKeys()
    useStates('users', useFetch('/api/users'))
    useStates('auth', {LoggedIn: false})

    return <RouterProvider router={router} /> 
}
