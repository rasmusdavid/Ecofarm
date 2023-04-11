import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import { useState, useContext } from 'react';

import GlobalContext from '../routing/Context';


export default () => {

  const { products }  = useContext(GlobalContext)
   
    return <>
        <Container className="justify-content-md-center">
            <h1 className="text-center g-4">Productlist</h1>
            <div>
                {products.map(props => {
                    return <ProductCard item = {props}/>

                })
                }               
                
            </div> 
             
        </Container>
         
    </>
}