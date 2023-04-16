import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useContext } from "react";
import GlobalContext from "../routing/Context";

export default () => {
    const { auth } = useContext(GlobalContext)
    return <>
            <Container style={{ margin: "auto", maxWidth: "700px" }} fluid="md">
                    <Row className="p-3 mb-2 bg-success text-white" >
                    <h1>EcoFarm</h1>
                    </Row>
                    <Row style={{}}>
                        <Outlet />
                    </Row>
            </Container>
            </>

}
