import { useStates } from "react-easier";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/ButtonToolbar"
import Container from "react-bootstrap/esm/Container";
import { useState, useContext } from "react";
import GlobalContext from '../routing/Context';


export default () => {
    const cart = useStates('cart');
    const [add, setAdd] = useState(true)
    const { sendOrders } = useContext(GlobalContext)

    const emptyCart = () => {
        cart.items = []
        cart.total = 0
        cart.quantity = 0
        cart.total2 = 0
        setAdd(false)   
    }

    const sendOrder1 = (items) => {
        sendOrders(items)
        

    }
    
    
    return <>
        <Container id="cart" >
        <h1 className="text-center g-4">Cart</h1>

        

        <Table className="table">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price</th>
                    {/* <th scope="col">Quantity</th> */}
                </tr>
            </thead>

            {cart.items.map(product => <tbody>
                <tr>
                    <td>{product.item}</td>
                    <td>{product.weight} kg</td>
                    <td>{product.price} kr</td>
                    {/* <td> {cart.quantity} </td> */}
                </tr>
            </tbody>)}

            <tbody>
                <tr>
                    <td>
                        Total
                    </td>
                    <td>{cart.total2} kg</td>
                    <td>{cart.total} kr</td>
                    {/* <td>{cart.quantity} pcs.</td> */}
                </tr>
            </tbody>
                  
        </Table>

        <ButtonGroup className="justify-content-center" >
            <Button variant="secondary" size="sm" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} onClick={emptyCart}>Empty Cart</Button>
           
            <Button variant="secondary" size="sm" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} onClick={sendOrder1(cart.items)} >Send order</Button>
        </ButtonGroup>
       
        </Container>
     
    </>

}
