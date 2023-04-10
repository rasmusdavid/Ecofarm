import { Outlet } from "react-router-dom"
import GlobalContext from "../routing/Context";
import { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";


export default () => {
    const { auth } = useContext(GlobalContext)


    if (auth.LoggedIn) {
        return <Container fluid="md">
            <Row className="p-3 mb-2 bg-success text-white" style={{ maxWidth: "600px" }}>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Ecofarm</h1>
                        </div>

                        <div class="col">
                            <Button className="btn btn-light text-success" style={{ width: "100%", maxWidth: "150px", margin: "10px" }} onClick={() => setContent(<MessageCard />)}>Cart</Button>
                        </div>
                    </div></div>

            </Row>
            <Row>
                <Outlet />
            </Row>
        </Container>

    } else {
        return <Container fluid="md">
            <Row className="p-3 mb-2 bg-success text-white" style={{ maxWidth: "600px" }}>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Ecofarm</h1>
                        </div>

                    </div></div>

            </Row>
            <Row>
                <Outlet />
            </Row>
        </Container>
    }



}
