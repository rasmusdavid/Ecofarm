import Card from "react-bootstrap/Card";
import { useContext } from "react";
import GlobalContext from "../routing/Context";

export default () => {

  const { orderHistory } = useContext(GlobalContext);

  return <Card>
          <p>TEST</p>
          {orderHistory.map( order => {
                  {order.items.map( obj => {
                      return <Card><p>Hallå</p>
                                {console.log(obj.item)}
                                <p>{obj.item}</p>
                                <p>{obj.price}</p>
                                <p>{obj.weight}</p>
                                <p>{obj.email}</p>
                              </Card>
                            })}
            // return <div>{order.email}</div>
            //        <div>{order.total}</div>
          })} </Card> 
}
