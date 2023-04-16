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

  return <div>

    {orderHistory.map(order => {
      return <div style={{display: "flex", justifyContent: "space-between", border: "1px solid black", width: "90%", margin: "auto"}}>
                <div>
                {order.items.map(obj => {
                        return <p style={{fontSize: "10px"}}>{obj.item} = {obj.weight} Kg = {obj.price} Kr </p>})}
                </div>
                <p style={{fontSize: "15px"}}>Total: {order.total}</p>
      </div>
    })}

  </div>}

