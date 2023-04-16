import { useStates } from "react-easier";
import Table from 'react-bootstrap/Table';
import { Alert } from "react-bootstrap";
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
                cart.items = [],
                cart.email = "",
                cart.sendid = "",
                cart.total = 0
    }

    const sendOrder1 = (items) => {

        if(cart.total === 0){
            setAdd(<Alert variant="danger">You cant send an empty cart..</Alert>)
        }
        else{
            sendOrders(items)
            emptyCart()
            setAdd(true)}}
        
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
                    <td>{cart.total} kr</td>
                    {/* <td>{cart.quantity} pcs.</td> */}
                </tr>
            </tbody>
                  
        </Table>

        <ButtonGroup className="justify-content-center" >
            <Button variant="secondary" size="sm" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} onClick={emptyCart}>Empty Cart</Button>
           
            <Button variant="secondary" size="sm" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} onClick={() => sendOrder1(cart)}>Send order</Button>
        </ButtonGroup>
        {add}
       
        </Container>
     
    </>

}
