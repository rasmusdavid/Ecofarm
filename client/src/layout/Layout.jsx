import { Outlet } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";


export default () => {
    return <>
        <Container fluid="md">
                <Row className="p-3 mb-2 bg-success text-white" style={{ maxWidth: "600px" }}>
                <h1>EcoFarm</h1>    
                </Row>
                <Row>
                    <Outlet />
                </Row>
        </Container>
    </>

}
