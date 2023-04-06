import { router } from './routing/Router'
import { RouterProvider } from "react-router-dom"

import {useStates, useFetch} from 'react-easier'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {

    useStates('users', useFetch('/api/users'))

    return <RouterProvider router={router} /> 
}
