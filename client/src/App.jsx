import { router } from './routing/Router'
import { RouterProvider } from "react-router-dom"

import {useStates, useFetch} from 'react-easier'

useStates('users', useFetch('/api/users'))

import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {
    return <RouterProvider router={router} /> }
