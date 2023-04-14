import ProductCard from '../components/ProductCard';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { useContext } from 'react';

import GlobalContext from '../routing/Context';

export default () => {

  const { products }  = useContext(GlobalContext)
   
    return <>
        <ListGroup className="justify-content-md-center">
            <h1 className="text-center g-4">Productlist</h1>
            <div>
                {products.map(props => {
                    return <ProductCard product = {props}/>

                })
                }               
            </div> 
        </ListGroup>
         
    </>
}