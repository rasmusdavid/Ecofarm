import { Outlet } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";

import { useContext } from "react";
import GlobalContext from "../routing/Context";


export default () => {
    const { auth } = useContext(GlobalContext)
    return <>
        <Container style={{ margin: "auto" }} fluid="md">
                <Row className="p-3 mb-2 bg-success text-white" >
                <h1>EcoFarm</h1>{String(auth.email)}    
                </Row>
                <Row style={{}}>
                    <Outlet />
                </Row>
        </Container>
    </>

}
