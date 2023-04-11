import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button"
import LogoutButton from './LogoutButton'
import AccountCard from './AccountCard';

import { useState, useContext } from 'react';
import GlobalContext from '../routing/Context';
import MessageCard from './MessageCard';
import UserProductList from './UserProductList';
import AddProduct from './AddProduct';


export default () => {
    const [content, setContent] = useState("Make your choice with the buttons.")
    const { auth } = useContext(GlobalContext)

    return <Card style={{maxWidth: "600px"}}>
                <Card.Header><h1>Welcome {auth.username}</h1></Card.Header>
                <Card.Body style={{}}>
                    <Col style={{flexDirection: "column"}}>
                        <Button variant="success" style={{width:"100%", maxWidth:"150px", margin: "10px"}} onClick={ ()=> setContent(auth.admin ? <AddProduct/> :  <UserProductList/>)}>{auth.admin ? "Manage" : "Go Shop"}</Button>
                        <Button variant="success" style={{width:"100%", maxWidth:"150px", margin: "10px"}} onClick={ ()=> setContent(<>OrdersCard</>)}>Orders</Button>
                        <Button variant="success" style={{width:"100%", maxWidth:"150px", margin: "10px"}} onClick={ ()=> setContent(<AccountCard />)}>Account</Button>
                        <Button variant="success" style={{width:"100%", maxWidth:"150px", margin: "10px"}} onClick={ ()=> setContent(<>MessageCard</>)}>Messages</Button>
                    </Col>
                    <LogoutButton/>
                </Card.Body>
                {content}
            </Card>
}
