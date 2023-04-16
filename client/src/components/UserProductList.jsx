import ProductCard from '../components/ProductCard';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { useContext, useState } from 'react';

import GlobalContext from '../routing/Context';

export default () => {

  const { products }  = useContext(GlobalContext)

  const [ cartinfo, setCartinfo ] = useState(0)
   
    return <>
        <ListGroup className="justify-content-md-center">
            <h1 className="text-center g-4">Productlist</h1>
            <div>
                <p>Items in cart: {cartinfo}</p>
                {products.map(props => {
                    return <ProductCard setCartinfo = {setCartinfo} cartinfo={cartinfo} product={props}/>

                })
                }               
            </div> 
        </ListGroup>
         
    </>
}