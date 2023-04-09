import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default () => {
    return <>

        <div className="card mb-3 col-10 mx-auto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Qjd4zSyisDx8qiF0kCGmvUSloiOL_52KIA&usqp=CAU" />
            <div className="card-body">
                <h5 className="card-title">Product</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                <div className="card-footer bg-transparent border-secondary p-4">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Amount" />
                            </Col>
                            <Col>
                                <Button>Add to cart</Button>
                            </Col>
                        </Row>
                    </Form>

                </div>
            </div>
        </div>
    </>
}