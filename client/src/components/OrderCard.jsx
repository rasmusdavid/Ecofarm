import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useStates } from "react-easier"
import { useContext, useState } from "react";
import GlobalContext from "../routing/Context";
import Table from 'react-bootstrap/Table';

export default ({  }) => {

  const { orderHistory, handleVerify, auth, loadOrders } = useContext(GlobalContext);

  //loadOrders()

  const handleVerifyClick = (id) => {
    handleVerify(id)
  }

  return <ListGroup>

    {orderHistory.map(order => {
      const sum = order.sum.reduce((acc, curr) => acc + curr, 0);
      return <>
      <ListGroup horizontal>
      <ListGroup.Item>{order.prods.map(product => product).join(", ")}</ListGroup.Item>
      <ListGroup.Item>{sum}kr</ListGroup.Item>
      <ListGroup.Item>{order.email}</ListGroup.Item>
      <ListGroup.Item>
        {order.verify ? "Ready to pick up" : "Not ready for pick up"}
        {auth.admin ? (
          <Button style={{ width: "150px", margin: "2px" }} onClick={() => handleVerifyClick(order._id)}>Mark as ready for pick up</Button>
        ) : ""}
      </ListGroup.Item>
    </ListGroup>
      </>
    })}

  </ListGroup>

  // <Card style={{}}>
  // <Table className="table">
  //       <thead>
  //           <tr>
  //               <th scope="col">Product</th>
  //               <th scope="col">Weight</th>
  //               <th scope="col">Price</th>
  //               {/* <th scope="col">Quantity</th> */}
  //           </tr>
  //       </thead>

  //       {cart.items.map((product, index) => <tbody>
  //           <tr key={index}>
  //               <td>{product.item}</td>
  //               <td>{product.weight} kg</td>
  //               <td>{product.price} kr</td>

  //               {/* <td> {cart.quantity} </td> */}
  //           </tr>
  //       </tbody>)}

  //       <tbody>
  //           <tr>
  //               <td>
  //                   Total
  //               </td>
  //               <td>{cart.total2} kg</td>
  //               <td>{cart.total} kr</td>
  //               {/* <td>{cart.quantity} pcs.</td> */}
  //           </tr>
  //       </tbody>

  //   </Table>
  //   <Card.Body>
  //     <Card.Title>{item.item}</Card.Title>
  //     <Card.Img variant="top" src={item.image} />
  //     <Card.Text>{item.email}</Card.Text>
  //     <Card.Text>
  //       {item.price} kr pcs. {item.weight} kg
  //     </Card.Text>
  //   </Card.Body>
  // </Card>

};
