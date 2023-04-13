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
                <ButtonGroup variant="outline-success" className="d-grid gap-2 d-md-block">
                    <Button  variant="outline-success" value="in" onClick={handleBtn}>Inbox</Button>
                    <Button variant="outline-success" value="send" onClick={handleBtn}>Send message</Button>
                    <Form.Text ><h3 style={{border: "10px"}}> Messages</h3></Form.Text>
                </ButtonGroup>
                {show}
           </Container>
}