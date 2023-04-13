import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useContext, useState } from "react";
import GlobalContext from "../routing/Context";


export default ()=>{
    const { users, auth, submitMessage, deleteMessage } = useContext(GlobalContext)
    const [ subject, setSubject ] = useState("")
    // const [ msg, setMsg ] = useState("")
    const [ reciver, setReciver ] = useState("64366aa80e0cbeefc39445e6")

    const user = users.filter( item => item.email === auth.email )[0]

    // const handleSend = (e)=>{
    //     e.preventDefault()

    //     console.log(reciver, { title: subject, text: msg, sender: auth.email})

    //     submitMessage(reciver, { title: subject, text: msg, sender: auth.email})
    // }

    const handleDel = (e) => {
        e.preventDefault()

        const senderId = user.messages.filter( item => String(item.sender)+String(item.text) === e.target.value )[0] // === e.target.value )
        console.log(e.target.value, user._id, senderId)
        deleteMessage(user._id, { sender: senderId.sender, text: senderId.text })
    }

    return <Container variant="success">
                <Col>
                    <Form style={{margin: "20px"}} variant="success" md="fluid">
                        {/* <Form.Text><h4>Inbox</h4></Form.Text> */}

                        { user.messages.map( msg => {
                            return <Row style={{border: "1px solid grey", borderRadius: "5px", margin: "5px", padding: "2px"}}>
                                        <Col>
                                            <Row>
                                                {msg.title}
                                            </Row>
                                            <Row>
                                                {msg.sender}
                                            </Row>
                                        </Col>
                                        <Col>{msg.text}</Col>
                                        <Col>
                                        <ButtonGroup size="md" variant="outline-success">
                                            {/* <Button variant="success" value={msg.sender} onClick={ handleSend }>Answer</Button> */}
                                            <Button variant="outline-danger" value={String(msg.sender) + String(msg.text)} onClick={ handleDel }>Delete</Button>
                                        </ButtonGroup>
                                        </Col>
                                    </Row>
                        })}
                    </Form>
                </Col>
            </Container>


}