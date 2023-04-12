import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";

import { useContext, useState } from "react";
import GlobalContext from "../routing/Context";





export default (prop)=>{
    const { auth, submitMessage } = useContext(GlobalContext)
    const [ subject, setSubject ] = useState("")
    const [ msg, setMsg ] = useState("")
    const [ reciver, setReciver ] = useState("64366aa80e0cbeefc39445e6")

    const handleSend = (e)=>{
        e.preventDefault()

        console.log(reciver, { title: subject, text: msg, sender: auth.email})

        submitMessage(reciver, { title: subject, text: msg, sender: auth.email})
    }

    return <Container>
                <Row>
                <Form style={{margin: "20px"}} variant="success" md="fluid">
                        <Form.Text><h4>Account</h4></Form.Text>

                        <Form.Control type="text" placeholder="Subject" onChange={ e => setSubject(e.target.value)}/>
                        <Form.Control type="textarea" as="textarea" rows={3} placeholder="Message" onChange={ e => setMsg(e.target.value)} />
                        
                        <ButtonGroup size="md" variant="success">
                            <Button variant="success" onClick={ handleSend }>Send to:</Button>
                            <Button variant="outline-success" disabled={true}>{"producer@producer"}</Button>
                        </ButtonGroup>

                    </Form>
                    <p>{String(prop.admin)}</p>
                </Row>
            </Container>


}