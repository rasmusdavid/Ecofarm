import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useStates } from "react-easier"
import Table from 'react-bootstrap/Table';

export default ({ item }) => {

  const cart = useStates('cart')

  return (
    <>
      <Card style={{}}>
      <Table className="table">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price</th>
                    {/* <th scope="col">Quantity</th> */}
                </tr>
            </thead>

            {cart.items.map(product => <tbody>
                <tr>
                    <td>{product.item}</td>
                    <td>{product.weight} kg</td>
                    <td>{product.price} kr</td>
                    {/* <td> {cart.quantity} </td> */}
                </tr>
            </tbody>)}

            <tbody>
                <tr>
                    <td>
                        Total
                    </td>
                    <td>{cart.total2} kg</td>
                    <td>{cart.total} kr</td>
                    {/* <td>{cart.quantity} pcs.</td> */}
                </tr>
            </tbody>
                  
        </Table>
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
