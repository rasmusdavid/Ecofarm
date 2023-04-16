import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useStates } from "react-easier"
import { useContext, useState } from "react";
import GlobalContext from "../routing/Context";
import Table from 'react-bootstrap/Table';

export default () => {

  const { orderHistory, handleVerify, auth, submitMessage } = useContext(GlobalContext);

  const handleVerifyClick = (id, userId) => {
    handleVerify(id)
    console.log(userId)
    submitMessage(userId, {title: "Order verified", 
                           text: "Your order is now processed! You can pick it up on Ecofarm adress: ecofarm road 122 EcoVillage",
                           sender: auth.email})
  }

  return <div>
            <h3 style={{}}> Order history</h3>
            {orderHistory.map(order => {
                if(order.email === auth.email || auth.admin ){
                      return <div style={{display: "flex", justifyContent: "space-between", border: "1px solid black", width: "90%", margin: "auto"}}>
                                <div>
                                {order.items.map(obj => {
                                        return <p style={{fontSize: "10px"}}>{obj.item} = {obj.weight} Kg = {obj.price} Kr </p>})}
                                </div>
                                <p style={{fontSize: "15px"}}>Sender: {order.email}</p>
                                <p style={{fontSize: "15px"}}>Total: {order.total}</p>
                                {order.verify ? <Button variant="outline-success"
                                                        style={{width: "90px"}}
                                                        size="sm"
                                                        disabled={true}>Verified</Button > 
                                              : <Button variant="outline-danger"
                                                        style={{width: "90px"}}
                                                        size="sm"
                                                        disabled={!auth.admin}
                                                        onClick={()=> handleVerifyClick(order._id, order.sendid)}>Not verified</Button>}
                              </div>}})}

  </div>}

