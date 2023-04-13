import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";

import { useContext, useState } from "react";
import GlobalContext from "../routing/Context";





export default ()=>{
    const { auth, users, submitMessage } = useContext(GlobalContext)
    const [ subject, setSubject ] = useState("")
    const [ msg, setMsg ] = useState("")
    const [ reciver, setReciver ] = useState(  users.filter( user => user.admin )[0].email )

    console.log(auth.admin)

    const handleSend = (e)=>{
        e.preventDefault()

        const id = users.filter( user => user.email === reciver)[0]._id

        submitMessage(id, { title: subject, text: msg, sender: auth.email})
    }

    let temp = "Dropdown"
    const handleSelect = (eventKey) => {
        setReciver(eventKey)
        temp = reciver
    }

    return <Container>
                <Row>
                <Form variant="success" className="d-grid gap-2 d-md-block" >

                        <Form.Control type="text" placeholder="Subject" onChange={ e => setSubject(e.target.value)}/>
                        <Form.Control type="textarea" as="textarea" rows={3} placeholder="Message" onChange={ e => setMsg(e.target.value)} />
                        
                        <ButtonGroup size="sm" variant="success">
                            <Button variant="success" onClick={ handleSend }>Send to:</Button>
                            <Button variant="outline-success" disabled={true}>{reciver}</Button>
                            <DropdownButton variant="outline-success" disabled={auth.admin ? false : true} id="dropdown" title="" onSelect={ handleSelect }>
                                { users.map(user => {if(user.email !== undefined && !user.admin){
                                    return <Dropdown.Item eventKey={user.email}>{user.email}</Dropdown.Item>
                                } })}
 
                            </DropdownButton>
                        </ButtonGroup>

                    </Form>
                </Row>
            </Container>


}