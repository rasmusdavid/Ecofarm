import { router } from './routing/Router'
import { RouterProvider } from "react-router-dom"
import { GlobalProvider } from './routing/Context';

import {useDebug, useAutoKeys} from 'react-easier'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {

    useDebug()
    useAutoKeys()

    return <GlobalProvider>
        <RouterProvider router={router} />
    </GlobalProvider>
}
