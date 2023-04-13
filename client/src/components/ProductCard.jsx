import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStates, useFetch } from "react-easier";
import { useState, useContext } from 'react';
import GlobalContext from '../routing/Context';
import { Alert } from 'react-bootstrap';



export default ( {product} ) => {
    useStates('products', useFetch('/products.json'))
    const cart = useStates('cart');
    const products = useStates('products')
    // [quantity, setQuantity] = useState([])

    const add = (e, product) => {

        cart.items.push(product)
        cart.total = cart.total + product.price
        cart.total2 = cart.total2 + product.weight
        // cart.quantity = cart.quantity + quantity     
    }

    const { removeProduct, auth } = useContext(GlobalContext)
    const [message, setMessage] = useState('')

    const removeItem = (id) => {
        removeProduct(id)
        setMessage(<Alert variant="danger">"Product removed"</Alert>)
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

                            {/* <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>   */}
                            {/* <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>   */}

                        </Col>
                        <Col>

                        </Col>
                        <Col>
                        {auth.admin 
                        ? 
                        <Button variant='danger' onClick={() => { removeItem(item._id) } }>Remove</Button> 
                        :  
                        <Button variant="primary" type='button' onClick={(e) => add(e, product)}>Add to cart</Button>
                        }
                            
                        </Col>
     
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </>
}


