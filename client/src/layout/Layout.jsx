import {Outlet} from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default ()=> {
    return <>
    <Container fluid="md">
        <Row className="p-3 mb-2 bg-success text-white">
            <h1>Eco farm</h1>
            </Row>
        <Row>
            <Outlet />
        </Row>
    </Container>
    </>

}
