import { router } from './routing/Router'
import { RouterProvider } from "react-router-dom"
import { GlobalProvider } from './routing/Context';


import {useDebug, useAutoKeys} from 'react-easier'

import 'bootstrap/dist/css/bootstrap.min.css';

import { useStates } from "react-easier";

export default function () {
    useDebug()
    useAutoKeys()

    const cart = useStates('cart', {items: [],
                                    email: "",
                                    sendid: "",
                                    total: 0})

    return <GlobalProvider>
        <RouterProvider router={router} />
    </GlobalProvider>
}
