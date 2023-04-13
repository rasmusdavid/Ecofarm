import { router } from './routing/Router'
import { RouterProvider } from "react-router-dom"
import { GlobalProvider } from './routing/Context';


import {useDebug, useAutoKeys} from 'react-easier'

import 'bootstrap/dist/css/bootstrap.min.css';

//Reine la till nedan närmsta importer
import UserCart from './components/UserCart'
import { useStates, useFetch } from "react-easier";

export default function () {



    useDebug()
    useAutoKeys()
 

    // Reine la till const Cart + useStates
    //const [quantity, setQuantity] = useStates(null)
   // useStates('products', useFetch('/products.json'))

    const cart = useStates('cart', {
        items: [],
        total: 0,
        quantity: 0,
        total2:0
    })


    return <GlobalProvider>
        <RouterProvider router={router} />
    </GlobalProvider>
}
