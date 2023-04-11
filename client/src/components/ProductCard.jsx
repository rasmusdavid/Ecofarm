import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStates } from "react-easier";
import { useState, useContext } from 'react';
import GlobalContext from '../routing/Context';


export default ({ item }) => {

    // const cart = useStates('cart');
    // //const [cart, setCart] = useState([])

    // const emptyCart = () => {
    //     cart.items = []
    //     cart.total = 0
    // }

    // const add = (e, item) => {
    //     cart.items.push(product)
    //     //console.log(`Product added: ${item.name} \nProduct price: ${item.price} \nNew total:`)
    // }

    const [cart, setCart] = useState({ items: [], total: 0 })


    const add = (e, item) => {
        setCart({ items: [...cart.items, item], total: cart.total + item.price })
        console.log(item.item, item.price)
        console.log(cart)
    }

    return <>

        <Card style={{}}>
            <Card.Body>
                <Card.Title>{item.item}</Card.Title>
                <Form>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={item.image} />
                        </Col>
                        <Col>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Card.Text>
                                {item.price} kr  pcs.  {item.weight} kg
                            </Card.Text>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Qty." />
                        </Col>
                        <Col>
                            <Button variant="primary" type='button' onClick={(e) => add(e, item)}>Add to cart</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </>
}


/*
export default () => {
    return <>

        <div className="card mb-3 col-10 mx-auto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Qjd4zSyisDx8qiF0kCGmvUSloiOL_52KIA&usqp=CAU" />
            <div className="card-body">
                <h5 className="card-title">Product</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                <div className="card-footer bg-transparent border-secondary p-4">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Amount" />
                            </Col>
                            <Col>
                                <Button>Add to cart</Button>
                            </Col>
                        </Row>
                    </Form>

                </div>
            </div>
        </div>
    </>
}
*/