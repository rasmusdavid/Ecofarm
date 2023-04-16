import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useContext, useState } from "react";
import GlobalContext from "../routing/Context";
import SendMsg from "../components/SendMsg";
import InboxMsg from "../components/InboxMsg";
import { Container } from "react-bootstrap";



export default ()=>{
    const { users, auth } = useContext(GlobalContext)

    const [ show, setShow ] = useState(<SendMsg admin={auth.admin} />)

    const handleBtn = (e)=>{
        e.preventDefault()
        console.log( e.target.value )
        if( e.target.value === "in" ) setShow(<InboxMsg admin={auth.admin} />)
        else if( e.target.value === "send" ) setShow(<SendMsg admin={auth.admin} />)
    }

    return <Container>
                <h3 style={{}}> Messages</h3>
                <ButtonGroup variant="outline-success">
                    <Button  variant="outline-success" value="in" onClick={handleBtn}>Inbox</Button>
                    <Button variant="outline-success" value="send" onClick={handleBtn}>Send message</Button>
                </ButtonGroup>
                {show}
           </Container>
}