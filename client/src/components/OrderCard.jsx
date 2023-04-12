import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default ({ item }) => {
  return (
    <>
      <Card style={{}}>
        <Card.Body>
          <Card.Title>{item.item}</Card.Title>
          <Form>
            <Row>
              <Col>
                <Card.Img variant="top" src={item.image} />
              </Col>
              <Col>
                <Card.Text>{item.email}</Card.Text>
                <Card.Text>
                  {item.price} kr pcs. {item.weight} kg
                </Card.Text>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
