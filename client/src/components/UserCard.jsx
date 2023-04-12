import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import LogoutButton from './LogoutButton'
import AccountCard from './AccountCard';

import { useState, useContext } from 'react';
import GlobalContext from '../routing/Context';
import MessageCard from './MessageCard';
import UserCartPage from '../pages/UserCartPage';
import UserProductList from './UserProductList';


export default () => {
    const [content, setContent] = useState("Make your choice with the buttons.")
    const { auth } = useContext(GlobalContext)

    return <Card style={{ maxWidth: "600px" }}>
        <Card.Header><h1>Welcome {auth.username}</h1></Card.Header>
        <Card.Body style={{}}>
            <Button variant="success" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} onClick={() => setContent(<UserProductList />)}>{auth.admin ? "Manage" : "Go Shop"}</Button>
            <Button variant="success" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} onClick={() => setContent(<UserCartPage />)}>Cart</Button>
            <Button variant="success" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} onClick={() => setContent(<AccountCard />)}>Account</Button>
            <Button variant="success" style={{ width: "100%", maxWidth: "100px", margin: "10px" }} onClick={() => setContent(<MessageCard />)}>Messages</Button>
            <LogoutButton />
        </Card.Body>
        {content}
    </Card>
}
