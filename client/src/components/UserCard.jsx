import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { useState, useContext } from 'react';
import GlobalContext from '../routing/Context';


export default () => {
    const { auth } = useContext(GlobalContext)

    return <Container fluid="md">
        <h1>{ auth.username }</h1>
        <Col>
            <Row>
                <Button variant="outline-success">Account info</Button>
                <Button variant="outline-success">Account info</Button>
                <Button variant="outline-success">Account info</Button>
                <Button variant="outline-success">Account info</Button>
            </Row>
        </Col>
    </Container>

}
