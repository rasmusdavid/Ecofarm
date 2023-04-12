import { useState, useEffect, useContext } from "react";
import OrderCard from "./OrderCard";

import GlobalContext from "../routing/Context";
import Container from "react-bootstrap/esm/Container";

export default () => {
  const { orderHistory } = useContext(GlobalContext);

  return (
    <>
      <Container className="justify-content-md-center">
        <h1 className="text-center g-4"> Order History</h1>
        <div>
          {orderHistory.map((props) => {
            return <OrderCard item={props} />;
          })}
        </div>
      </Container>
    </>
  );
};
