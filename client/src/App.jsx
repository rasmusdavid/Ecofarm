import { router } from './routing/Router'
import { RouterProvider } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {
    return <RouterProvider router={router} /> }
