import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { useStates } from "react-easier"
import { useContext } from "react";
import GlobalContext from "../routing/Context";
import Table from 'react-bootstrap/Table';

export default ({ order }) => {

  const { orderHistory } = useContext(GlobalContext);

  const cart = useStates('cart')

  return <ListGroup>

            {orderHistory.map( order => {
            return <>
            <ListGroup.Item>{order.item}</ListGroup.Item>
            <ListGroup.Item>{order.price}</ListGroup.Item>
            <ListGroup.Item>{order.weight}</ListGroup.Item>
            <ListGroup.Item>{order.email}</ListGroup.Item>
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
