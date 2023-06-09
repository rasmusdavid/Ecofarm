import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStates } from "react-easier";
import { useContext, useState } from 'react';
import GlobalContext from '../routing/Context';

export default ( {setCartinfo, cartinfo, product} ) => {
    const { removeProduct, auth } = useContext(GlobalContext)
    // const [cartinfo, setCartinfo ] = useState(0)
    const cart = useStates('cart');

    const add = (product) => {

        const newProduct = Object.assign({}, product);

        cart.items.push(newProduct)
        cart.total = cart.total + newProduct.price
        cart.email = auth.email
        cart.sendid = auth.id
    
        setCartinfo(cartinfo += 1)}

    const removeItem = (id) => {
        removeProduct(id)
    }
 
    return <>
        <Card style={{}}>
            <Card.Body>
                <Card.Title>{product.item}</Card.Title>
                <Form >
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={product.image} />
                        </Col>
                        <Col>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                {product.price} kr  pcs. {product.weight} kg
                            </Card.Text>
                        </Col>
                        <Col>

                        </Col>
                        <Col>
                        {auth.admin 
                        ? 
                        <Button variant='danger' onClick={() => { removeItem(product._id) } }>Remove</Button> 
                        :  
                        <Button variant="primary" type='button' onClick={() => add(product)}>Add to cart</Button>
                        }
                            
                        </Col>
     
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </>
}


