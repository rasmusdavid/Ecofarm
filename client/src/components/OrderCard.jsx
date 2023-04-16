import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import GlobalContext from "../routing/Context";

export default () => {

  const { orderHistory } = useContext(GlobalContext);

  console.log(orderHistory)

  return <Card>
    {orderHistory.map( order => {
        return <div style={{display: "flex", alignItems: "space-between"}}>
                  {order.items.map( obj => { 
                    console.log(obj.item)
                    return <div>
                          <p>{obj.item} = {obj.weight} Kg = {obj.price} Kr</p>
                      </div>
                  })}
                  <p>{order.total}</p>
                  {order.verify ? <Button>Verified</Button> : <Button>Not verified</Button>}
                </div>
    })}
  </Card>
}

// import Card from "react-bootstrap/Card";
// import { useContext } from "react";
// import GlobalContext from "../routing/Context";

// export default () => {

//   const { orderHistory } = useContext(GlobalContext);

//   console.log(orderHistory)

//   return <Card>
//     {orderHistory.map( order => {

//       console.log(order.items)

//       order.items.map( obj => { 
//         console.log(obj.item)
//         return <p>HEJ</p>
//       })

//     })}
//   </Card>
// }
